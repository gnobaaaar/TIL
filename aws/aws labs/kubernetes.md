## kubernetes



### 쿠버네티스란

쿠버네티스는 컨테이너화된 워크로드와 서비스를 관리하기 위한 이식성이 있고, 확장가능한 오픈소스 플랫폼이다. 쿠버네티스는 선언적 구성과 자동화를 모두 용이하게 해준다. 쿠버네티스는 크고, 빠르게 성장하는 생태계를 가지고 있다. 쿠버네티스 서비스, 기술 지원 및 도구는 어디서나 쉽게 이용할 수 있다.







### 파드(pod)

*파드(Pod)* 는 쿠버네티스에서 생성하고 관리할 수 있는 배포 가능한 가장 작은 컴퓨팅 단위이다.

파드라는 오브젝트에 담는다



오토스케일링은 k8이 하고

kubectl은 k8이 수행하는데 필요한 정보를 config파일인 yaml로 작성하고 yaml파일을 적용하도록 전달하는 k8과 사용자간 커뮤니케이션을 위한 comandline interface로 이해하자





## Launching an EKS Cluster

Elastic Kubernetes Service (EKS) is a fully managed Kubernetes service from AWS. In this lab, you will work with the AWS command line interface and console, using command line utilities like `eksctl` and `kubectl` to launch an EKS cluster, provision a Kubernetes deployment and pod running instances of `nginx`, and create a `LoadBalancer` service to expose your application over the internet.



nginx-deployment.yaml

```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    env: dev
spec:
  replicas: 3
  selector:
    matchLabels:
      env: dev
  template:
    metadata:
      labels:
        env: dev
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
```



nginx-svc.yam

```
apiVersion: v1
kind: Service
metadata:
  name: nginx-svc
  labels:
    env: dev
spec:
  type: LoadBalancer
  ports:
  - port: 80
  selector:
    env: dev
```













```
mkdir -p $HOME/bin && cp ./kubectl $HOME/bin/kubectl && export PATH=$PATH:$HOME/bin
```

-> 어디서나 실행가능하게 만들어준다









