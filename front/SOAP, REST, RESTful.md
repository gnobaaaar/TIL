# SOAP

목적 : 다른 언어로 다른 플랫폼에 빌드된 어플리케이션이 통신할 수 있도록 설계된 최초의 표준 프로토콜

Simple Object Access Protocol

정보교환을 위한 표준 프로토콜

SOA : Service를 중심

http, https 등을 통해 XML기반 메세지를 교환하는 프로토콜

* 모든 data가 XML로 표현되고 data와 data를 다루는 operation이 WSDL로 정의되면 UDDI에 등록되어 누구라도 service를 검색, 접근할 수 있도록 공개한다



### WSDL 

Web Services Description Language

웹서비스를 기술한 언어(XML로 작성)

SOAP, XML 스키마와 결합하여 인터넷에서 웹 서비스를 제공하기 위해 사용된다



### UDDI 

Universal Description, Discovery and Integration

저장소, 웹서비스 저장소이다

- 복잡한 구조 -> http에서 무겁다
- 개발환경지원 필요 -> 웹 서비스 개발 난이도가 높다
- UDDI를 거쳐야 한다





# REST

SOAP의 한계를 극복하기 위한 통신규약

Representational State Transfer : 자원의 표현에 의한 상태 전달

data가 요청되면 JSON 또는 XMLfh 전달된다

ROA를 구현 (Resource Oriented Architecture)로 중간매개(UDDI)없이 직접 주고 받는 구조