import { useState } from "react";
import List from "./components/List";
import Search from "./components/Search";
import React from "react";

export default function App() {
  return (
    <div className="container">
      <Search />
      <List />
    </div>
  );
}
