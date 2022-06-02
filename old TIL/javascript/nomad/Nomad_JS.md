# Nomad Chanllenge
#TIL/javascript

```html
<body>
	<script src='hello.js'></script>
</body>
```

자바스크립트의 document는 웹페이지의 정보를 가지고 있다

* querySelector -> CSS처럼 사용이 가능하다
`const title = document.querySelector(".hello h1:first-child");`
* 여러 개를 가져오는 방법 : querySelectorAll

<br/>

<br/>


### Event
```javascript
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked!");
}

title.addEventListener("click");
//title.onclick = handletitleClick; 동일한 결과
```

*window*도 기본으로 제공된다
resize, copy

<br/>

*classList*
> classList를 이용하면 클래스를 조작하는 다양한 메서드들을 쓸 수 있다.
> classList.add : 클래스를 필요에 따라 삽입한다.
> classList.remove : 클래스를 필요에 따라 제거한다.

*classList.togle*은 classList의 클래스를 확인해서만약 있다면 클래스를 제거
없다면 추가해준다

<br/><br/>