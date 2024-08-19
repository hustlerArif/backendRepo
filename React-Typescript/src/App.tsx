import React, { useState } from "react";
import SecondButton from "./components/SecondButton";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState<string|undefined>(' ');

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <DisplayMessage text={"anyName"} />
      <MyButton onClick={() => alert("hello")} />
      <SecondButton onClick={() => alert("hello from second")} />
      <CountIndicator count={count} />
      <CountIndicatorButton onClick={handleClick} />
      <br />
      <br />
      {/* <input type="text" value={input} onChange={handleInput}></input>
      {input} */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput}></input>
        <button type="submit">login</button>
      </form>
      {input}
    </>
  );
}

interface DisplayMessageProps {
  text: string;
}

const DisplayMessage: React.FC<DisplayMessageProps> = (props) => (
  <p> {props.text} </p>
);

interface MyButtonProps {
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
  return <button onClick={props.onClick}>Button1</button>;
};

interface CountIndicatorProps {
  count: number;
}

const CountIndicator: React.FC<CountIndicatorProps> = (props) => (
  <p>You clicked {props.count} times</p>
);

interface CountIndicatorButtonProps {
  onClick: () => void;
}

const CountIndicatorButton: React.FC<CountIndicatorButtonProps> = (props) => {
  return (
    <>
      <button onClick={props.onClick}>Click me</button>
    </>
  );
};

export default App;
