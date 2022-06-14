### 참조형 및 원시형 데이터타입

```javascript
const person = {
  name:'Max'
}

//const secondPerson = person;
//복사가 아닌 참조

const secondPerson = {
  ...person
};

person.name = 'Menu';

console.log(secondPerson);
```

<br/>

### Array Functions

```javascript
const numbers = [1,2,3];

const doubleNumArray = numbers.map((num) => {
  return num*2;
});
```

<br/>

### forEach

- 고차함수(자신의 매개변수에 callback함수를 전달받는다)
- map과 다르게 `undefined`를 리턴 -> 새로운 배열이 필요하지 않으면 forEach
- for과는 달리 도중에 멈출 수가 없어서 배열을 순회하는 속도가 빨라짐
- 두 번째 인자는 함수내에서 this로 사용된다

```javascript
a = [10, 11, 12, 13, 14, 15];
a.forEach(function(v,i){
  console.log(v,i,this);
}, [1,2]);
```

<br/>

### map

- 새로운 배열을 생성한다
- forEach와 유사
- 없으면 undefined
- 원본배열과 생성된 배열과 길이가 같다

```javascript
a = [10, 11, 12, 13, 14, 15];
let answer = a.map(function(v,i){
  return v*v;
}, [1,2]);
console.log(answer);
```

<br/>

### filter

- 새로운 배열, 원하는 원소만 조건
- callback함수가 true을 리턴할 때의 원소만 배열에 저장한다

```javascript
a = [10, 11, 12, 13, 14, 15];
let answer = a.filter(function(v,i){
  return v%2==1;
}, 0);
console.log(answer);
```

<br/>

### reduce

- 콜백함수, 초기값을 전달받아 콜백함수 반환값을 다음 콜백함수의 첫번째 인수로 사용 mv
- 값을 생성해서 return한다

```javascript
a = [10, 11, 12, 13, 14, 15];
answer = a.reduce(function(acc,v){
  return acc+v;
}, [1,2]);
console.log(answer);
```

<br/>

### substr, substring

`str.substr(시작 인덱스, 추출 갯수)`
substr은 시작 인덱스번호, 몇개를 추출할것인지를 입력

`str.substring(시작 인덱스번호, 끝 인덱스번호)`
substring은 시작 인덱스 번호, 끝 인덱스번호를 입력

<br/>

