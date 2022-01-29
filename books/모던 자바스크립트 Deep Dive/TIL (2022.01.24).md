### DAY 1

🔖 오늘 읽은 범위 : 시작 ~ 

------

## 😃 책에서 기억하고 싶은 내용

- 프로그래밍은 컴퓨터에게 실행을 요구하는 일종의 커뮤니케이션
- **Computational Thinking**
- 문제해결을 위한 요구사항의 실현이 코드

<br/>

## 🤔 내용정리

사람 -> 프로그래밍언어 -> 컴파일러 -> 기계어 -> 컴퓨터

`console.log('Hello World')`

**ES5**

- HTML5와 함께 출연한 표준안
- JSON, strict mode, 접근자 프로퍼티, 향상된 배열 조작(forEach, map, filter, reduce ...)

**ES6**

- let, const, 클래스, arrow function, Proxy ...

<br/>

### Ajax

**자바스크립트를 이용해 서버와 브라우저가 비동기 방식으로 데이터를 교환할 수 있는 통신 기능**

XMLHttpRequest

당시 구글 맵스가 웹 브라우저에서 자바스크립트와 Ajax를 기반으로 동작함

<br/>

### jQuery

DOM을 손쉽게 제어 -> 크로스 브라우징 이슈도 어느정도 해결

<br/>

### Node.js

자바스크립트 런타임 환경(구글 V8 자바스크립트 엔진)

브라우저의 엔진에서만 동작하던 자바스크립트를 다양한 환경에서 놀게 해줌

주로 서버 사이드 어플리케이션에서 사용, 모듈, 파일시스템, HTTP등 빌트인 API 제공

**비동기 I/O, 단일 스레드 이벤트 루프** -> 요청 처리 성능이 좋다

<br/>

### SPA프레임워크

CBD(컴포넌트 기반 개발)방법론을 기반으로하는 SPA(Single Page Application)이 대중화

Angular, React, Vue.js등의 다양한 SPA 프레임워크/라이브러리가 많은 사용자층을 확보

<br/>

### 자바스크립트

ECMAScript + 브라우저별 클라이언트 사이드 Web API(DOM, BOM, Canvas, XMLHttpRequest, fetch...)

**웹브라우저에서 동작하는 유일한 프로그래밍 언어**

인터프리터언어 -> 실행파일생성X, 한줄씩 읽고 실행, 코드 실행마다 인터프리트 과정 반복

모던 브라우저에서는 일부 소스는 컴파일 해서 속도를 보안한다

<br/>

브라우저는 랜더링의 목적이 있다면 Node.js는 브라우저 외부에서 자바스크립트 실행환경을 제공하는 것이 주된 목적!

Node.js는 DOM API 제공하지 않는다 ->외부환경에서 HTML요소를 파싱해 객체화할 이유가 없으므로

또한 클라이언트 사이트 Web API를 제공하지 않고 고유 API를 제공

<br/>

CodeRunner 확장 플러그인은 Node.js기반 -> `alert` 실행 오류







