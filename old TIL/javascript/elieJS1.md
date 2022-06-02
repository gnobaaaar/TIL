# Elie’s Javascript #1
#TIL/javascript

자바스크립트의 구동 순서 이해 중요

> 자바스크립트와 자바는 다르다 🤣
> BABEL : 사용자에게 배포할 때 낮은 ECMA로 전환해준다
> TypeScript
> SPA(Single Page Application) : 하나의 페이지 안에서 부분만 업데이트(리액트, 뷰)
> Node.js : 구글 크롬의 V8엔진으로 빌드 된 *JavaScript 런타임*
> WebAssembly를 통해 C++, C 등의 언어로 자바스크립트 대체도 가능하다



### Script acync와 defer의 차이점

js가 파일이 크고 인터넷이 느리면 스크립트를 헤더에 넣으면 실행이 느려진다
기본적인 html로딩은 빨라도 JS가 API나 DOM요소 활용이 있다면 로딩이 느려진다


병렬로 실행되어 실행속도가 개선되나 실행이 먼저되어버려서 조작하는 순서가 맞지 않을 수 있다

사용자의 시간 소요가 여전히 조금 더 걸릴 수 있다
정의된 스크립트 순서와 상관없이 다운로드 순서에 맞춰 실행이 된다

원하는대로 실행되는 것을 알 수 있다
가장 효율적이고 안전한 방식


# Use Strict
‘use strict’ 를 파일 위에 써주어서 바닐라 자바스크립트를 작성하는 것이 좋다
성능개선까지 가능하다


---


var은 사용해서는 안된다
값을 선언하기도 전에 쓸 수 있다


## Variable
*hoisting*
	* 어디에 선언했던간에 제일 위로 변수를 끌어올려주는 것을 의미한다
	* var은 *호이스팅*된다

/let을 대체하여 쓴다/

*Constants* : 변경 불가능한 데이터, 상수
	* 보안
	* 스레드 보안
	* 개인적인 실수를 막는다

/자바스크립트에서는 function도 변수이다/

*number타입*
자바스크립트는 타입이 동적이기에 변수에 숫자로 할당만 해주면 된다

`const bingInt = 1231241804912409180491280184012n`
n만 추가해주면 bigInt로 인식한다(호환이 넓지는 않다)

*string타입*
개별 문자, 문자열 모두 string 타입으로 이해한다

*template literals(string)*
백틱을 활용하여 작성해준다
외부의 변수를 가져오는데 활용된다
혹은 html 내부에서 자바스크립트 문법을 사용한다

```javascript
const helloBob = `hi ${brendan}!`;
```


*Simbol type* : 고유한 인식자를 생성한다
```javascript
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
// false가 출력된다

const gSymbol1 = Symbol.for('id');
const gSymbo1l2 = Symbol.for('id');
console.log(symbol1 === symbol2);
// true가 출력된다
```


*Dynamic typing* : 자바스크립트는 동적 타입 언어
	* C와 자바 처럼 타입을 정하는 언어와는 다르다
	* 런타임시에 할당된 타입으로 적용된다
	* 규모가 커지면 좋게 적용되지 않을 수 있다
-> TypeScript의 등장으로 이어진다

*object* : 객체



## 연산, 반복문
메모리에 저장되는 방식은 primitive(값 자체 저장), object(참조위치=ref) 두 가지로 나뉘게 된다

데이터 타입은 immutable(premitive, frozen objects), mutable(기본) 두 가지가 존재한다

*논리연산자* 일때 배치의 순서도 무거운 연산을 뒤로 놓아야한다

*loose equality*(레퍼런스를 확인, 타입x) : == !=
*strict equality* : === !==
```
console.log(0 == false); //true
console.log(0 === false); //false, type이 같지 않다
```




## Arrow Function
우리는 API를 볼 때, Function을 쓸 때 함수의 용도를 파악할 수 있다
하나의 함수는 한 가지의 일만 하도록 만들어 주어야 한다
함수는 object의 일종
클로저는 나중에 제대로 배워보자

### Rest parameters
배열의 형태로 전달된다

```
function printAll(...args){
	for(let i=0; i<args.length; i++){
		console.log(args[i]);
	}
	for(const arg of args){
		console.log(arg);
	}
	args.forEach((arg)=> console.log(arg));
}

printAll('dream', 'coding', 'elie');
```


### Function Expression
선언과 동시에 할당이 가능하다
function이라는 키워드(ananymous function)로 작성이 가능하다

*callback function*
함수를 매개변수처럼 선언하여 필요시에 함수내에서 쓰는 것을 콜백함수라고 한다
함수의 이름을 쓰면 디버깅할때 도움이된다

*arrow function*
`const simple = () => console.log('simple');`

*IIFE* : 선언과 동시에 호출
```javascript
(function hello(){
	console.log('IIFE');
)();
```




## 클래스와 오브젝트
class = fields + methods -> 캡슐화, 상속
오브젝트 = 클래스의 인스턴스, 다수 생성, 데이터가 들어가 있다
프로토타입도 알 필요가 있다

instance of -> 클래스의 인스턴스인지 확인하는 것

### 오브젝트란?
key와 value의 집합체
`const elie = { name : 'elie', age : 4 }`

```
// key는 string 타입으로 받아온다 -> 런타임시에 판단할때(dot이 더 낫다)
console.log(elie['name']);
console.log(elie.name);
```


### for..in vs for..of

```javascript
for (key in elie) {
	console.log(key);
}

// 순차적인 iterable한 곳에 사용된다
const array = [1,2,3,4,5];
for (value of array){
	console.log(value);
}
```


### cloning

```
const user = {name : 'eum', age : '20'};
const user2 = user //user의 ref를 동일하게 참조
user2.name = 'kim';
// 변경됨을 알 수가 있다

//old way
const user3 = {};
for (key in user) {
	user3[key] = user[key];
}

//object를 사용하기
const user4 = {};
Object.assign(user4, user3);
or
const user4 = Object.assign({}, user3};	//리턴값을 활용
```


### assign
객체를 병합시킬 수 있다

```
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 대상 객체 자체가 변경됨.
```

자바책 하나를 보고 객체지향에 대한 이해를 높이는 것도 중요



<br/>

## Array (배열)
* 자료구조의 일종
* 인덱스가 존재한다
* 같은 타입의 데이터를 넣는 것이 좋다


```javascript
"use strict";

// array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍇", "🍌"];
console.lpg(fruits);
console.log(fruits.length);
console.log(fruits[0]);

console.log(clear);
// 3. Looping over the array
// print all fruits
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach -> array는 잘 받아오지 않는다 , document를 평상시에 읽자
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. Addtion, deletion, copy
// add item
// push : add an item to the end
fruits.push("🍎", "🍟");

// delete item : remove item
fruits.pop();

// add to the benigging 앞에서부터 넣는 api
fruits.unshift("🥑");

// shift : 앞에서 부터 데이터가 빠진다
fruits.shift();

// shift 와 unshift는 매우 느리다 -> 자료의 이동이 필연적이다

// remove in the position
fruits.splice(1); //지정한 인덱스 1 부터 전부 지워버린다(인덱스포함)
fruits.splice(1, 1); //1 인덱스의 요소만 지워진다(인덱스 1부터 하나만 지운다)
fruits.splice(1, 1, "🍔", "🍒"); //지우고 대체 요소를 넣을 수도 있다

// combine 2 arrays
const fruts2 = ["🧀", "🧅"];
const newFruits = fruits.concat(fruts2);
console.log(newFruits);

// 5. Searching
console.clear();
console.log(fruits.indexOf("🍔"));
console.log(fruits.includes("🍎")); // 존재하는지 true, false로 출력된다(없으면 -1)
// indexOf는 일치하는 가장 빠른 요소를, lastIndexOf는 뒤에서 가장 빠른 요소를 출력
console.log(fruits.lastIndexOf("🍎"));

```



## 배열 퀴즈
```
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
}

// Q2. make an array out of a string
{
  const fruits = '🍎	, 🥝, 🍌, 🍒';
}

// Q3. make this arsray look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
}

// Q6. make an array of enrolled students
{
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}



```

