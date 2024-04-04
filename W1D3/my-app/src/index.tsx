import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./App.counter";
import GenerateRandom from "./App.random";
import TempretureConverter from "./App.converter";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Counter />
    <GenerateRandom />

    <TempretureConverter />
  </React.StrictMode>
);
