import { useState } from "react";

function GenerateRandom() {
  let [randomNumber, setRandomNumber] = useState<number>(0);

  const clickHandler = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    setRandomNumber(randomNumber);
  };
  return (
    <>
      <h2>{randomNumber}</h2>

      <button onClick={clickHandler}>create Random number </button>
    </>
  );
}
export default GenerateRandom;
