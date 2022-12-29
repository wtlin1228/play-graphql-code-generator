import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Films from "./without-masking/components/Films";
import FilmsJS from "./without-masking/components/FilmsJS";
import FilmsWithMasking from "./with-masking/components/FilmsWithMasking";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h3>TS</h3>
        <Films />
        <h3>JS</h3>
        <FilmsJS />
        <h3>TS with Fragment Masking</h3>
        <FilmsWithMasking />
      </header>
    </div>
  );
}

export default App;
