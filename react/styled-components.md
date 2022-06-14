### styled components

- Extends and Props

```javascript
import styled from "styled-components";
import React from "react";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 100px;
  width: 100px;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
    </Father>
  );
}

export default App;
```

<br/>

### As

- 컴포넌트를 확장하지 않고 html 태그 부분의 변경
- as = 'a'

```javascript
import styled from "styled-components";
import React from "react";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as="a">Log in</Btn>
    </Father>
  );
}

export default App;
```

<br/>

### attrs

- styled component에 전달

```javascript
import styled from "styled-components";
import React from "react";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
```

<br/>

### animation

- keyframe을 import

```javascript
import styled, { keyframes } from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius : 0px;
  }
  50%{
    border-radius : 100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius : 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
`;

function App() {
  return (
    <Wrapper>
      <Box />
    </Wrapper>
  );
}

export default App;
```

<br/>

### peudo selectors

- styled component 안에 없어도 포함한 요소를 선택 가능
- &:hover

```javascript
import styled, { keyframes } from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius : 0px;
  }
  50%{
    border-radius : 100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius : 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😃</span>
      </Box>
    </Wrapper>
  );
}

export default App;
```

<br/>

```javascript
import styled, { keyframes } from "styled-components";
import React from "react";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius : 0px;
  }
  50%{
    border-radius : 100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius : 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: ${rotationAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😃</Emoji>
      </Box>
      <Emoji>🌊</Emoji>
    </Wrapper>
  );
}

export default App;
```

<br/>

### dark and light THEME

- 프로퍼티의 이름이 동일해야 한다

Index.js

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};

const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
```

