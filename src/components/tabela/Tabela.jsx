import React from "react";
import "./Tabela.css";

export default function Tabela({ registros, editar, remover, adicionar }) {
  return (
    <div>
      <h3>Dados estruturados</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Data</th>
            <th>Hora</th>
            <th>Valor</th>
            <th>Modalidade</th>
            <th>CNPJ</th>
            <th>Razão Social</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((d, i) => (
            <tr key={i}>
              <td>
                <input
                  value={d.Data}
                  onChange={(e) => editar(i, "Data", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={d.Hora}
                  onChange={(e) => editar(i, "Hora", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={d.Valor}
                  onChange={(e) => editar(i, "Valor", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={d.Modalidade}
                  onChange={(e) => editar(i, "Modalidade", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={d.CNPJ || ""}
                  onChange={(e) => editar(i, "CNPJ", e.target.value)}
                />
              </td>
              <td>
                <input
                  value={d.RazaoSocial || ""}
                  onChange={(e) => editar(i, "RazaoSocial", e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => remover(i)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={adicionar} style={{ marginTop: "10px" }}>
        Adicionar novo
      </button>
    </div>
  );
}
