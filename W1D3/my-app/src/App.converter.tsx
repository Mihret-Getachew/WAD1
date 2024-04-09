import { ChangeEvent, MouseEvent, useRef, useState } from "react";

function TempretureConverter() {
  const [tempreture, setTempreture] = useState<{
    celcius: number;
    farhinet: number;
  }>({ celcius: 0, farhinet: 0 });

  const userRef = useRef<HTMLInputElement>(null);

  //
  const changeHandeler = () => {
    const inputValue = Number(userRef.current!.value);
    const farhient = inputValue * 1.8 + 32;

    setTempreture({ celcius: inputValue, farhinet: farhient });
  };

  return (
    <div>
      <button onClick={changeHandeler}>convert</button>
      <input id="inputId" type="text" ref={userRef} />
      <h2>C{tempreture.celcius}</h2>
      <h2>F{tempreture.farhinet}</h2>
    </div>
  );
}

export default TempretureConverter;
