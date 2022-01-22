## Troubleshooting Elastic Load Balancing Connectivity in AWS



**goal**

In this hands-on lab, we're going to fix the connectivity issue in the AWS environment so we can view the Linux AMI/Apache test page of the provisioned EC2 instances via the ELB's DNS name.



-일부 또는 모든 인스턴스의 현재 상태가 OutOfService이고, 설명 필드에 Instance has failed at least the Unhealthy Threshold number of health checks consecutively 메시지가 표시되는 경우, 인스턴스가 로드 밸런서 상태 확인에 실패한 것입니다.



### AWS 로드밸런서 ELB

로드 밸런서(Load Balancer)는 부하(load)를 적절하게 분배해주는 장치입니다. AWS 에서는 ELB(Elastic Load Balancer)라는 이름으로 로드 밸런서를 제공합니다. 이 시스템은 자동으로 로드 밸런싱을 제공하며 시스템이 서버가 죽지 않도록 알아서 관리해 줍니다. ELB의 주요 특징은 다음과 같습니다.

- 트래픽 분산
- 자동 확장
- 인스턴스의 상태를 자동 감지해서 오류가 있는 시스템은 배제
- 사용자 세션을 특정 인스턴스에 고정
- SSL 암호화 지원
- SSL의 경유지로 ELB를 사용하는 경우에 SSL 처리에 따른 부하를 ELB가 수용하게 된다.
- IPv4, IPv6 지원
- CloudWatch를 통해서 모니터링
- 사용한 시간과 통과한 트래픽에 따라서 종량제로 과금



로드밸런서, EC2 모두 보안그룹이 있다

로드밸런서가 EC2와 연결이 잘 안되면 EC2가 동작 중이어도 오류가 발생할 수 있다



Instance has failed at least the UnhealthyThreshold number of health checks consecutively.

사용자는 로드 밸런서 포트(Load Balancer Port)를 통해 웹에 접속합니다. 사용자가 접속하면 로드 밸런서는 적당한 웹서버에 분배해 주는데 이때 로드 밸런서는 Instance Port를 통해 웹서버와 통신합니다. 사용자가 http를 이용하여 통신한다면 로드 밸런서는 80번 포트를 통해 통신할 것입니다. 로드밸런서는 웹서버의 포트로 통신하게 됩니다. 저의 리액트의 앱의 경우 웹서버는 3001번부터 3006번을 사용하기 때문에 그 사이의 포트를 이용해 통신하게 됩니다.





### nginx 로드 밸런서 vs AWS ELB

> ELB와 NGINX는 모두 합리적인 옵션이며 시작할 때 각각의 비용은 비슷합니다.주요 차별화 요소는 전체 스택을 운영체제까지 제어하고 애플리케이션에 더 많은 계층을 추가하지 않고 캐싱과 같은 추가 기능을 활용할 것인지 여부를 선택하는 것입니다. 이때는 NGINX가 더 나은 선택이 될 것입니다. 반면 AWS에 내장 된 기능을 활용하여 구축 및 유지 관리해야하는 인프라의 양을 단순화하려는 경우 ELB가 솔루션입니다.



**"nginx는 웹 서버다."**





### Static Pages와 Dynamic Pages

![img](images/static-vs-dynamic.png)

1. Static Pages
   Web Server는 파일 경로 이름을 받아 경로와 일치하는 file contents를 반환한다.
   항상 동일한 페이지를 반환한다.
   Ex) image, html, css, javascript 파일과 같이 컴퓨터에 저장되어 있는 파일들

2. Dynamic Pages
   인자의 내용에 맞게 동적인 contents를 반환한다.
   웹 서버에 의해서 실행되는 프로그램을 통해서 만들어진 결과물 

   **Servlet: WAS 위에서 돌아가는 Java Program**
   개발자는 Servlet에 doGet()을 구현한다.





### Web Server와 WAS의 차이

[[Web\] Web Server와 WAS의 차이와 웹 서비스 구조 - Heee's Development Blog (gmlwjd9405.github.io)](https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html)

