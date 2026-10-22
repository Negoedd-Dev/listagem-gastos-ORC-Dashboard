import React, { useState } from "react";
import "./usuarios.css";

export default function Usuarios({ usuarios, setUsuarios }) {
  const [novo, setNovo] = useState({ nome: "", senha: "" });

  const adicionar = () => {
    if (!novo.nome || !novo.senha) {
      alert("Preencha nome e senha!");
      return;
    }
    if (usuarios.some((u) => u.nome === novo.nome)) {
      alert("Usuário já existe!");
      return;
    }
    const novoUsuario = {
      id: Date.now(),
      nome: novo.nome,
      senha: novo.senha,
      dados: [],
    };
    setUsuarios([...usuarios, novoUsuario]);
    setNovo({ nome: "", senha: "" });
  };

  const editar = (index, campo, valor) => {
    const copia = [...usuarios];
    copia[index][campo] = valor;
    setUsuarios(copia);
  };

  const remover = (index) => {
    setUsuarios(usuarios.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="container-admin">
        <div className="form-admin">
          <h2 className="header-admin">Painel Administrativo</h2>
          <h3 className="header-acao">Adicionar novo usuário</h3>
          <input
            className="data d-1"
            placeholder=" Nome"
            value={novo.nome}
            onChange={(e) => setNovo({ ...novo, nome: e.target.value })}
          />
          <input
            className="data"
            type="password"
            placeholder=" Senha"
            value={novo.senha}
            onChange={(e) => setNovo({ ...novo, senha: e.target.value })}
          />
          <button className="btn-success adc" onClick={adicionar}>
            Cadastrar
          </button>
          <table className="user-cads" border="1" cellPadding="5">
            <thead>
              <tr>
                <th className="title-actions">Nome</th>
                <th className="title-actions">Senha</th>
                <th className="title-actions">Ação</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u, i) => (
                <tr key={u.id}>
                  <td className="data-info">
                    <input
                      className="info-cads"
                      value={u.nome}
                      onChange={(e) => editar(i, "nome", e.target.value)}
                    />
                  </td>
                  <td className="data-info">
                    <input
                      className="info-cads"
                      type="password"
                      value={u.senha}
                      onChange={(e) => editar(i, "senha", e.target.value)}
                    />
                  </td>
                  <td className="data-info">
                    <button
                      className="btn-danger actions"
                      onClick={() => remover(i)}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
