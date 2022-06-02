### styled-components

```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`		-> Extending
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

### As and Attrs

html 태그 변경하기

```javascript
import styled from "styled-components";

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
    <Father as="header">
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log in
      </Btn>
    </Father>
  );
}

export default App;
```

내부에 html 속성 집어 넣기

```javascript
import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
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

### Animation and Pseudo

```javascript
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0%{
    transform:rotate(0deg);
    border-radius:0px;
  }
  50%{
    border-radius:100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">😃</Emoji>
      </Box>
    </Wrapper>
  );
}

export default App;
```

<br/>

### TypeScript

타입스크립트는 strongly-typed 언어

`const plus = (a:number,b:number) => a+b;`

1. 기존 Create React App으로 만든 프로젝트에 타입스크립트 설치
   npm install --save typescript @types/node @types/react @types/react-dom @types/jest
   +tsconfig.json파일이 없다면 추가로 설정

2. Create React App을 타입스크립트로 시작하기
   npx create-react-app my-app --template typescript 또는
   You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0). 오류가 뜬다면 아래 명령어로 진행
   npx create-react-app@5.0.0 my-app --template typescript

\+ create-react-app의 글로벌 설치는 더 이상 지원되지 않습니다.
이전에 npm install -g create-react-app를 통해 전역적으로 create-react-app을 설치한 경우 npm uninstall -g create-react-app을 사용하여 패키지를 제거하는 것이 좋습니다.

https://create-react-app.dev/docs/adding-typescript

DefinitelyTyped
https://github.com/DefinitelyTyped/DefinitelyTyped

<br/>

**Interface의 사용** -> typescript의 prop

```javascript
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
```

