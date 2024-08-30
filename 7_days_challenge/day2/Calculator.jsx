// import React, { useState } from 'react';
// import './Calculator.css';

// const Calculator = () => {
//   const [input, setInput] = useState('');
//   const [result, setResult] = useState('');

//   const handleClick = (value) => {
//     setInput(input + value);
//   };

// //value-> '+'
// //setINput-> 5+'+'
// //input -> 5+3
// //result->8
// //eval-> (5+3).toString()

//   const clearInput = () => {
//     setInput('');
//     setResult('');
//   };

//   const calculateResult = () => {
//     try {
//       setResult(eval(input).toString());
//     } catch (error) {
//       setResult('Error');
//     }
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <input type="text" value={input} disabled />
//         <div className="result">{result}</div>
//       </div>
//       <div className="buttons">
//         <button onClick={clearInput}>C</button>
//         <button onClick={() => handleClick('7')}>7</button>
//         <button onClick={() => handleClick('8')}>8</button>
//         <button onClick={() => handleClick('9')}>9</button>
//         <button onClick={() => handleClick('/')}>/</button>
//         <button onClick={() => handleClick('4')}>4</button>
//         <button onClick={() => handleClick('5')}>5</button>
//         <button onClick={() => handleClick('6')}>6</button>
//         <button onClick={() => handleClick('*')}>*</button>
//         <button onClick={() => handleClick('1')}>1</button>
//         <button onClick={() => handleClick('2')}>2</button>
//         <button onClick={() => handleClick('3')}>3</button>
//         <button onClick={() => handleClick('-')}>-</button>
//         <button onClick={() => handleClick('0')}>0</button>
//         <button onClick={() => handleClick('.')}>.</button>
//         <button onClick={calculateResult}>=</button>
//         <button onClick={() => handleClick('+')}>+</button>
//       </div>
//     </div>
//   );
// };

// export default Calculator;

import React, { useState } from "react";
import './Calculator.css'

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
    // console.log(input)
  };

  const calculateResult = () => {
    setResult(eval(input).toString());
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <>
    <h1>Simple Calculator</h1>
 <div className="container1">
 <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>

<br></br>

      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("4")}>4</button>

      <br></br>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("1")}>1</button>
      <br></br>    
      <button onClick={() => handleClick("+")}>+</button>
      <button onClick={() => handleClick("-")}>-</button>
      <button onClick={() => handleClick("/")}>/</button>
      <button onClick={() => handleClick("%")}>%</button>
      <button onClick={() => calculateResult()}>=</button>
      <button onClick={() => handleClear()}>Clear</button>
 </div>

      <div>{input}</div>

      <div>{result}</div>
    </>
  );
}

export default Calculator;
