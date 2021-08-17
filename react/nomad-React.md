## Nomad React #1

#TIL/React

<br />

## Arrow Functions
argument 두 개 이상이면 괄호를 사용

```javascript
//Arrow Function은 리턴이 함축되어있다
const btn = document.querySelector("button");

const handleClick = event => console.log(event);

btn.addEventListener("click", handleClick);
```

<br />

<br />

## 

## Template Literals

템플릿들과 변수들, 문자열들을 다루기 좋은 방법
backticks를 사용한다
```javascript
const sayHello = (name="gnobaaaar") => `Hello ${name}`;
```


## Object Destructuring
### Structuring
새로운 변수들은 object에 기반하여 생성된다
`const {nationality : difName} = human` 으로 기존 변수 이름을 사용하지 않을 수도 있다 

```javascript
const human ={
	name:"gnobaaaar",
	nation : "US",
  age : 12,
	favFood : {
		dinner : 'kimchi',
		breakfast : 'none',
		lunch : 'hambuger'
	}
}
const name = human.name;
const nation = human.nation

// 같은 행동을 반복하므로 비효울적이다 -> structuring 사용
// 객체에 기반하여 변수 생성

const { name, nation, age: realAge, favFood : { dinner, breakfast, lunch} } = human;

console.log(name, nation);
```

<br /><br />

## Spread Operator

배열, Object, Argument, Function
```javascript
const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];

const allDays = days + otherDays
//위의 방식은 두 배열을 string으로 만든다 (console.log 확인)

//Unpack을 우선 해주어야 한다

const allDays = [...days, ...otherDays]

//Object
const ob = {
	first : "hi",
	second : "hello"
}
const ab = {
	third : "bye bye"
}

const two = { ...ob, ...ab};

```

<br /><br />

## Classes

생성자를 통해 초기값으로 클래스를 생성한다
청사진과 같다 -> extends를 통해 확장이 가능하다

```javascript
class Human{
	constructor(name, lastName){
		this.name = name;
		this.lastName = lastName;
	}
}
const Jacoson = new Human("Jacoson", "Serro");
console.log(Jacoson.name);

//extends
const Baby extends Human{
	cry(){
		console.log('WAAAAAAAA');
	}
}

const myBaby = new Baby("Elies", "Kas");
console.log(myBaby.cry());
```

<br /><br />