cilium deep dive -> 공식문서 부수기
https://docs.cilium.io/en/stable/

## 목표
**Flannel CNI 실습 이후**
**cilium 실습하고 비교를 진행한다**


## 환경 준비

맥 사용자 vagrant 및 테스트 환경 설치
```
VirtualBox 설치 - [Release](https://www.virtualbox.org/wiki/Changelog)

# VirtualBox 설치 brew install --cask virtualbox VBoxManage --version 7.1.10r169112


Vagrant 설치
# Vagrant 설치 brew install --cask vagrant vagrant version Installed Version: 2.4.7
```


![[Pasted image 20250713195352.png]]
파드 IP 대역 : 10.244.0.0/16


실습 코드 정리
```
mkdir cilium-lab && cd cilium-lab

curl -O https://raw.githubusercontent.com/gasida/vagrant-lab/refs/heads/main/cilium-study/1w/Vagrantfile

vagrant up
```

```
# ssh 접속 전, 노드들의 eth0 IP 확인
for i in ctr w1 w2 ; do echo ">> node : k8s-$i <<"; vagrant ssh k8s-$i -c 'ip -c -4 addr show dev eth0'; echo; done #
```
![[Pasted image 20250713200339.png]]

**실습환경 배포 파일**
Vagrantfile
```
# Variables
K8SV = '1.33.2-1.1' # Kubernetes Version : apt list -a kubelet , ex) 1.32.5-1.1
CONTAINERDV = '1.7.27-1' # Containerd Version : apt list -a containerd.io , ex) 1.6.33-1
N = 2 # max number of worker nodes

# Base Image = AWS ami와 동일하다
# BOX 이미지 : https://portal.cloud.hashicorp.com/vagrant/discover/bento/ubuntu-24.04
## Rocky linux Image https://portal.cloud.hashicorp.com/vagrant/discover/rockylinux
BOX_IMAGE = "bento/ubuntu-24.04"
BOX_VERSION = "202502.21.0"

Vagrant.configure("2") do |config|
#-ControlPlane Node
    config.vm.define "k8s-ctr" do |subconfig|
      subconfig.vm.box = BOX_IMAGE
      subconfig.vm.box_version = BOX_VERSION
      subconfig.vm.provider "virtualbox" do |vb|
        vb.customize ["modifyvm", :id, "--groups", "/Cilium-Lab"]
        vb.customize ["modifyvm", :id, "--nicpromisc2", "allow-all"]
        vb.name = "k8s-ctr"
        vb.cpus = 2
        vb.memory = 2048
        vb.linked_clone = true
      end
      subconfig.vm.host_name = "k8s-ctr"
      subconfig.vm.network "private_network", ip: "192.168.10.100"
      subconfig.vm.network "forwarded_port", guest: 22, host: 60000, auto_correct: true, id: "ssh"
      subconfig.vm.synced_folder "./", "/vagrant", disabled: true
      subconfig.vm.provision "shell", path: "init_cfg.sh", args: [ K8SV, CONTAINERDV]
      subconfig.vm.provision "shell", path: "k8s-ctr.sh", args: [ N ]
    end

# 인자값을 받아서 loop 를 돈다
# BOX_IMAGE -> 이미지를 가져와서 진행
# cpu와 메모리는 최소 사양을 맞춰둠
# 설정에서 어댑터1, 어댑터2 -> 무작위모드에 모두허용
#-Worker Nodes Subnet1
  (1..N).each do |i|
    config.vm.define "k8s-w#{i}" do |subconfig|
      subconfig.vm.box = BOX_IMAGE
      subconfig.vm.box_version = BOX_VERSION
      subconfig.vm.provider "virtualbox" do |vb|
        vb.customize ["modifyvm", :id, "--groups", "/Cilium-Lab"]
        vb.customize ["modifyvm", :id, "--nicpromisc2", "allow-all"]
        vb.name = "k8s-w#{i}"
        vb.cpus = 2
        vb.memory = 1536
        vb.linked_clone = true
      end
      subconfig.vm.host_name = "k8s-w#{i}"
      subconfig.vm.network "private_network", ip: "192.168.10.10#{i}"
      subconfig.vm.network "forwarded_port", guest: 22, host: "6000#{i}", auto_correct: true, id: "ssh"
      subconfig.vm.synced_folder "./", "/vagrant", disabled: true
      subconfig.vm.provision "shell", path: "init_cfg.sh", args: [ K8SV, CONTAINERDV]
      subconfig.vm.provision "shell", path: "k8s-w.sh"
    end
  end

end
```

![[Pasted image 20250713201121.png]]

![[Pasted image 20250713201133.png]]

![[Pasted image 20250713201154.png]]

```
### 내부에 shell 적용
### shell에 arg를 전달 (K8SV, CONTAINERDV)
      subconfig.vm.provision "shell", path: "init_cfg.sh", args: [ K8SV, CONTAINERDV]
      subconfig.vm.provision "shell", path: "k8s-w.sh"
```

init_cfg.sh : args 참고하여 설치
```
#!/usr/bin/env bash

echo ">>>> Initial Config Start <<<<"

echo "[TASK 1] Setting Profile & Change Timezone"
echo 'alias vi=vim' >> /etc/profile
echo "sudo su -" >> /home/vagrant/.bashrc
ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime


echo "[TASK 2] Disable AppArmor"
systemctl stop ufw && systemctl disable ufw >/dev/null 2>&1
systemctl stop apparmor && systemctl disable apparmor >/dev/null 2>&1


echo "[TASK 3] Disable and turn off SWAP"
swapoff -a && sed -i '/swap/s/^/#/' /etc/fstab


echo "[TASK 4] Install Packages"
apt update -qq >/dev/null 2>&1
apt-get install apt-transport-https ca-certificates curl gpg -y -qq >/dev/null 2>&1

# Download the public signing key for the Kubernetes package repositories.
mkdir -p -m 755 /etc/apt/keyrings
K8SMMV=$(echo $1 | sed -En 's/^([0-9]+\.[0-9]+)\..*/\1/p')
curl -fsSL https://pkgs.k8s.io/core:/stable:/v$K8SMMV/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
echo "deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v$K8SMMV/deb/ /" >> /etc/apt/sources.list.d/kubernetes.list
curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

# packets traversing the bridge are processed by iptables for filtering
echo 1 > /proc/sys/net/ipv4/ip_forward
echo "net.ipv4.ip_forward = 1" >> /etc/sysctl.d/k8s.conf

# enable br_netfilter for iptables 
modprobe br_netfilter
modprobe overlay
echo "br_netfilter" >> /etc/modules-load.d/k8s.conf
echo "overlay" >> /etc/modules-load.d/k8s.conf


echo "[TASK 5] Install Kubernetes components (kubeadm, kubelet and kubectl)"
# Update the apt package index, install kubelet, kubeadm and kubectl, and pin their version
apt update >/dev/null 2>&1

# apt list -a kubelet ; apt list -a containerd.io
apt-get install -y kubelet=$1 kubectl=$1 kubeadm=$1 containerd.io=$2 >/dev/null 2>&1
apt-mark hold kubelet kubeadm kubectl >/dev/null 2>&1

# containerd configure to default and cgroup managed by systemd
containerd config default > /etc/containerd/config.toml
sed -i 's/SystemdCgroup = false/SystemdCgroup = true/g' /etc/containerd/config.toml

# avoid WARN&ERRO(default endpoints) when crictl run  
cat <<EOF > /etc/crictl.yaml
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
EOF

# ready to install for k8s 
systemctl restart containerd && systemctl enable containerd
systemctl enable --now kubelet


echo "[TASK 6] Install Packages & Helm"
apt-get install -y bridge-utils sshpass net-tools conntrack ngrep tcpdump ipset arping wireguard jq tree bash-completion unzip kubecolor >/dev/null 2>&1
curl -s https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash >/dev/null 2>&1


echo ">>>> Initial Config End <<<<"

```
k8s-ctr.sh : kubeadm init (Pod/ServiceCIDR) , 편리성 설정(k, kc)
```
#!/usr/bin/env bash

echo ">>>> K8S Controlplane config Start <<<<"

echo "[TASK 1] Initial Kubernetes"
kubeadm init --token 123456.1234567890123456 --token-ttl 0 --pod-network-cidr=10.244.0.0/16 --service-cidr=10.96.0.0/16 --apiserver-advertise-address=192.168.10.100 --cri-socket=unix:///run/containerd/containerd.sock >/dev/null 2>&1


echo "[TASK 2] Setting kube config file"
mkdir -p /root/.kube
cp -i /etc/kubernetes/admin.conf /root/.kube/config
chown $(id -u):$(id -g) /root/.kube/config


echo "[TASK 3] Source the completion"
echo 'source <(kubectl completion bash)' >> /etc/profile
echo 'source <(kubeadm completion bash)' >> /etc/profile


echo "[TASK 4] Alias kubectl to k"
echo 'alias k=kubectl' >> /etc/profile
echo 'alias kc=kubecolor' >> /etc/profile
echo 'complete -F __start_kubectl k' >> /etc/profile


echo "[TASK 5] Install Kubectx & Kubens"
git clone https://github.com/ahmetb/kubectx /opt/kubectx >/dev/null 2>&1
ln -s /opt/kubectx/kubens /usr/local/bin/kubens
ln -s /opt/kubectx/kubectx /usr/local/bin/kubectx


echo "[TASK 6] Install Kubeps & Setting PS1"
git clone https://github.com/jonmosco/kube-ps1.git /root/kube-ps1 >/dev/null 2>&1
cat <<"EOT" >> /root/.bash_profile
source /root/kube-ps1/kube-ps1.sh
KUBE_PS1_SYMBOL_ENABLE=true
function get_cluster_short() {
  echo "$1" | cut -d . -f1
}
KUBE_PS1_CLUSTER_FUNCTION=get_cluster_short
KUBE_PS1_SUFFIX=') '
PS1='$(kube_ps1)'$PS1
EOT
kubectl config rename-context "kubernetes-admin@kubernetes" "HomeLab" >/dev/null 2>&1


echo "[TASK 6] Install Kubeps & Setting PS1"
echo "192.168.10.100 k8s-ctr" >> /etc/hosts
for (( i=1; i<=$1; i++  )); do echo "192.168.10.10$i k8s-w$i" >> /etc/hosts; done


echo ">>>> K8S Controlplane Config End <<<<"
```

![[Pasted image 20250713201645.png]]

### 기본동작
![[Pasted image 20250713201723.png]]
- vagrant ssh 접속 시 호스트에 127.0.0.1(6xxxx)를 목적지로 접속 → 이후 포트포워딩(S/DNAT)을 통해서 내부에 VM로 SSH 연결됨
- NAT Mode 에 10.0.2.2(GateWay), 10.0.2.3(DNS Server), 10.0.2.4(TFTP Server) 용도로 IP가 예약됨

![[Pasted image 20250713201944.png]]

```
(⎈|HomeLab:N/A) root@k8s-ctr:~# ss -tnp |grep sshd
ESTAB 0      0           [::ffff:10.0.2.15]:22          [::ffff:10.0.2.2]:56619 users:(("sshd",pid=5400,fd=4),("sshd",pid=5354,fd=4))
```
10.0.2.2. -> virtualbox NAT모드의 GateWay

### DNS 서버 정보
![[Pasted image 20250713202209.png]]

내부 ip확인
![[Pasted image 20250713202249.png]]

호스트 네트워크로 10.0.2.15로 할당 -> 192 대역으로 변경 필요
![[Pasted image 20250713202325.png]]


## internal IP 변경
```
#
cat /var/lib/kubelet/kubeadm-flags.env

# INTERNAL-IP 변경 설정
NODEIP=$(ip -4 addr show eth1 | grep -oP '(?<=inet\s)\d+(\.\d+){3}')
sed -i "s/^\(KUBELET_KUBEADM_ARGS=\"\)/\1--node-ip=${NODEIP} /" /var/lib/kubelet/kubeadm-flags.env
systemctl daemon-reexec && systemctl restart kubelet

cat /var/lib/kubelet/kubeadm-flags.env

#
kubectl get node -owide
NAME      STATUS     ROLES           AGE   VERSION   INTERNAL-IP      EXTERNAL-IP   OS-IMAGE             KERNEL-VERSION     CONTAINER-RUNTIME
k8s-ctr   NotReady   control-plane   24m   v1.33.2   192.168.10.100   <none>        Ubuntu 24.04.2 LTS   6.8.0-53-generic   containerd://1.7.27
...
```

-> 작업
```
(⎈|HomeLab:N/A) root@k8s-ctr:~# cat /var/lib/kubelet/kubeadm-flags.env
KUBELET_KUBEADM_ARGS="--container-runtime-endpoint=unix:///run/containerd/containerd.sock --pod-infra-container-image=registry.k8s.io/pause:3.10"
(⎈|HomeLab:N/A) root@k8s-ctr:~#
(⎈|HomeLab:N/A) root@k8s-ctr:~# NODEIP=$(ip -4 addr show eth1 | grep -oP '(?<=inet\s)\d+(\.\d+){3}')
(⎈|HomeLab:N/A) root@k8s-ctr:~# sed -i "s/^\(KUBELET_KUBEADM_ARGS=\"\)/\1--node-ip=${NODEIP} /" /var/lib/kubelet/kubeadm-flags.env
(⎈|HomeLab:N/A) root@k8s-ctr:~# systemctl daemon-reexec && systemctl restart kubelet
(⎈|HomeLab:N/A) root@k8s-ctr:~#
(⎈|HomeLab:N/A) root@k8s-ctr:~# cat /var/lib/kubelet/kubeadm-flags.env
KUBELET_KUBEADM_ARGS="--node-ip=192.168.10.100 --container-runtime-endpoint=unix:///run/containerd/containerd.sock --pod-infra-container-image=registry.k8s.io/pause:3.10"
```

워커노드에도 작업
![[Pasted image 20250713202632.png]]

![[Pasted image 20250713202650.png]]

init, join을 kubeadm configuration 을 파일 형태로 지정해서 가능하다


### flannel cni 설치
```
#
kubectl cluster-info dump | grep -m 2 -E "cluster-cidr|service-cluster-ip-range"
                            "--service-cluster-ip-range=10.96.0.0/16",
                            "--cluster-cidr=10.244.0.0/16",

#
kubectl get pod -n kube-system -l k8s-app=kube-dns -owide
NAME                       READY   STATUS    RESTARTS   AGE   IP       NODE     NOMINATED NODE   READINESS GATES
coredns-674b8bbfcf-fl4tr   0/1     Pending   0          39m   <none>   <none>   <none>           <none>
coredns-674b8bbfcf-npvs9   0/1     Pending   0          39m   <none>   <none>   <none>           <none>

#
ip -c link
ip -c route
brctl show

#
iptables-save
iptables -t nat -S
iptables -t filter -S
iptables -t mangle -S

#
tree /etc/cni/net.d/

```



샘플어플리케이션
```
# 샘플 애플리케이션 배포
cat << EOF | kubectl apply -f -
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webpod
spec:
  replicas: 2
  selector:
    matchLabels:
      app: webpod
  template:
    metadata:
      labels:
        app: webpod
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
              - key: app
                operator: In
                values:
                - sample-app
            topologyKey: "kubernetes.io/hostname"
      containers:
      - name: webpod
        image: traefik/whoami
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: webpod
  labels:
    app: webpod
spec:
  selector:
    app: webpod
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: ClusterIP
EOF


# k8s-ctr 노드에 curl-pod 파드 배포
cat <<EOF | kubectl apply -f -
apiVersion: v1
kind: Pod
metadata:
  name: curl-pod
  labels:
    app: curl
spec:
  nodeName: k8s-ctr
  containers:
    - name: curl
      image: alpine/curl
      command: ["sleep", "36000"]
EOF

#
crictl ps
for i in w1 w2 ; do echo ">> node : k8s-$i <<"; sshpass -p 'vagrant' ssh vagrant@k8s-$i sudo crictl ps ; echo; done

```


대다수의 CNI는 iptables를 통해 서비스동작처리에 규칙을 활용해서 확인된다

**Service 가 100개 , 1000개 , 10000개 증가 되면???**



### 도전과제
rocky 이미지 변경 -> BASE_IMAGE
init, join을 kubeadm configuration 을 파일 형태로 지정해서 가능하다

