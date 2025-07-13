
Cilium은 eBPF를 기반으로 Pod Network 환경 및 보안을 제공하는 CNI Plugin이다

TC ebpf
XDP 드라이버 영역 ebpf

최적화 동작을 처리
![[Pasted image 20250713204645.png]]


BPF 가 확장되어서 eBPF가 되었다
eBPF를 다양한 영역에서 활용하기 시작

xDP 장표 확인

cilium도 TC레벨에서 패킷조작이 이루어진다->???
XDP -> low level 차단 : 성능의 향상 가능

XDP offloaded 
Native모드
등등등

XDP offload -> CPU 사용량이 적어진다




cilium VXLAN -> overlay network : 노드의 IP로 인캡슐해서 전달
노드간 통신만 되면 가능

Direct routing =native모드

Cluster Scope IPAM 관리방법


### kube-proxy
대체 100% 가능

iptables 는 규모가 커질수록 문제가 발생 가능 -> ppt

- Cilium **Operator** : K8S 클러스터에 대한 한 번씩 처리해야 하는 작업을 관리.
- Cilium **Agent** : 데몬셋으로 실행, K8S API 설정으로 부터 '네트워크 설정, 네트워크 정책, 서비스 부하분산, 모니터링' 등을 수행하며, eBPF 프로그램을 관리한다.
- Cilium **Client** (CLI) : Cilium 커멘드툴, eBPF maps 에 직접 접속하여 상태를 확인할 수 있다.
- **Hubble** : 네트워크와 보안 모니터링 플랫폼 역할을 하여, 'Server, Relay, Client, Graphical UI' 로 구성되어 있다.
- **Data Store** : Cilium Agent 간의 상태를 저장하고 전파하는 데이터 저장소, 2가지 종류 중 선택(K8S CRDs, Key-Value Store)


Cilium eBPF Datapath
후킹을 어느 구간에서 할것인가 -> XDP, TC

BPF-based host routing -> 쓰기 좋은 최적화 기능 5.10 이상

--set routingMode=native \
--set autoDirectNodeRoutes=true \
--set ipam.operator.clusterPoolIPv4PodCIDRList={"172.20.0.0/16"} \
--set ipv4NativeRoutingCIDR=172.20.0.0/16 \
같이 간다

도전과제 - 듀얼 오버레이 마이그레이션
kind k8s 에 Flannel CNI 환경에서 최소 중단 전략을 통해 Cilium CNI 마이그레이션(노드 단위) 가이드 실습 따라해보기 - [Docs](https://docs.cilium.io/en/stable/installation/k8s-install-migration/)



