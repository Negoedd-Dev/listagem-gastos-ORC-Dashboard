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
import React, { useState } from "react";
import Button from "../button";
import "./Login.css";

export default function Login({ onLogin, onRegister }) {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState("login"); // "login" ou "cadastro"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modo === "login") {
      onLogin(nome, senha);
    } else {
      onRegister(nome, senha);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{modo === "login" ? "Login" : "Cadastro"}</h2>
      <input
        type="text"
        placeholder="Usuário"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button type="submit">{modo === "login" ? "Entrar" : "Cadastrar"}</button>
      <p>
        {modo === "login" ? (
          <span onClick={() => setModo("cadastro")}>
            Não tem conta? Cadastre-se
          </span>
        ) : (
          <span onClick={() => setModo("login")}>Já tem conta? Faça login</span>
        )}
      </p>
    </form>
  );
}
