import React, { useState } from "react";

function CalculatorMain() {
  const [inputValue, setInputValue] = useState("");

  function display(value) {
    setInputValue(inputValue + value);
  }

  function calculate() {
    let answer = eval(inputValue);
    setInputValue(answer);
  }

  function clear() {
    setInputValue("");
  }

  return (
    <>
      <form name="calc" className="calculator">
        <input type="text" className="value" value={inputValue} />
        <span className="num clear" onClick={() => clear()}>
          C
        </span>
        <span onClick={}>/</span>
        <span onClick={}>*</span>
        <span onClick={}>9</span>
        <span onClick={}>8</span>
        <span onClick={}>7</span>
        <span onClick={}>6</span>
        <span onClick={}>-</span>
        <span onClick={}>5</span>
        <span onClick={}>4</span>
        <span onClick={}>3</span>
        <span className="plus" onClick={}>+</span>
        <span onClick={}>2</span>
        <span onClick={}>1</span>
        <span onClick={}>0</span>
        <span onClick={}>00</span>
        <span onClick={}>.</span>
        <span className="equal" onClick={}>=</span>
      </form>
    </>
  );
}

export default CalculatorMain;
