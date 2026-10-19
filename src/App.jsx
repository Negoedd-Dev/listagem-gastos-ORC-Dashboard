import react, { useState } from "react";
import EstilosGlobais from "./styles/EstilosGlobais";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import OCRApp from "./components/OCRApp";

function App() {
  return (
    <>
      <EstilosGlobais />
      <Header />
      <div className="container">
        <div className="form-container">
          <OCRApp />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
