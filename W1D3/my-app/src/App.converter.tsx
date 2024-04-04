import { ChangeEvent, useState } from "react";

function TempretureConverter() {
  const [celcius, setCelcius] = useState<number>(0);
  const [farhinet, setFarhinet] = useState<number>(0);
  const clickhandler = () => {
    setFarhinet(celcius * 1.8 + 32);
  };
  const changeHandeler = (e: ChangeEvent<HTMLInputElement>) => {
    setCelcius(Number(e.currentTarget.value));
  };

  return (
    <div>
      <button onClick={clickhandler}>convert</button>
      <input type="text" onChange={changeHandeler} />
      <h2>{farhinet}</h2>
    </div>
  );
}
export default TempretureConverter;
