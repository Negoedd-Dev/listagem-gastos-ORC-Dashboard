// import react, { useState } from "react";
// import EstilosGlobais from "./styles/EstilosGlobais";
// import Header from "./components/header";
// import Footer from "./components/footer";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import "./App.css";

// function App() {
//   return (
//     <>
//       <EstilosGlobais />
//       <Header />
//       <div className="container">
//         <div className="form-container">
//           <Login />

//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default App;
//* ==================================================================================================================
//* Versão 2.0
// import React, { useState } from "react";
// import EstilosGlobais from "./styles/EstilosGlobais";
// import Header from "./components/header";
// import Login from "./components/Login/Login";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Footer from "./components/footer";
// import dadosComprovantes from "./data/comprovantes.json";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [usuarios, setUsuarios] = useState([
//     { id: 1, nome: "admin", senha: "1234", dados: [] },
//   ]);
//   const [usuarioLogado, setUsuarioLogado] = useState(null);

//   return (
//     <>
//       <EstilosGlobais />
//       <Header />
//       <div className="container">
//         <div className="form-container">
//           {isLoggedIn ? (
//             <Dashboard
//               dados={dadosComprovantes}
//               onLogout={() => setIsLoggedIn(false)}
//             />
//           ) : (
//             <Login onLogin={() => setIsLoggedIn(true)} />
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
//* ======================================================================================================================
//* Versão 3.0
import React, { useState } from "react";
import EstilosGlobais from "./styles/EstilosGlobais";
import Header from "./components/header";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Tabela from "./components/tabela";
import Footer from "./components/footer";

export default function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [registros, setRegistros] = useState([]);
  const [activeTab, setActiveTab] = useState("tabela");

  const editar = (index, campo, valor) => {
    const copia = [...registros];
    copia[index][campo] = valor;
    setRegistros(copia);
  };

  const remover = (index) => {
    setRegistros(registros.filter((_, i) => i !== index));
  };

  const adicionar = () => {
    setRegistros([
      ...registros,
      {
        Data: "",
        Hora: "",
        Valor: 0,
        Modalidade: "",
        CNPJ: "",
        RazaoSocial: "",
      },
    ]);
  };

  return (
    <>
      <EstilosGlobais />
      <Header />

      <div className="container">
        <div className="form-container">
          {usuarioLogado ? (
            <div>
              <button onClick={() => setActiveTab("tabela")}>Tabela</button>
              <button onClick={() => setActiveTab("graficos")}>Gráficos</button>

              {activeTab === "tabela" && (
                <Tabela
                  registros={registros}
                  editar={editar}
                  remover={remover}
                  adicionar={adicionar}
                />
              )}
              {activeTab === "graficos" && (
                <Dashboard
                  dados={registros}
                  onLogout={() => setUsuarioLogado(null)}
                />
              )}
            </div>
          ) : (
            <Login
              onLogin={(nome, senha) => setUsuarioLogado({ nome, senha })}
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
