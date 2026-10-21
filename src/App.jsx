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
// import React, { useState } from "react";
// import EstilosGlobais from "./styles/EstilosGlobais";
// import Header from "./components/header";
// import Login from "./components/Login/Login";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Tabela from "./components/tabela";
// import Footer from "./components/footer";

// export default function App() {
//   const [usuarioLogado, setUsuarioLogado] = useState(null);
//   const [registros, setRegistros] = useState([]);
//   const [activeTab, setActiveTab] = useState("tabela");

//   const editar = (index, campo, valor) => {
//     const copia = [...registros];
//     copia[index][campo] = valor;
//     setRegistros(copia);
//   };

//   const remover = (index) => {
//     setRegistros(registros.filter((_, i) => i !== index));
//   };

//   const adicionar = () => {
//     setRegistros([
//       ...registros,
//       {
//         Data: "",
//         Hora: "",
//         Valor: 0,
//         Modalidade: "",
//         CNPJ: "",
//         RazaoSocial: "",
//       },
//     ]);
//   };

//   return (
//     <>
//       <EstilosGlobais />
//       <Header />

//       <div className="container">
//         <div className="form-container">
//           {usuarioLogado ? (
//             <div>
//               <button onClick={() => setActiveTab("tabela")}>Tabela</button>
//               <button onClick={() => setActiveTab("graficos")}>Gráficos</button>

//               {activeTab === "tabela" && (
//                 <Tabela
//                   registros={registros}
//                   editar={editar}
//                   remover={remover}
//                   adicionar={adicionar}
//                 />
//               )}
//               {activeTab === "graficos" && (
//                 <Dashboard
//                   dados={registros}
//                   onLogout={() => setUsuarioLogado(null)}
//                 />
//               )}
//             </div>
//           ) : (
//             <Login
//               onLogin={(nome, senha) => setUsuarioLogado({ nome, senha })}
//             />
//           )}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
//* ===================================================================================================================================
//* Versão 4.0
//* Resultado
//* Você tem uma tela de Login/Cadastro. Usuários diferentes podem se cadastrar e acessar seus próprios dados.
//* Existe uma tela de Administração de Usuários (Usuarios.jsx) para editar ou excluir contas.
//* O Dashboard continua mostrando os gráficos e dados do usuário logado.
// import React, { useState } from "react";
// import EstilosGlobais from "./styles/EstilosGlobais";
// import Header from "./components/header";
// import Login from "./components/Login/Login";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Usuarios from "./components/usuarios/Usuarios";
// import Footer from "./components/footer";

// export default function App() {
//   const [usuarios, setUsuarios] = useState([
//     { id: 1, nome: "admin", senha: "1234", dados: [] },
//   ]);
//   const [usuarioLogado, setUsuarioLogado] = useState(null);
//   const [activeTab, setActiveTab] = useState("login");

//   const handleLogin = (nome, senha) => {
//     const usuario = usuarios.find((u) => u.nome === nome && u.senha === senha);
//     if (usuario) {
//       setUsuarioLogado(usuario);
//       setActiveTab("dashboard");
//     } else {
//       alert("Usuário ou senha inválidos!");
//     }
//   };

//   const handleRegister = (nome, senha) => {
//     if (usuarios.some((u) => u.nome === nome)) {
//       alert("Usuário já existe!");
//       return;
//     }
//     const novoUsuario = { id: Date.now(), nome, senha, dados: [] };
//     setUsuarios([...usuarios, novoUsuario]);
//     setUsuarioLogado(novoUsuario);
//     setActiveTab("dashboard");
//   };

//   return (
//     <>
//       <EstilosGlobais />
//       <Header />
//       <div className="container">
//         <div className="form-container">
//           {activeTab === "login" && (
//             <Login onLogin={handleLogin} onRegister={handleRegister} />
//           )}
//           {activeTab === "dashboard" && usuarioLogado && (
//             <Dashboard
//               dados={usuarioLogado.dados}
//               onLogout={() => setActiveTab("login")}
//             />
//           )}
//           {activeTab === "usuarios" && (
//             <Usuarios usuarios={usuarios} setUsuarios={setUsuarios} />
//           )}

//           {/* Menu simples para alternar */}
//           <div style={{ marginTop: "20px" }}>
//             <button onClick={() => setActiveTab("login")}>Login</button>
//             <button onClick={() => setActiveTab("dashboard")}>Dashboard</button>
//             <button onClick={() => setActiveTab("usuarios")}>
//               Admin Usuários
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }
//* ===============================================================================================================
//* Versão 5.0
import React, { useState } from "react";
import EstilosGlobais from "./styles/EstilosGlobais";
import Header from "./components/header";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Usuarios from "./components/usuarios/Usuarios";
import Footer from "./components/footer";

export default function App() {
  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: "admin", senha: "1234", dados: [] },
  ]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [activeTab, setActiveTab] = useState("login");

  const handleLogin = (nome, senha) => {
    const usuario = usuarios.find((u) => u.nome === nome && u.senha === senha);
    if (usuario) {
      setUsuarioLogado(usuario);
      if (usuario.nome === "admin" && usuario.senha === "1234") {
        setActiveTab("admin");
      } else {
        setActiveTab("dashboard");
      }
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  const handleRegister = (nome, senha) => {
    if (usuarios.some((u) => u.nome === nome)) {
      alert("Usuário já existe!");
      return;
    }
    const novoUsuario = { id: Date.now(), nome, senha, dados: [] };
    setUsuarios([...usuarios, novoUsuario]);
    setUsuarioLogado(novoUsuario);
    setActiveTab("dashboard");
  };

  const atualizarDadosUsuario = (novosDados) => {
    const copia = usuarios.map((u) =>
      u.id === usuarioLogado.id ? { ...u, dados: novosDados } : u,
    );
    setUsuarios(copia);
    setUsuarioLogado({ ...usuarioLogado, dados: novosDados });
  };

  return (
    <>
      <EstilosGlobais />
      <Header />
      <div className="container">
        <div className="form-container">
          {activeTab === "login" && (
            <Login onLogin={handleLogin} onRegister={handleRegister} />
          )}
          {activeTab === "dashboard" && usuarioLogado && (
            <Dashboard
              dados={usuarioLogado.dados}
              onLogout={() => setActiveTab("login")}
              onUpdateDados={atualizarDadosUsuario}
            />
          )}
          {activeTab === "admin" && (
            <Usuarios usuarios={usuarios} setUsuarios={setUsuarios} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
