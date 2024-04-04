import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState<number>(0);
  const clickincrement = () => {
    setCount(++count);
  };
  const clickdecrement = () => {
    if (count > 0) {
      setCount(--count);
    }
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={clickincrement}>+</button>
      <button onClick={clickdecrement}>-</button>
    </>
  );
}
export default Counter;
