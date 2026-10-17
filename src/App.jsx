import { useState } from "react";
import EstilosGlobais from "./styles/EstilosGlobais";
import "./App.css";

function App() {
  return (
    <>
      <EstilosGlobais />
      <div className="container">
        <div className="form-container">
          <h1>Listagem de Gastos</h1>
        </div>
      </div>
    </>
  );
}

export default App;
