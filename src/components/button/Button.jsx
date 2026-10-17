import React from "react";
import ButtonVariants from "./ButtonVariants";
import "./Button.css";

function Button({ variant = ButtonVariants.PRIMARY, children }) {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: variant.background,
        color: variant.color,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
