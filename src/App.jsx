// import react, { useState } from "react";
// import EstilosGlobais from "./styles/EstilosGlobais";
// import "./App.css";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import OCRApp from "./components/OCRApp";

// function App() {
//   return (
//     <>
//       <EstilosGlobais />
//       <Header />
//       <div className="container">
//         <div className="form-container">
//           <OCRApp />
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;
//* ====================================================================================================================================
//* Versão 2.0
import react, { useState } from "react";
import useTheme from "./hooks/useTheme";
import Button from "./components/Button/Button";
import EstilosGlobais from "./styles/EstilosGlobais";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import OCRApp from "./components/OCRApp";

export default function App() {
  const { theme, setTheme, tokens } = useTheme();

  return (
    <>
      <EstilosGlobais />
      <Header />
      <OCRApp />
      <div
        style={{
          backgroundColor: tokens.colors.background,
          color: tokens.colors.text,
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <h1>Dashboard com Temas</h1>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Alternar para {theme === "light" ? "Dark" : "Light"} Mode
        </button>

        <div style={{ marginTop: "20px" }}>
          <Button variant="primary" tokens={tokens}>
            Botão Primário
          </Button>
          <Button variant="magic" tokens={tokens}>
            Botão Mágico
          </Button>
          <Button variant="sunset" tokens={tokens}>
            Botão Sunset
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
