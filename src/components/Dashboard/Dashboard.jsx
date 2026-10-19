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

// function Dashboard({ dados }) {
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

// export default Dashboard;
//* ============================================================================================================================
//* Versão 3.0
//* O que esse upgrade traz.
//* Alternância entre modo claro e modo escuro com um simples botão.Estilos adaptados para fundo, texto e cards.
//* Experiência visual mais agradável e moderna, especialmente em ambientes noturnos.

// import React, { useState } from "react";
// import { Bar, Line, Pie } from "react-chartjs-2";

// function Dashboard({ dados }) {
//   const [darkMode, setDarkMode] = useState(false);

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
//         padding: "20px",
//         backgroundColor: darkMode ? "#121212" : "#f5f5f5",
//         color: darkMode ? "#e0e0e0" : "#000",
//         minHeight: "100vh",
//       }}
//     >
//       <h2>Dashboard de Comprovantes</h2>

//       {/* Botão para alternar tema */}
//       <button
//         onClick={() => setDarkMode(!darkMode)}
//         style={{ marginBottom: "20px" }}
//       >
//         Alternar para {darkMode ? "Modo Claro" : "Modo Escuro"}
//       </button>

//       <div
//         style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
//       >
//         <div
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             borderRadius: "8px",
//             backgroundColor: darkMode ? "#1e1e1e" : "#fff",
//           }}
//         >
//           <h3>Total por Modalidade</h3>
//           <Bar data={barData} />
//         </div>
//         <div
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             borderRadius: "8px",
//             backgroundColor: darkMode ? "#1e1e1e" : "#fff",
//           }}
//         >
//           <h3>Evolução dos Gastos</h3>
//           <Line data={lineData} />
//         </div>
//         <div
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             borderRadius: "8px",
//             backgroundColor: darkMode ? "#1e1e1e" : "#fff",
//           }}
//         >
//           <h3>Proporção Crédito/Débito</h3>
//           <Pie data={pieData} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
//* ========================================================================================================
//* Versão 4.0
//* O que esse upgrade traz.
//* O tema escolhido (claro ou escuro) é salvo no LocalStorage.Ao reabrir a aplicação, o usuário já vê o tema que escolheu anteriormente.
//* Experiência personalizada e persistente, como em apps profissionais.

import React, { useState, useEffect } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

function Dashboard({ dados }) {
  const [darkMode, setDarkMode] = useState(false);

  // Carregar preferência do tema ao iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  // Salvar preferência sempre que mudar
  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Somatórios
  const somaCredito = dados
    .filter((d) => d.Modalidade === "Crédito")
    .reduce((acc, d) => acc + d.Valor, 0);
  const somaDebito = dados
    .filter((d) => d.Modalidade === "Débito")
    .reduce((acc, d) => acc + d.Valor, 0);

  // Agrupar por dia
  const valoresPorDia = dados.reduce((acc, d) => {
    if (!acc[d.Data]) acc[d.Data] = 0;
    acc[d.Data] += d.Valor;
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
    <div
      style={{
        padding: "20px",
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#e0e0e0" : "#000",
        minHeight: "100vh",
      }}
    >
      <h2>Dashboard de Comprovantes</h2>

      {/* Botão para alternar tema */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ marginBottom: "20px" }}
      >
        Alternar para {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <div
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "8px",
            backgroundColor: darkMode ? "#1e1e1e" : "#fff",
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
            backgroundColor: darkMode ? "#1e1e1e" : "#fff",
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
            backgroundColor: darkMode ? "#1e1e1e" : "#fff",
          }}
        >
          <h3>Proporção Crédito/Débito</h3>
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
