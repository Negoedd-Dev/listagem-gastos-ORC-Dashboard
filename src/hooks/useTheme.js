// import { useState, useEffect } from "react";
// import tokensLight from "../styles/tokensLight";
// import tokensDark from "../styles/tokensDark";

// export default function useTheme() {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") || "light";
//     setTheme(savedTheme);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const tokens = theme === "light" ? tokensLight : tokensDark;

//   return { theme, setTheme, tokens };
// }
//* ===============================================================================================
//* Versão 2.0
// import { useState, useEffect } from "react";

// export default function useTheme() {
//   const [themeName, setThemeName] = useState("light");

//   useEffect(() => {
//     const saved = localStorage.getItem("theme") || "light";
//     setThemeName(saved);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("theme", themeName);
//   }, [themeName]);

//   return { themeName, setThemeName };
// }
//* ===============================================================================================
//* Versão 3.0
import { useState, useEffect } from "react";
import tokensLight from "../styles/tokensLight";
import tokensDark from "../styles/tokensDark";

export default function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const tokens = theme === "light" ? tokensLight : tokensDark;

  return { theme, setTheme, tokens };
}
