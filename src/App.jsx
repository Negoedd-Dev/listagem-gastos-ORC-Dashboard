import { useState } from "react";
import EstilosGlobais from "./styles/EstilosGlobais";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />
      <div className="container">
        <div className="form-container"></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
