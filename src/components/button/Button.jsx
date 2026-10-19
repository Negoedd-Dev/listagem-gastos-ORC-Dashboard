// import React from "react";
// import ButtonVariants from "./ButtonVariants";
// import "./Button.css";

// function Button({ variant = ButtonVariants.PRIMARY, children }) {
//   return (
//     <button
//       className="btn"
//       style={{
//         backgroundColor: variant.background,
//         color: variant.color,
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// export default Button;
//* ===============================================================================================================
//* Versão 2.0
import React from "react";

export default function Button({ variant, tokens, children }) {
  return (
    <button
      style={{
        backgroundColor: tokens.colors[variant],
        color: tokens.colors.text,
        padding: "10px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
