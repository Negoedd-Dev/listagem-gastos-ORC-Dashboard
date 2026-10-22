// import React from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import { FaUser, FaChartBar, FaSignOutAlt } from "react-icons/fa";
// import "./layout.css";

// export default function Layout({ usuarioLogado, onLogout }) {
//   const location = useLocation();

//   return (
//     <>
//       <div className="container-bar">
//         <div className="form-bar">
//           <div className="bar-info">
//             {/* Menu lateral */}
//             <aside className="menu-bar">
//               <h2 className="title-bar">Menu</h2>

//               {usuarioLogado?.role === "admin" ? (
//                 <Link
//                   to="/admin"
//                   style={{
//                     color: "#fff",
//                     textDecoration: "none",
//                     background:
//                       location.pathname === "/admin"
//                         ? "#34495e"
//                         : "transparent",
//                     padding: "8px",
//                     borderRadius: "4px",
//                   }}
//                 >
//                   <FaUser style={{ marginRight: "8px" }} />
//                   Usuários
//                 </Link>
//               ) : (
//                 <Link
//                   to="/dashboard"
//                   style={{
//                     color: "#fff",
//                     textDecoration: "none",
//                     background:
//                       location.pathname === "/dashboard"
//                         ? "#34495e"
//                         : "transparent",
//                     padding: "8px",
//                     borderRadius: "4px",
//                   }}
//                 >
//                   <FaChartBar style={{ marginRight: "8px" }} />
//                   Dashboard
//                 </Link>
//               )}

//               <button
//                 onClick={onLogout}
//                 style={{
//                   marginTop: "auto",
//                   background: "none",
//                   border: "none",
//                   color: "#fff",
//                   cursor: "pointer",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <FaSignOutAlt style={{ marginRight: "8px" }} />
//                 Logout
//               </button>
//             </aside>

//             {/* Conteúdo principal */}
//             <main style={{ flex: 1, padding: "20px" }}>
//               <Outlet />
//             </main>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
//* ===============================================================================================================================
//* Versão 2.0
//* Barra lateral fixa à esquerda. Dashboard ocupa o espaço ao lado da barra lateral. Painel administrativo fica centralizado na tela.
//* CSS separado (Layout.css) organiza estilos fora do JSX.
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaUser, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import "./layout.css"; // Import do CSS separado

export default function Layout({ usuarioLogado, onLogout }) {
  const location = useLocation();

  return (
    <div className="layout-container">
      {/* Barra lateral */}
      <aside className="sidebar">
        <h2 className="title-bar">Menu</h2>
        {usuarioLogado?.role === "admin" ? (
          <Link
            to="/admin"
            className={`menu-link ${location.pathname === "/admin" ? "active" : ""}`}
          >
            <FaUser /> Usuários
          </Link>
        ) : (
          <Link
            to="/dashboard"
            className={`menu-link ${location.pathname === "/dashboard" ? "active" : ""}`}
          >
            <FaChartBar /> Dashboard
          </Link>
        )}

        <button className="logout-btn" onClick={onLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>

      {/* Conteúdo principal */}
      <main
        className={`main-content ${usuarioLogado?.role === "admin" ? "centered" : ""}`}
      >
        <Outlet />
      </main>
    </div>
  );
}
