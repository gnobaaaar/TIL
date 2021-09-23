## Monitoring and Notifications with CloudWatch Events and SNS



### AWS SNS란

구독 중인 엔드포인트 또는 클라이언트에 메시지 전달을 조정 및 관리하는 웹 서비스

주제와 구독으로 나뉨

**주제**

- 메시지를 게시할 수 있는 대상과 받을 수 있는 대상
- 암호화 여부
- 메시지 전송 정책

**구독**

- HTTP(웹)
- SQS
- 이메일
- Lambda
- 모바일 어플리케이션



이벤트 생산하는 쪽을 게시자 ( Publisher )라 하고, 이벤트를 구독하는 쪽을 구독자 ( Subscriber )라 한다

AWS SNS는 구독자( ex : Application, HTTP, Lambda, SQS ) 에게 전송된 메시지 전달 상태에 log를 남겨 준다

log는 CloudWatch 로그로 전송

![SNS](E:%5Ceumdengs%5CVelog%5Cimages%5CCloudWatch%5CSNS.jpg)