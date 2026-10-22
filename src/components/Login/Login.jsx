// import React, { useState } from "react";
// import Button from "../button";
// import "./Login.css";

// export default function Login({ onLogin }) {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (user === "admin" && password === "1234") {
//       onLogin(); // chama função passada pelo App.jsx
//     } else {
//       alert("Usuário ou senha inválidos!");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="title-login">Login</h2>
//       <input
//         className="dados"
//         type="text"
//         placeholder="Usuário"
//         value={user}
//         onChange={(e) => setUser(e.target.value)}
//       />
//       <input
//         className="dados"
//         type="password"
//         placeholder="Senha"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="btn btn-primary" variant="primary">
//         Entrar
//       </button>
//     </form>
//   );
// }
//* ===========================================================================================================
//* Versão 2.0
// import React, { useState } from "react";
// import Button from "../button";
// import "./Login.css";

// export default function Login({ onLogin, onRegister }) {
//   const [nome, setNome] = useState("");
//   const [senha, setSenha] = useState("");
//   const [modo, setModo] = useState("login"); // "login" ou "cadastro"

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (modo === "login") {
//       onLogin(nome, senha);
//     } else {
//       onRegister(nome, senha);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="title-login">{modo === "login" ? "Login" : "Cadastro"}</h2>
//       <input
//         className="dados"
//         type="text"
//         placeholder="Usuário"
//         value={nome}
//         onChange={(e) => setNome(e.target.value)}
//       />
//       <input
//         className="dados"
//         type="password"
//         placeholder="Senha"
//         value={senha}
//         onChange={(e) => setSenha(e.target.value)}
//       />
//       <button className="btn-success" type="submit">
//         {modo === "login" ? "Entrar" : "Cadastrar"}
//       </button>
//       <p>
//         {modo === "login" ? (
//           <span className="siga" onClick={() => setModo("cadastro")}>
//             Não tem conta? Cadastre-se
//           </span>
//         ) : (
//           <span className="siga" onClick={() => setModo("login")}>
//             Já tem conta? Faça login
//           </span>
//         )}
//       </p>
//     </form>
//   );
// }
//* ===============================================================================================================================
//* Versão 3.0
//* Aqui usamos o useNavigate do React Router para redirecionar após login/cadastro:

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../button";
// import "./Login.css";

// export default function Login({ onLogin, onRegister }) {
//   const [nome, setNome] = useState("");
//   const [senha, setSenha] = useState("");
//   const [modo, setModo] = useState("login");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (modo === "login") {
//       onLogin(nome, senha, navigate);
//     } else {
//       onRegister(nome, senha, navigate);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2 className="title-login">{modo === "login" ? "Login" : "Cadastro"}</h2>
//       <input
//         className="dados"
//         type="text"
//         placeholder="Usuário"
//         value={nome}
//         onChange={(e) => setNome(e.target.value)}
//       />
//       <input
//         className="dados"
//         type="password"
//         placeholder="Senha"
//         value={senha}
//         onChange={(e) => setSenha(e.target.value)}
//       />
//       <button className="btn-success" type="submit">
//         {modo === "login" ? "Entrar" : "Cadastrar"}
//       </button>
//       <p>
//         {modo === "login" ? (
//           <span className="siga" onClick={() => setModo("cadastro")}>
//             Não tem conta? Cadastre-se
//           </span>
//         ) : (
//           <span className="siga" onClick={() => setModo("login")}>
//             Já tem conta? Faça login
//           </span>
//         )}
//       </p>
//     </form>
//   );
// }
//* ===============================================================================================================================
// //* Versão 4.0
//* Alterações no Login
//* Somente login → o formulário terá apenas usuário e senha. Link "Não possui conta?" → ao invés de abrir cadastro,
//* abre uma tela com os dados de contato do administrador. Tela de contato do administrador → mostra nome, email e celular (fake).
//* Botão "Voltar" → retorna para a tela de login.
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "../button";
// import "./Login.css";

// export default function Login({ onLogin }) {
//   const [nome, setNome] = useState("");
//   const [senha, setSenha] = useState("");
//   const [mostrarContato, setMostrarContato] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(nome, senha, navigate);
//   };

//   if (mostrarContato) {
//     return (
//       <>
//         <div className="container">
//           <div className="form-container">
//             <h2 className="title-admin">Contate seu Administrador</h2>
//             <p className="content">
//               <strong className="nome">Nome:</strong>
//               <span className="contate-info">admin</span>
//             </p>
//             <p className="content">
//               <strong className="email">Email:</strong>{" "}
//               <span className="contate-info">admin@empresa.com</span>
//             </p>
//             <p className="content">
//               <strong className="celular">Celular:</strong>{" "}
//               <span className="contate-info">(31) 99999-9999</span>
//             </p>
//             <button
//               className="btn-primary back"
//               onClick={() => setMostrarContato(false)}
//             >
//               Voltar
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="form-container">
//           <h2 className="title-login">Login</h2>
//           <form className="form-login" onSubmit={handleSubmit}>
//             <input
//               className="data-user"
//               type="text"
//               placeholder="Usuário"
//               value={nome}
//               onChange={(e) => setNome(e.target.value)}
//             />
//             <input
//               className="data-user"
//               type="password"
//               placeholder="Senha"
//               value={senha}
//               onChange={(e) => setSenha(e.target.value)}
//             />
//             <button className="btn-success go " type="submit">
//               Entrar
//             </button>
//             <p>
//               Não possui conta?{" "}
//               <span className="siga" onClick={() => setMostrarContato(true)}>
//                 Contate seu administrador
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
//* ===============================================================================================================================
//* Versão 5.0
//* Ajustar Login.jsx para mostrar contato do admin
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button";
import "./Login.css";

const ADMIN_USER = import.meta.env.VITE_ADMIN_USER;
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL;
const ADMIN_PHONE = import.meta.env.VITE_ADMIN_PHONE;

export default function Login({ onLogin }) {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarContato, setMostrarContato] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = onLogin(nome, senha);
    if (role === "admin") navigate("/admin");
    if (role === "user") navigate("/dashboard");
  };

  if (mostrarContato) {
    return (
      <>
        <div className="container">
          <div className="form-container">
            <h2 className="title-admin">Contate seu Administrador</h2>
            <p className="content">
              <strong className="nome">Nome:</strong>{" "}
              <span className="contate-info">{ADMIN_USER}</span>
            </p>
            <p className="content">
              <strong className="email">Email:</strong>
              <span className="contate-info">{ADMIN_EMAIL}</span>
            </p>
            <p className="content">
              <strong className="phone">Celular:</strong>
              <span className="contate-info">{ADMIN_PHONE}</span>
            </p>
            <button
              className="btn-primary back"
              onClick={() => setMostrarContato(false)}
            >
              Voltar
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h2 className="title-login">Login</h2>
          <form className="form-login" onSubmit={handleSubmit}>
            <input
              className="data-user"
              type="text"
              placeholder="Usuário"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              className="data-user"
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <button className="btn-success go" type="submit">
              Entrar
            </button>
            <p>
              Não possui conta?{" "}
              <span className="siga" onClick={() => setMostrarContato(true)}>
                Contate seu administrador
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
