//* Versão 1.0
//* O que esse upgrade traz?
//* Layout em cards organizados lado a lado. Cada card mostra um gráfico diferente.
//* Fácil expansão: você pode adicionar novos gráficos ou relatórios. Interface com cara de dashboard corporativo.

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

function Dashboard({ dados }) {
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
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
        marginTop: "20px",
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
  );
}

export default Dashboard;
