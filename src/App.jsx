import { useState } from "react";
import EstilosGlobais from "./styles/EstilosGlobais";
import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />
      <div className="container">
        <div className="form-container"></div>
      </div>
    </>
  );
}

export default App;
