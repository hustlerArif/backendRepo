import React from "react";

interface MySecondButtonProps {
  onClick: () => void;
}

const SecondButton: React.FC<MySecondButtonProps> = (props) => {
  return <button onClick={props.onClick}>Button2</button>;
};

export default SecondButton;
