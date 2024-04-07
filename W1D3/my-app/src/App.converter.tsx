import { ChangeEvent, MouseEvent, useState } from "react";

function TempretureConverter() {
  // const [celcius, setCelcius] = useState<number>(0);

  // // const clickhandler = () => {
  // //
  //   const changeHandeler = (e: ChangeEvent<HTMLInputElement>) => {
  //     setFarhinet(+e.currentTarget.value)
  //     // setCelcius(Number(e.currentTarget.value));
  // }
  const [farhinet, setFarhinet] = useState<number | null>(null);

  const onclickhandler = (e: MouseEvent<HTMLButtonElement>) => {
    const inputValue = parseInt(
      (document.getElementById("inputId") as HTMLInputElement).value
    );
    setFarhinet(inputValue * 1.8 + 32);
  };

  return (
    <div>
      <button onClick={onclickhandler}>convert</button>
      <input id="inputId" type="text" />
      <h2>{farhinet}</h2>
    </div>
  );
}

export default TempretureConverter;
