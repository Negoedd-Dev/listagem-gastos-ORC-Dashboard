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
