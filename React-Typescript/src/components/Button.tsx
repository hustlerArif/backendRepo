import React, { useState } from "react";

// (i) how to create component in typescript and control props:

// const Button =(props:{text:string} )=> {
//   return (
//     <button>{props.text}</button>
//   )
// }
// OR use interface/type approach:-

// 1)creating interface

interface MyButtonProps {
//   text: string;  // required
  text: string|number|boolean ;  // required
//   onClick: () => void;
  onClick?: () => void;   // optional
}

const Button: React.FC<MyButtonProps> = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
  };

  export default Button

//........................................

// 2)creating own type:

// type propsName = { text: string };

// const Button: React.FC<propsName> = (props) => {
//      const  {text} = props  // destructure
// //   return <button>{props.text}</button>;
//   return <button>{text}</button>;
// };

// (ii) Hooks: see App page




