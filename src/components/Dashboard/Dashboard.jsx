//* Versão 1.0
//* O que esse upgrade traz?
//* Layout em cards organizados lado a lado. Cada card mostra um gráfico diferente.
//* Fácil expansão: você pode adicionar novos gráficos ou relatórios. Interface com cara de dashboard corporativo.

// import React, { useState } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// function Dashboard({ dados }) {
//   // Somatórios
//   const somaCredito = dados
//     .filter((d) => d.Modalidade === "Crédito")
//     .reduce((acc, d) => acc + d.Valor, 0);
//   const somaDebito = dados
//     .filter((d) => d.Modalidade === "Débito")
//     .reduce((acc, d) => acc + d.Valor, 0);

//   // Agrupar por dia
//   const valoresPorDia = dados.reduce((acc, d) => {
//     if (!acc[d.Data]) acc[d.Data] = 0;
//     acc[d.Data] += d.Valor;
//     return acc;
//   }, {});

//   // Dados dos gráficos
//   const barData = {
//     labels: ["Crédito", "Débito"],
//     datasets: [
//       {
//         label: "Total em R$",
//         data: [somaCredito, somaDebito],
//         backgroundColor: ["#4CAF50", "#2196F3"],
//       },
//     ],
//   };

//   const lineData = {
//     labels: Object.keys(valoresPorDia),
//     datasets: [
//       {
//         label: "Total por dia (R$)",
//         data: Object.values(valoresPorDia),
//         borderColor: "#FF5722",
//         tension: 0.3,
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["Crédito", "Débito"],
//     datasets: [
//       {
//         data: [somaCredito, somaDebito],
//         backgroundColor: ["#FF6384", "#36A2EB"],
//       },
//     ],
//   };

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "1fr 1fr",
//         gap: "20px",
//         marginTop: "20px",
//       }}
//     >
//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: "10px",
//           borderRadius: "8px",
//         }}
//       >
//         <h3>Total por Modalidade</h3>
//         <Bar data={barData} />
//       </div>
//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: "10px",
//           borderRadius: "8px",
//         }}
//       >
//         <h3>Evolução dos Gastos</h3>
//         <Line data={lineData} />
//       </div>
//       <div
//         style={{
//           border: "1px solid #ccc",
//           padding: "10px",
//           borderRadius: "8px",
//         }}
//       >
//         <h3>Proporção Crédito/Débito</h3>
//         <Pie data={pieData} />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
//* ================================================================================================================
//* Versão 2.0
//* O que esse upgrade traz.
//* Navegação por abas (tabs): separa claramente a Tabela dos Gráficos. Interface mais organizada e intuitiva.
//* Fácil expansão: você pode adicionar novas abas (ex: Relatórios, Configurações).

// import React, { useState } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// export default function Dashboard({ dados, onLogout }) {
//   const [activeTab, setActiveTab] = useState("tabela");

//   // Somatórios
//   const somaCredito = dados
//     .filter((d) => d.Modalidade === "Crédito")
//     .reduce((acc, d) => acc + d.Valor, 0);
//   const somaDebito = dados
//     .filter((d) => d.Modalidade === "Débito")
//     .reduce((acc, d) => acc + d.Valor, 0);

//   // Agrupar por dia
//   const valoresPorDia = dados.reduce((acc, d) => {
//     if (!acc[d.Data]) acc[d.Data] = 0;
//     acc[d.Data] += d.Valor;
//     return acc;
//   }, {});

//   // Dados dos gráficos
//   const barData = {
//     labels: ["Crédito", "Débito"],
//     datasets: [
//       {
//         label: "Total em R$",
//         data: [somaCredito, somaDebito],
//         backgroundColor: ["#4CAF50", "#2196F3"],
//       },
//     ],
//   };

//   const lineData = {
//     labels: Object.keys(valoresPorDia),
//     datasets: [
//       {
//         label: "Total por dia (R$)",
//         data: Object.values(valoresPorDia),
//         borderColor: "#FF5722",
//         tension: 0.3,
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["Crédito", "Débito"],
//     datasets: [
//       {
//         data: [somaCredito, somaDebito],
//         backgroundColor: ["#FF6384", "#36A2EB"],
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Dashboard de Comprovantes</h2>
//       <button
//         className="btn btn-danger"
//         onClick={onLogout}
//         style={{ marginBottom: "20px" }}
//       >
//         Logout
//       </button>

//       {/* Abas */}
//       <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//         <button
//           onClick={() => setActiveTab("tabela")}
//           style={{ background: activeTab === "tabela" ? "#ddd" : "#fff" }}
//         >
//           Tabela
//         </button>
//         <button
//           onClick={() => setActiveTab("graficos")}
//           style={{ background: activeTab === "graficos" ? "#ddd" : "#fff" }}
//         >
//           Gráficos
//         </button>
//       </div>

//       {/* Conteúdo das abas */}
//       {activeTab === "tabela" && (
//         <div>
//           <h3>Dados estruturados</h3>
//           <table border="1" cellPadding="5">
//             <thead>
//               <tr>
//                 <th>Data</th>
//                 <th>Hora</th>
//                 <th>Valor</th>
//                 <th>Modalidade</th>
//               </tr>
//             </thead>
//             <tbody>
//               {dados.map((d, i) => (
//                 <tr key={i}>
//                   <td>{d.Data}</td>
//                   <td>{d.Hora}</td>
//                   <td>{d.Valor.toFixed(2)}</td>
//                   <td>{d.Modalidade}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}

//       {activeTab === "graficos" && (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "20px",
//           }}
//         >
//           <div
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>Total por Modalidade</h3>
//             <Bar data={barData} />
//           </div>
//           <div
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>Evolução dos Gastos</h3>
//             <Line data={lineData} />
//           </div>
//           <div
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>Proporção Crédito/Débito</h3>
//             <Pie data={pieData} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//* =============================================================================================================================
// //* O que mudou:
// //* Agora você tem CRUD completo na aba de tabela. Pode editar os dados extraídos pelo OCR (corrigir CNPJ, Razão Social etc.).
// //* Pode remover registros indesejados. Pode adicionar novos registros manualmente.
// //* Os gráficos se atualizam automaticamente conforme o estado registros.
// //* Versão 3.0
// import React, { useState } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";
// import Tabela from "../tabela";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// );

// export default function Dashboard({ dados, onLogout }) {
//   // Estado local para permitir CRUD
//   const [registros, setRegistros] = useState(dados);
//   const [activeTab, setActiveTab] = useState("tabela");

//   // Funções CRUD
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

//   // Somatórios
//   const somaCredito = registros
//     .filter((d) => d.Modalidade === "Crédito")
//     .reduce((acc, d) => acc + Number(d.Valor), 0);

//   const somaDebito = registros
//     .filter((d) => d.Modalidade === "Débito")
//     .reduce((acc, d) => acc + Number(d.Valor), 0);

//   // Agrupar por dia
//   const valoresPorDia = registros.reduce((acc, d) => {
//     if (!acc[d.Data]) acc[d.Data] = 0;
//     acc[d.Data] += Number(d.Valor);
//     return acc;
//   }, {});

//   // Dados dos gráficos
//   const barData = {
//     labels: ["Crédito", "Débito"],
//     datasets: [
//       {
//         label: "Total em R$",
//         data: [somaCredito, somaDebito],
//         backgroundColor: ["#4CAF50", "#2196F3"],
//       },
//     ],
//   };

//   const lineData = {
//     labels: Object.keys(valoresPorDia),
//     datasets: [
//       {
//         label: "Total por dia (R$)",
//         data: Object.values(valoresPorDia),
//         borderColor: "#FF5722",
//         tension: 0.3,
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["Crédito", "Débito"],
//     datasets: [
//       {
//         data: [somaCredito, somaDebito],
//         backgroundColor: ["#FF6384", "#36A2EB"],
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Dashboard de Comprovantes</h2>
//       <button
//         className="btn btn-danger"
//         onClick={onLogout}
//         style={{ marginBottom: "20px" }}
//       >
//         Logout
//       </button>

//       {/* Abas */}
//       <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
//         <button
//           onClick={() => setActiveTab("tabela")}
//           style={{ background: activeTab === "tabela" ? "#ddd" : "#fff" }}
//         >
//           Tabela
//         </button>
//         <button
//           onClick={() => setActiveTab("graficos")}
//           style={{ background: activeTab === "graficos" ? "#ddd" : "#fff" }}
//         >
//           Gráficos
//         </button>
//       </div>

//       {/* Conteúdo das abas */}
//       {activeTab === "tabela" && (
//         <div>
//           <h3>Dados estruturados</h3>
//           <table border="1" cellPadding="5">
//             <thead>
//               <tr>
//                 <th>Data</th>
//                 <th>Hora</th>
//                 <th>Valor</th>
//                 <th>Modalidade</th>
//                 <th>CNPJ</th>
//                 <th>Razão Social</th>
//                 <th>Ações</th>
//               </tr>
//             </thead>
//             <tbody>
//               {registros.map((d, i) => (
//                 <tr key={i}>
//                   <td>
//                     <input
//                       value={d.Data}
//                       onChange={(e) => editar(i, "Data", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       value={d.Hora}
//                       onChange={(e) => editar(i, "Hora", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       value={d.Valor}
//                       onChange={(e) => editar(i, "Valor", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       value={d.Modalidade}
//                       onChange={(e) => editar(i, "Modalidade", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       value={d.CNPJ || ""}
//                       onChange={(e) => editar(i, "CNPJ", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       value={d.RazaoSocial || ""}
//                       onChange={(e) => editar(i, "RazaoSocial", e.target.value)}
//                     />
//                   </td>
//                   <td>
//                     <button onClick={() => remover(i)}>Remover</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           <button onClick={adicionar} style={{ marginTop: "10px" }}>
//             Adicionar novo
//           </button>
//         </div>
//       )}

//       {activeTab === "graficos" && (
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "20px",
//           }}
//         >
//           <div
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>Total por Modalidade</h3>
//             <Bar data={barData} />
//           </div>
//           <div
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>Evolução dos Gastos</h3>
//             <Line data={lineData} />
//           </div>
//           <div
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//           >
//             <h3>Proporção Crédito/Débito</h3>
//             <Pie data={pieData} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//* =====================================================================================================================================
//* O Dashboard agora mostra somente os gráficos. A tabela fica separada em Tabela.jsx, que você pode renderizar em outra tela ou aba.
//* O código fica mais modular e fácil de manter.
//* Versão 4.0

import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

export default function Dashboard({ dados, onLogout }) {
  const [activeTab, setActiveTab] = useState("graficos");

  // Somatórios
  const somaCredito = dados
    .filter((d) => d.Modalidade === "Crédito")
    .reduce((acc, d) => acc + Number(d.Valor), 0);

  const somaDebito = dados
    .filter((d) => d.Modalidade === "Débito")
    .reduce((acc, d) => acc + Number(d.Valor), 0);

  // Agrupar por dia
  const valoresPorDia = dados.reduce((acc, d) => {
    if (!acc[d.Data]) acc[d.Data] = 0;
    acc[d.Data] += Number(d.Valor);
    return acc;
  }, {});

  // Dados dos gráficos
  const barData = {
    labels: ["Crédito", "Débito"],
    datasets: [
      {
        label: "Total em R$",
        data: [somaCredito, somaDebito],
        backgroundColor: ["#4CAF50", "#2196F3"],
      },
    ],
  };

  const lineData = {
    labels: Object.keys(valoresPorDia),
    datasets: [
      {
        label: "Total por dia (R$)",
        data: Object.values(valoresPorDia),
        borderColor: "#FF5722",
        tension: 0.3,
      },
    ],
  };

  const pieData = {
    labels: ["Crédito", "Débito"],
    datasets: [
      {
        data: [somaCredito, somaDebito],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      {activeTab === "tabela" && (
        <Tabela
          registros={registros}
          editar={editar}
          remover={remover}
          adicionar={adicionar}
        />
      )}
      <h2>Dashboard de Comprovantes</h2>
      <button
        className="btn btn-danger"
        onClick={onLogout}
        style={{ marginBottom: "20px" }}
      >
        Logout
      </button>

      {/* Abas */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setActiveTab("graficos")}
          style={{ background: activeTab === "graficos" ? "#ddd" : "#fff" }}
        >
          Gráficos
        </button>
      </div>

      {/* Conteúdo das abas */}
      {activeTab === "graficos" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>Total por Modalidade</h3>
            <Bar data={barData} />
          </div>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>Evolução dos Gastos</h3>
            <Line data={lineData} />
          </div>
          <div
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>Proporção Crédito/Débito</h3>
            <Pie data={pieData} />
          </div>
        </div>
      )}
    </div>
  );
}
