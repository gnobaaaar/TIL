## Nginx

### 개요

HTTP, Reverser Proxy, IMAP/POP PROXY server를 제공하는 오픈 소스 서버 프로그램

엔진엑스(Nginx)는 동시접속 처리에 특화된 웹 서버 프로그램

Apache보다 동작이 단순하고, 가볍고 성능이 좋은 엔진



### 역할

- 정적 파일을 처리하는 **HTTP 서버**로서의 역할
  - HTML, CSS, JS, 이미지 등을 웹 브라우저에 전송
- 리버스 프록시로서의 역할
  - 클라이언트는 프록시 서버에 요청을 보내고 프록시 서버가 배후 서버(reverse server)로 부터 데이터를 가져옴
  - 여기서 프록시 서버가 Nginx, 리버스 서버가 응용 프로그램 서버를 의미요청을 배분하는 역할

[Forward Proxy와 Reverse Proxy 차이점 (tistory.com)](https://firework-ham.tistory.com/23)

- 비동기 처리방식의 Nginx

- 로드밸런싱

  - 요청이 왔을 때 적절히 나누는 로드밸선서의 역할도 있다
  - 기본은 **라운드 로빈**, 가중치를 두는 것이 가능

- 보안

  



### 웹서버와 WAS의 차이

- Web Server
  - 웹 브라우저 클라이언트로부터 HTTP 요청을 받아 정적인 컨텐츠(.html .jpeg .css 등)를 제공
  - 정적인 컨텐츠 제공 WAS를 거치지 않고 바로 자원을 제공
- WAS(Web Application Server)
  - 클라이언트의 요청(Request)을 WAS에 보내고, WAS가 처리한 결과를 클라이언트에게 전달(응답, Response)한다.

[[Web\] Web Server와 WAS의 차이와 웹 서비스 구조 - Heee's Development Blog (gmlwjd9405.github.io)](https://gmlwjd9405.github.io/2018/10/27/webserver-vs-was.html)



**"nginx를 이용하면 이러한 어플리케이션(node.js)의 부족한 부분들을 쉽게 메꿀수 있다."**





### Nginx vs. Apache

Apache

- 쓰레드 / 프로세스 기반 구조로 요청 하나당 쓰레드 하나가 처리

- 메모리, CPU 낭비가 심함

Nginx

- 비동기 Event-Driven 기반 

- 구조다수의 연결을 효율적으로 처리 가능





### Ubuntu에서 설치

> apt-get update
>
> apt-get install nginx
>
> Asia로 지역설정
>
> nginx -V : 버전확인
>
> service nginx start

/usr/share/nginx/html 의 index.html이 실행된다 (Linux)





### nginx.conf 기본 환경설정 튜닝

/etc/nginx

nginx.conf



![환경설정](images/%ED%99%98%EA%B2%BD%EC%84%A4%EC%A0%95.PNG)







![최상단](images/%EC%B5%9C%EC%83%81%EB%8B%A8.PNG)

**최상단**

- user - NGINX 프로세스가 실행되는 권한
  - nginx는 마스터와 워커 프로세스로 구분
  - 워커 프로세스가 실질적인 웹서버 역할을 수행
- work_processes - NGINX 프로세스 실행 가능 수
- pid - NGINX 마스터 프로세스 ID 정보 저장





![events블럭](images/events%EB%B8%94%EB%9F%AD.PNG)

**events 블럭**

- NGINX의 비동기 이벤트 처리 방식에 대한 옵션 설정

- worker_connections는 프로세스가 처리할 최대 커넥션의 수
- multi_accept on; 추가디폴트값 off





![http블럭](images/http%EB%B8%94%EB%9F%AD.PNG)

**http블럭**

- keepalive_timeout - 커넥션을 몇 초동안 유지할지 설정

- servers token - NGINX의 버전을 숨길 것인가에 대한 옵션
- types_hash_max_size, server_names_hash_bucket_size
  - 호스트의 도메인 이름에 대한 공간을 설정
- include
  - 가상 호스트 설정, 반복되는 옵션 항목을 파일에서 불러옴

- 설정 파일의 반영
  - sudo service nginx reload





### 보안점=질문 지점들

- `service nginx start` 로 실행할 때 해당되는 nginx의 위치
- index.html의 위치
- 포워드 프록시랑 리버스 프록시의 차이는?

