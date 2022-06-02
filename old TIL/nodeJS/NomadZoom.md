# npm 이란
#TIL/tistory

::Node.js 는 Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임::

핵심은 자바스크립트 런타임! 이라는 것

## 런타임
프로그램이 실행되는 환경


*웹프로젝트의 기본환경 설정*
	* 리액트의 경우 `create-react-app` 을 통하여 이미 셋팅된 환경을 이용하기도 한다

*프로젝트 정보를 default로 설정할 때*
`npm init -y`

Nodemon은 프로젝트 폴더의 파일들을 모니터링 하고 있다가 파일이 수정되면 서버를 자동으로 restart 시켜주는 패키지이다.
`npm i nodemon -D`





# 줌 클론코딩 - 기초 지식
#TIL/javascript


nodeJS -> 실시간 구현에 좋다

### 알고있어야 할 것
* Express JS
* app.get()
* Pug
* template
* (req, res)
* package.json
* Babel
* nodemon



## Express란
*Node.js를 위한 빠르고 간결한 웹 프레임워크*
::Fast, unopinionated, minimalist web framework::
서버개발하고자 하는 개발자들을 위해 서버를 쉽게 구성할 수 있는 프레임워크(클래스와 라이브러리의 집합체)

시작방법
```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
```


그런데 node.JS는 뭔가..



## 서버
노드를 통해 자바스크립트 어플리케이션을 실행할 수 있지만 노드는 서버 어플리케이션을 실행하는데 제일 많이 사용
Node.js는 자바스크립트 프로그램이 서버로서 기능하기 위한 도구를 제공하므로 서버역할을 수행할 수 있다

Node.js 는 Chrome V8 Javascript 엔진으로 빌드된 Javascript 런타임



## 이벤트 기반
이벤트 발생할 때 미리 지정해둔 작업을 수행하는 방식

*이벤트 리스너(Event Listener)에 콜백(callback) 함수를 등록한다*
이벤트 기반 시스템에서는 특정 이벤트가 발생할 때 무엇을 할지 미리 등록해두는 것을 의미한다.

* 이벤트 루프 : 이벤트 발생시 호출할 콜백 함수들을 관리하고, 호출된 콜백 함수의 실행 순서를 결정하는 역할을 담당
* 백그라운드 : setTimeout 과 같은 타이머나 이벤트 리스너들이 대기하는 곳
* 태스크 큐 : 이벤트 발생 후, 백그라운드에서는 태스크 큐로 타이머나 이벤트 리스너의 콜백 함수를 보낸다. 정해진 순서대로 콜백들이 줄을 서 있어서 콜백 큐라고도 부른다.



## Callback 함수
callback은 다른 객체에게 일을 시키고 그 일이 끝나는 것을 기다리지 않고 끝나고 부를 때까지 다른 일을 하는 것
*non-block이며 비동기 방식의 함수를 사용한다*

* 함수에 인자로 전달되는 함수. *파라미터형태로 함수*에 들어가게 됨
* 순차적으로 코드를 실행하고 싶을 때 씀
* 다른데서 만든 함수도 집어 넣을 수 있음
* 콜백함수는 addEventLister, setTimeout과 같이 특정한 함수에만 넣어 사용

### callback 함수를 쓰는 이유?
* 만약 node.js를 쓰면서 콜백을 받아야 하는 상황에 callback 함수를 사용하지 않는다면 콜백 함수의 과정이 끝나기 전에 다음 프로세스가 진행될 수 있음.
* 이를 막기 위해 차례대로 수행하기 위해 callback 함수를 사용해야 함.



## 논 블로킹 I/O
* 논블로킹이란 ?
이전 작업이 완료 될 때까지 대기하지 않고 다음 작업을 수행하는 것을 의미한다.
즉, 작업들이 모두 동시에 처리될 수 있는 작업이며, 같은 작업을 더 짧은 시간안에 처리할 수 있다.
* 블로킹이란 ?
이전 작업이 끝나야만 다음작업을 수행하는 것을 의미한다.
* setTimeout(callback, 0) 은 코드를 논 블로킹으로 만들기 위해 사용하는 기법 중 하나.
노드에서는 동기와 블로킹, 비동기와 논블로킹이 서로 유사하다는 것만 알아두자.