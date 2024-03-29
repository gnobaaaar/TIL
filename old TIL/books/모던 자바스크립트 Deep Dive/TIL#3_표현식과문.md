### DAY 3

🔖 오늘 읽은 범위 : 05.표현식과 문 ~ 

------

## 😃 책에서 기억하고 싶은 내용

- 자바스크립트를 이루고 있는 거의 모든 것은 객체이다

<br/>

<br/>

## 🤔 내용정리

모든 값은 데이터 타입을 가지며, 메모리에 2진수, 즉 비트의 나열로 저장된다

### 리터럴

사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기법을 말한다

자바스크립트 엔진은 코드가 실행되는 시점인 런타임에 리터럴을 평가해 값을 생성한다

<br/>

### 표현식

**값이 평가될 수 있는 statement **= 변수에 할당이 되느냐?

`var score = 100` -> 100은 리터럴, 리터럴은 평가되어 값을 생성하므로 리터럴은 그 자체로 표현식

<br/>

### 문 statement

**문은 프로그램을 구성하는 기본 단위이자 최소 실행 단위**

문의 집합이 프로그램

**토근은 문법적의미를 가지며 문법적으로 더 이상 나눌 수 없는 코드의 기본요소를 의미**

<br/>

### 데이터 타입

**primitive type 원시타입**

숫자, 문자, 불리언, undefined, null, symbol(ES6)

**object 객체타입**

객체, 함수, 배열타입

<br/>

자바스크립트는 모든 수를 실수로 처리한다

```javascript
console.log(1 === 1.0);	//true
```

<br/>

### 템플릿 리터럴

ES6부터 도입 -> 백틱을 사용해 표현한다

템플릿 리터럴에서는 이스케이프 시퀀스 없이 줄바꿈이 허용

```javascript
var template = `<ul>
	<li><a href="#">Home</a></li>
</ul>
`;
//자연스럽게 띄어쓰기가 적용된다
```

<br/>

+가 아닌 표현식 삽입을 통해 문자열을 삽입가능하다 -> 숫자 덧셈도 문자열로 치환된다

```javascript
console.log(`my name is ${first} ${}name`) //my name is Jackson
```

<br/>

### Symbol Type

- 심벌은 ES6에서 추가된 타입으로 변경 불가능한 원시타입니다

- 다른 값과 중복되지 않는 유일무이한 값

```javascript
// create symbol 
var key = Symbol('key');
console.log(typeof key); //symbol

// create object 
var obj = {};

// 이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용
obj[key] = 'value';
console.log(obj[key]);	//value
```

<br/>

<br/>

**데이터타입 -> 메모리 공간 확보 -> 타입에 따라 메모리 공간의 크기가 결정**



