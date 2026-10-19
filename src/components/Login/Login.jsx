import "./Login.css";
import React, { useState } from "react";
import Dashboard from "./Dashboard"; // seu componente de dashboard

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Exemplo simples: usuário fixo
    if (username === "admin" && password === "1234") {
      setIsAuthenticated(true);
      localStorage.setItem("auth", "true"); // salva login
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("auth");
  };

  // Carregar login salvo
  React.useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div>
      {!isAuthenticated ? (
        <form onSubmit={handleLogin} style={{ padding: "20px" }}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ display: "block", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ display: "block", marginBottom: "10px" }}
          />
          <button type="submit">Entrar</button>
        </form>
      ) : (
        <div>
          <button onClick={handleLogout} style={{ margin: "10px" }}>
            Sair
          </button>
          <Dashboard dados={[]} /> {/* aqui você passa os dados OCR */}
        </div>
      )}
    </div>
  );
}
