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



### Array Functions

```javascript
const numbers = [1,2,3];

const doubleNumArray = numbers.map((num) => {
  return num*2;
});
```

