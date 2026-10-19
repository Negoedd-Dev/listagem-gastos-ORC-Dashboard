// * versão: 1.0
// import React, { useState } from "react";
// import Tesseract from "tesseract.js";

// export default function OCRApp() {
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState("");
//   const [dados, setDados] = useState([]);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//       processImage(file);
//     }
//   };

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por", {
//       logger: (m) => console.log(m), // progresso
//     }).then(({ data: { text } }) => {
//       setText(text);
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     // Exemplo simples de regex para capturar alguns campos
//     const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
//     const hora = textoExtraido.match(/\d{2}:\d{2}/)?.[0] || "";
//     const valor = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//         ? "Débito"
//         : "";

//     setDados([
//       { campo: "Data da compra", valor: data },
//       { campo: "Horário da compra", valor: hora },
//       { campo: "Valor da compra", valor: valor },
//       { campo: "Modalidade", valor: modalidade },
//     ]);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>OCR de Comprovantes</h2>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       {image && <img src={image} alt="Comprovante" width="300" />}
//       <h3>Texto extraído:</h3>
//       <pre>{text}</pre>
//       <h3>Dados estruturados:</h3>
//       <table border="1" cellPadding="5">
//         <thead>
//           <tr>
//             <th>Campo</th>
//             <th>Valor</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dados.map((d, i) => (
//             <tr key={i}>
//               <td>{d.campo}</td>
//               <td>{d.valor}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

//* /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// * Versão: 2.0
// O que foi adicionado: Função exportCSV que gera um arquivo .csv com os dados;
// Botão que aparece quando há dados extraídos e o usuário baixa o arquivo direto no navegador.

// import React, { useState } from "react";
// import Tesseract from "tesseract.js";

// export default function OCRApp() {
//   const [image, setImage] = useState(null);
//   const [text, setText] = useState("");
//   const [dados, setDados] = useState([]);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file));
//       processImage(file);
//     }
//   };

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por", {
//       logger: (m) => console.log(m),
//     }).then(({ data: { text } }) => {
//       setText(text);
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
//     const hora = textoExtraido.match(/\d{2}:\d{2}/)?.[0] || "";
//     const valor = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//         ? "Débito"
//         : "";

//     setDados([
//       { campo: "Data da compra", valor: data },
//       { campo: "Horário da compra", valor: hora },
//       { campo: "Valor da compra", valor: valor },
//       { campo: "Modalidade", valor: modalidade },
//     ]);
//   };

//   const exportCSV = () => {
//     const header = "Campo,Valor\n";
//     const rows = dados.map((d) => `${d.campo},${d.valor}`).join("\n");
//     const csvContent = header + rows;

//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;
//     link.setAttribute("download", "dados_comprovante.csv");
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>OCR de Comprovantes</h2>
//       <input type="file" accept="image/*" onChange={handleImageUpload} />
//       {image && <img src={image} alt="Comprovante" width="300" />}
//       <h3>Texto extraído:</h3>
//       <pre>{text}</pre>
//       <h3>Dados estruturados:</h3>
//       <table border="1" cellPadding="5">
//         <thead>
//           <tr>
//             <th>Campo</th>
//             <th>Valor</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dados.map((d, i) => (
//             <tr key={i}>
//               <td>{d.campo}</td>
//               <td>{d.valor}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {dados.length > 0 && (
//         <button onClick={exportCSV} style={{ marginTop: "10px" }}>
//           Exportar para CSV
//         </button>
//       )}
//     </div>
//   );
// }

//* ///////////////////////////////////////////////////////////////////////////////////////////////////////
//* Versão:3.0
// O que mudou?
// Adicionamos a biblioteca xlsx para criar a planilha. Usamos json_to_sheet para converter os dados em aba Excel.
// O arquivo é baixado como dados_comprovante.xlsx.
import React, { useState } from "react";
import Tesseract from "tesseract.js";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function OCRApp() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [dados, setDados] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      processImage(file);
    }
  };

  const processImage = (file) => {
    Tesseract.recognize(file, "por", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      setText(text);
      parseDados(text);
    });
  };

  const parseDados = (textoExtraido) => {
    const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
    const hora = textoExtraido.match(/\d{2}:\d{2}/)?.[0] || "";
    const valor = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
    const modalidade = textoExtraido.includes("CRÉDITO")
      ? "Crédito"
      : textoExtraido.includes("DÉBITO")
        ? "Débito"
        : "";

    setDados([
      { campo: "Data da compra", valor: data },
      { campo: "Horário da compra", valor: hora },
      { campo: "Valor da compra", valor: valor },
      { campo: "Modalidade", valor: modalidade },
    ]);
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(dados);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Comprovantes");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(blob, "dados_comprovante.xlsx");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>OCR de Comprovantes</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Comprovante" width="300" />}
      <h3>Texto extraído:</h3>
      <pre>{text}</pre>
      <h3>Dados estruturados:</h3>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Campo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((d, i) => (
            <tr key={i}>
              <td>{d.campo}</td>
              <td>{d.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {dados.length > 0 && (
        <button onClick={exportExcel} style={{ marginTop: "10px" }}>
          Exportar para Excel
        </button>
      )}
    </div>
  );
}
//* /////////////////////////////////////////////////////////////////////////////////////////////////////
//* Versão: 4.0
// O que esse upgrade faz
// Permite upload múltiplo de imagens. Processa cada comprovante com OCR e acumula os registros em um array.
// Gera um Excel único com todos os comprovantes processados.

// import React, { useState } from "react";
// import Tesseract from "tesseract.js";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export default function OCRApp() {
//   const [images, setImages] = useState([]);
//   const [dados, setDados] = useState([]);

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setImages(files.map((f) => URL.createObjectURL(f)));

//     files.forEach((file) => processImage(file));
//   };

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por", {
//       logger: (m) => console.log(m),
//     }).then(({ data: { text } }) => {
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
//     const hora = textoExtraido.match(/\d{2}:\d{2}/)?.[0] || "";
//     const valor = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//         ? "Débito"
//         : "";

//     setDados((prev) => [
//       ...prev,
//       {
//         Data: data,
//         Hora: hora,
//         Valor: valor,
//         Modalidade: modalidade,
//       },
//     ]);
//   };

//   const exportExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(dados);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Comprovantes");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });

//     const blob = new Blob([excelBuffer], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });

//     saveAs(blob, "comprovantes.xlsx");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>OCR de Comprovantes (Múltiplos)</h2>
//       <input
//         type="file"
//         accept="image/*"
//         multiple
//         onChange={handleImageUpload}
//       />
//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         {images.map((img, i) => (
//           <img key={i} src={img} alt={`Comprovante ${i}`} width="200" />
//         ))}
//       </div>
//       <h3>Dados estruturados:</h3>
//       <table border="1" cellPadding="5">
//         <thead>
//           <tr>
//             <th>Data</th>
//             <th>Hora</th>
//             <th>Valor</th>
//             <th>Modalidade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dados.map((d, i) => (
//             <tr key={i}>
//               <td>{d.Data}</td>
//               <td>{d.Hora}</td>
//               <td>{d.Valor}</td>
//               <td>{d.Modalidade}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {dados.length > 0 && (
//         <button onClick={exportExcel} style={{ marginTop: "10px" }}>
//           Exportar todos para Excel
//         </button>
//       )}
//     </div>
//   );
// }
//* /////////////////////////////////////////////////////////////////////////////////////////////////////
//* Versão: 5.0
// O que esse upgrade traz
// Agora o usuário pode escolher entre Excel (.xlsx) ou CSV (.csv). // O CSV é mais leve e universal, enquanto o Excel permite planilhas mais ricas.
// Ambos os botões aparecem apenas quando há dados extraídos.
// import React, { useState } from "react";
// import Tesseract from "tesseract.js";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// export default function OCRApp() {
//   const [images, setImages] = useState([]);
//   const [dados, setDados] = useState([]);

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setImages(files.map((f) => URL.createObjectURL(f)));

//     files.forEach((file) => processImage(file));
//   };

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por", {
//       logger: (m) => console.log(m),
//     }).then(({ data: { text } }) => {
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
//     const hora = textoExtraido.match(/\d{2}:\d{2}/)?.[0] || "";
//     const valor = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//       ? "Débito"
//       : "";

//     setDados((prev) => [
//       ...prev,
//       {
//         Data: data,
//         Hora: hora,
//         Valor: valor,
//         Modalidade: modalidade,
//       },
//     ]);
//   };

//   const exportExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(dados);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Comprovantes");

//     const excelBuffer = XLSX.write(workbook, {
//       bookType: "xlsx",
//       type: "array",
//     });

//     const blob = new Blob([excelBuffer], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });

//     saveAs(blob, "comprovantes.xlsx");
//   };

//   const exportCSV = () => {
//     const header = "Data,Hora,Valor,Modalidade\n";
//     const rows = dados.map((d) => `${d.Data},${d.Hora},${d.Valor},${d.Modalidade}`).join("\n");
//     const csvContent = header + rows;

//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "comprovantes.csv");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>OCR de Comprovantes (Múltiplos)</h2>
//       <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         {images.map((img, i) => (
//           <img key={i} src={img} alt={`Comprovante ${i}`} width="200" />
//         ))}
//       </div>
//       <h3>Dados estruturados:</h3>
//       <table border="1" cellPadding="5">
//         <thead>
//           <tr>
//             <th>Data</th>
//             <th>Hora</th>
//             <th>Valor</th>
//             <th>Modalidade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dados.map((d, i) => (
//             <tr key={i}>
//               <td>{d.Data}</td>
//               <td>{d.Hora}</td>
//               <td>{d.Valor}</td>
//               <td>{d.Modalidade}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {dados.length > 0 && (
//         <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
//           <button onClick={exportExcel}>Exportar para Excel</button>
//           <button onClick={exportCSV}>Exportar para CSV</button>
//         </div>
//       )}
//     </div>
//   );
// }
//* /////////////////////////////////////////////////////////////////////////////////////////////////////
//* Versão: 6.0
// O que esse upgrade traz
// Agora você tem três formatos de exportação: Excel, CSV e PDF.O PDF gera um relatório pronto para impressão com título e tabela organizada.
// O usuário pode escolher o formato que melhor se adapta ao uso final.

// import React, { useState } from "react";
// import Tesseract from "tesseract.js";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// export default function OCRApp() {
//   const [images, setImages] = useState([]);
//   const [dados, setDados] = useState([]);

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setImages(files.map((f) => URL.createObjectURL(f)));
//     files.forEach((file) => processImage(file));
//   };

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por", {
//       logger: (m) => console.log(m),
//     }).then(({ data: { text } }) => {
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
//     const hora = textoExtraido.match(/\d{2}:\d{2}/)?.[0] || "";
//     const valor = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//       ? "Débito"
//       : "";

//     setDados((prev) => [
//       ...prev,
//       { Data: data, Hora: hora, Valor: valor, Modalidade: modalidade },
//     ]);
//   };

//   const exportExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(dados);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Comprovantes");
//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const blob = new Blob([excelBuffer], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });
//     saveAs(blob, "comprovantes.xlsx");
//   };

//   const exportCSV = () => {
//     const header = "Data,Hora,Valor,Modalidade\n";
//     const rows = dados.map((d) => `${d.Data},${d.Hora},${d.Valor},${d.Modalidade}`).join("\n");
//     const csvContent = header + rows;
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "comprovantes.csv");
//   };

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     doc.text("Relatório de Comprovantes", 14, 20);
//     doc.autoTable({
//       head: [["Data", "Hora", "Valor", "Modalidade"]],
//       body: dados.map((d) => [d.Data, d.Hora, d.Valor, d.Modalidade]),
//       startY: 30,
//     });
//     doc.save("comprovantes.pdf");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>OCR de Comprovantes (Múltiplos)</h2>
//       <input type="file" accept="image/*" multiple onChange={handleImageUpload} />
//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//         {images.map((img, i) => (
//           <img key={i} src={img} alt={`Comprovante ${i}`} width="200" />
//         ))}
//       </div>
//       <h3>Dados estruturados:</h3>
//       <table border="1" cellPadding="5">
//         <thead>
//           <tr>
//             <th>Data</th>
//             <th>Hora</th>
//             <th>Valor</th>
//             <th>Modalidade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dados.map((d, i) => (
//             <tr key={i}>
//               <td>{d.Data}</td>
//               <td>{d.Hora}</td>
//               <td>{d.Valor}</td>
//               <td>{d.Modalidade}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {dados.length > 0 && (
//         <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
//           <button onClick={exportExcel}>Exportar para Excel</button>
//           <button onClick={exportCSV}>Exportar para CSV</button>
//           <button onClick={exportPDF}>Exportar para PDF</button>
//         </div>
//       )}
//     </div>
//   );
// }
// //* /////////////////////////////////////////////////////////////////////////////////////////////////////
// //* Versão: 7.0
// // O que esse upgrade traz
// // Campo de busca que filtra a tabela em tempo real.O filtro funciona para qualquer coluna (data, hora, valor, modalidade).
// // Mantém todas as opções de exportação (Excel, CSV, PDF).
// import React, { useState } from "react";
// import Tesseract from "tesseract.js";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// export default function OCRApp() {
//   const [images, setImages] = useState([]);
//   const [dados, setDados] = useState([]);
//   const [search, setSearch] = useState("");

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setImages(files.map((f) => URL.createObjectURL(f)));
//     files.forEach((file) => processImage(file));
//   };

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por", {
//       logger: (m) => console.log(m),
//     }).then(({ data: { text } }) => {
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
//     const hora = textoExtraido.match(/\d{2}:\d{2}/)?.[0] || "";
//     const valor = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//       ? "Débito"
//       : "";

//     setDados((prev) => [
//       ...prev,
//       { Data: data, Hora: hora, Valor: valor, Modalidade: modalidade },
//     ]);
//   };

//   // Exportações
//   const exportExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(dados);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Comprovantes");
//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const blob = new Blob([excelBuffer], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });
//     saveAs(blob, "comprovantes.xlsx");
//   };

//   const exportCSV = () => {
//     const header = "Data,Hora,Valor,Modalidade\n";
//     const rows = dados.map((d) => `${d.Data},${d.Hora},${d.Valor},${d.Modalidade}`).join("\n");
//     const csvContent = header + rows;
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "comprovantes.csv");
//   };

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     doc.text("Relatório de Comprovantes", 14, 20);
//     doc.autoTable({
//       head: [["Data", "Hora", "Valor", "Modalidade"]],
//       body: dados.map((d) => [d.Data, d.Hora, d.Valor, d.Modalidade]),
//       startY: 30,
//     });
//     doc.save("comprovantes.pdf");
//   };

//   // Filtro
//   const filteredData = dados.filter((d) =>
//     Object.values(d).some((val) =>
//       val.toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>OCR de Comprovantes (Múltiplos)</h2>
//       <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

//       <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "10px" }}>
//         {images.map((img, i) => (
//           <img key={i} src={img} alt={`Comprovante ${i}`} width="200" />
//         ))}
//       </div>

//       <h3>Filtro de busca:</h3>
//       <input
//         type="text"
//         placeholder="Pesquisar por data, valor ou modalidade..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginBottom: "10px", width: "300px" }}
//       />

//       <h3>Dados estruturados:</h3>
//       <table border="1" cellPadding="5">
//         <thead>
//           <tr>
//             <th>Data</th>
//             <th>Hora</th>
//             <th>Valor</th>
//             <th>Modalidade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.map((d, i) => (
//             <tr key={i}>
//               <td>{d.Data}</td>
//               <td>{d.Hora}</td>
//               <td>{d.Valor}</td>
//               <td>{d.Modalidade}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {dados.length > 0 && (
//         <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
//           <button onClick={exportExcel}>Exportar para Excel</button>
//           <button onClick={exportCSV}>Exportar para CSV</button>
//           <button onClick={exportPDF}>Exportar para PDF</button>
//         </div>
//       )}
//     </div>
//   );
// }
//* /////////////////////////////////////////////////////////////////////////////////////////////////////
//* Versão: 8.0
// O que esse upgrade traz
// Paginação dinâmica: controla quantos registros aparecem por página.Botões de Anterior/Próxima para navegar.
// // Mostra o número da página atual e total de páginas.Funciona junto com o filtro de busca.
// import React, { useState } from "react";
// import Tesseract from "tesseract.js";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// export default function OCRApp() {
//   const [images, setImages] = useState([]);
//   const [dados, setDados] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // quantidade de registros por página

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setImages(files.map((f) => URL.createObjectURL(f)));
//     files.forEach((file) => processImage(file));
//   };

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por", {
//       logger: (m) => console.log(m),
//     }).then(({ data: { text } }) => {
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
//     const hora = textoExtraido.match(/\d{2}:\d{2}/)?.[0] || "";
//     const valor = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//       ? "Débito"
//       : "";

//     setDados((prev) => [
//       ...prev,
//       { Data: data, Hora: hora, Valor: valor, Modalidade: modalidade },
//     ]);
//   };

//   // Filtro
//   const filteredData = dados.filter((d) =>
//     Object.values(d).some((val) =>
//       val.toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   // Paginação
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   // Exportações
//   const exportExcel = () => {
//     const worksheet = XLSX.utils.json_to_sheet(dados);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Comprovantes");
//     const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
//     const blob = new Blob([excelBuffer], {
//       type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//     });
//     saveAs(blob, "comprovantes.xlsx");
//   };

//   const exportCSV = () => {
//     const header = "Data,Hora,Valor,Modalidade\n";
//     const rows = dados.map((d) => `${d.Data},${d.Hora},${d.Valor},${d.Modalidade}`).join("\n");
//     const csvContent = header + rows;
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     saveAs(blob, "comprovantes.csv");
//   };

//   const exportPDF = () => {
//     const doc = new jsPDF();
//     doc.text("Relatório de Comprovantes", 14, 20);
//     doc.autoTable({
//       head: [["Data", "Hora", "Valor", "Modalidade"]],
//       body: dados.map((d) => [d.Data, d.Hora, d.Valor, d.Modalidade]),
//       startY: 30,
//     });
//     doc.save("comprovantes.pdf");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>OCR de Comprovantes (Múltiplos)</h2>
//       <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

//       <h3>Filtro de busca:</h3>
//       <input
//         type="text"
//         placeholder="Pesquisar por data, valor ou modalidade..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginBottom: "10px", width: "300px" }}
//       />

//       <h3>Dados estruturados:</h3>
//       <table border="1" cellPadding="5">
//         <thead>
//           <tr>
//             <th>Data</th>
//             <th>Hora</th>
//             <th>Valor</th>
//             <th>Modalidade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedData.map((d, i) => (
//             <tr key={i}>
//               <td>{d.Data}</td>
//               <td>{d.Hora}</td>
//               <td>{d.Valor}</td>
//               <td>{d.Modalidade}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Controles de paginação */}
//       {totalPages > 1 && (
//         <div style={{ marginTop: "10px" }}>
//           <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
//             Anterior
//           </button>
//           <span style={{ margin: "0 10px" }}>
//             Página {currentPage} de {totalPages}
//           </span>
//           <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
//             Próxima
//           </button>
//         </div>
//       )}

//       {dados.length > 0 && (
//         <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
//           <button onClick={exportExcel}>Exportar para Excel</button>
//           <button onClick={exportCSV}>Exportar para CSV</button>
//           <button onClick={exportPDF}>Exportar para PDF</button>
//         </div>
//       )}
//     </div>
//   );
// }
//* /////////////////////////////////////////////////////////////////////////////////////////////////////
//* Versão: 9.0
// O que esse upgrade traz
// Gráfico de barras mostrando o total em R$ por modalidade (Crédito/Débito).Integração com Chart.js via react-chartjs-2.
// Dashboard visual junto com tabela, filtro e paginação.
// import React, { useState } from "react";
// import Tesseract from "tesseract.js";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function OCRApp() {
//   const [images, setImages] = useState([]);
//   const [dados, setDados] = useState([]);
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5;

//   const handleImageUpload = (event) => {
//     const files = Array.from(event.target.files);
//     setImages(files.map((f) => URL.createObjectURL(f)));
//     files.forEach((file) => processImage(file));
//   };

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por", {
//       logger: (m) => console.log(m),
//     }).then(({ data: { text } }) => {
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
//     const hora = textoExtraido.match(/\d{2}:\d{2}/)?.[0] || "";
//     const valorStr = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const valorNum = parseFloat(valorStr.replace("R$", "").replace(",", "."));
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//       ? "Débito"
//       : "";

//     setDados((prev) => [
//       ...prev,
//       { Data: data, Hora: hora, Valor: valorNum || 0, Modalidade: modalidade },
//     ]);
//   };

//   // Filtro
//   const filteredData = dados.filter((d) =>
//     Object.values(d).some((val) =>
//       String(val).toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   // Paginação
//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   // Gráfico: somatório por modalidade
//   const somaCredito = dados.filter((d) => d.Modalidade === "Crédito").reduce((acc, d) => acc + d.Valor, 0);
//   const somaDebito = dados.filter((d) => d.Modalidade === "Débito").reduce((acc, d) => acc + d.Valor, 0);

//   const chartData = {
//     labels: ["Crédito", "Débito"],
//     datasets: [
//       {
//         label: "Total em R$",
//         data: [somaCredito, somaDebito],
//         backgroundColor: ["#4CAF50", "#2196F3"],
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>OCR de Comprovantes (Múltiplos)</h2>
//       <input type="file" accept="image/*" multiple onChange={handleImageUpload} />

//       <h3>Filtro de busca:</h3>
//       <input
//         type="text"
//         placeholder="Pesquisar por data, valor ou modalidade..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginBottom: "10px", width: "300px" }}
//       />

//       <h3>Dados estruturados:</h3>
//       <table border="1" cellPadding="5">
//         <thead>
//           <tr>
//             <th>Data</th>
//             <th>Hora</th>
//             <th>Valor</th>
//             <th>Modalidade</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedData.map((d, i) => (
//             <tr key={i}>
//               <td>{d.Data}</td>
//               <td>{d.Hora}</td>
//               <td>{d.Valor.toFixed(2)}</td>
//               <td>{d.Modalidade}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {totalPages > 1 && (
//         <div style={{ marginTop: "10px" }}>
//           <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
//             Anterior
//           </button>
//           <span style={{ margin: "0 10px" }}>
//             Página {currentPage} de {totalPages}
//           </span>
//           <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
//             Próxima
//           </button>
//         </div>
//       )}

//       {dados.length > 0 && (
//         <>
//           <div style={{ marginTop: "20px", width: "500px" }}>
//             <h3>Análise: Total por Modalidade</h3>
//             <Bar data={chartData} />
//           </div>

//           <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
//             <button onClick={() => alert("Excel export aqui")}>Exportar para Excel</button>
//             <button onClick={() => alert("CSV export aqui")}>Exportar para CSV</button>
//             <button onClick={() => alert("PDF export aqui")}>Exportar para PDF</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
//* /////////////////////////////////////////////////////////////////////////////////////////////////////
//* Versão: 10.0
// O que esse upgrade traz
// Gráfico de linha mostrando a evolução dos gastos ao longo dos dias.Cada ponto no gráfico representa o somatório dos valores daquele dia.
// Visualização clara de picos de gasto e tendências.

// import React, { useState } from "react";
// import Tesseract from "tesseract.js";
// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";
// import jsPDF from "jspdf";
// import "jspdf-autotable";
// import { Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export default function OCRApp() {
//   const [dados, setDados] = useState([]);

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por").then(({ data: { text } }) => {
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     const data = textoExtraido.match(/\d{2}\/\d{2}\/\d{4}/)?.[0] || "";
//     const valorStr = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const valorNum = parseFloat(valorStr.replace("R$", "").replace(",", "."));
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//       ? "Débito"
//       : "";

//     setDados((prev) => [...prev, { Data: data, Valor: valorNum || 0, Modalidade: modalidade }]);
//   };

//   // Agrupar valores por data
//   const valoresPorDia = dados.reduce((acc, d) => {
//     if (!acc[d.Data]) acc[d.Data] = 0;
//     acc[d.Data] += d.Valor;
//     return acc;
//   }, {});

//   const chartData = {
//     labels: Object.keys(valoresPorDia),
//     datasets: [
//       {
//         label: "Total por dia (R$)",
//         data: Object.values(valoresPorDia),
//         borderColor: "#FF5722",
//         backgroundColor: "rgba(255,87,34,0.2)",
//         tension: 0.3,
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Gráfico de Gastos por Dia</h2>
//       {dados.length > 0 ? (
//         <Line data={chartData} />
//       ) : (
//         <p>Adicione comprovantes para gerar o gráfico.</p>
//       )}
//     </div>
//   );
// }
//* /////////////////////////////////////////////////////////////////////////////////////////////////////
//* Versão: 11.0
// O que esse upgrade traz
// Gráfico de pizza mostrando a proporção de gastos entre Crédito e Débito.Cores distintas para cada modalidade.
// Visualização rápida e intuitiva da distribuição dos valores.

// import React, { useState } from "react";
// import Tesseract from "tesseract.js";
// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function OCRApp() {
//   const [dados, setDados] = useState([]);

//   const processImage = (file) => {
//     Tesseract.recognize(file, "por").then(({ data: { text } }) => {
//       parseDados(text);
//     });
//   };

//   const parseDados = (textoExtraido) => {
//     const valorStr = textoExtraido.match(/R?\$?\s?\d+,\d{2}/)?.[0] || "";
//     const valorNum = parseFloat(valorStr.replace("R$", "").replace(",", "."));
//     const modalidade = textoExtraido.includes("CRÉDITO")
//       ? "Crédito"
//       : textoExtraido.includes("DÉBITO")
//         ? "Débito"
//         : "";

//     setDados((prev) => [
//       ...prev,
//       { Valor: valorNum || 0, Modalidade: modalidade },
//     ]);
//   };

//   // Somatório por modalidade
//   const somaCredito = dados
//     .filter((d) => d.Modalidade === "Crédito")
//     .reduce((acc, d) => acc + d.Valor, 0);
//   const somaDebito = dados
//     .filter((d) => d.Modalidade === "Débito")
//     .reduce((acc, d) => acc + d.Valor, 0);

//   const chartData = {
//     labels: ["Crédito", "Débito"],
//     datasets: [
//       {
//         data: [somaCredito, somaDebito],
//         backgroundColor: ["#FF6384", "#36A2EB"],
//         hoverBackgroundColor: ["#FF4364", "#1E90FF"],
//       },
//     ],
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Proporção de Gastos</h2>
//       {dados.length > 0 ? (
//         <Pie data={chartData} />
//       ) : (
//         <p>Adicione comprovantes para gerar o gráfico.</p>
//       )}
//     </div>
//   );
// }
