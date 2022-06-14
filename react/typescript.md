### Typescript

자바스크립트와 거의 유사

Strongly-typed programming language

```typescript
const plus = (a:number , b:number) => a+b;
plus(1,1);
```

<br/>

### Typing and Props

```typescript
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}

export default Circle;
```



### optional

```typescript
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}


function Circle({ bgColor, borderColor }: CircleProps) {
  return <Container bgColor={bgColor} borderColor={borderColor ?? "white"} />;
}



// 기본값주기
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
```

<br/>

### state

```typescript

function Circle({ bgColor, borderColor }: CircleProps) {
  const [value, setValue] = useState<number | string>(0);
  setValue(2);
  setValue("hello");

  return (
    <Container
      bgColor={bgColor}
      borderColor={borderColor ?? bgColor}
    ></Container>
  );
}
```

<br/>

### Forms

- 모르는 상황 -> 구글링

```typescript
import React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  return (
    <div>
      <form>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
```

