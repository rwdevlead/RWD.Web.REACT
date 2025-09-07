import { useState, useEffect } from "react";
import { DarkModeContext } from "./DarkModeContext";

export const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "auto";
    }
    return "auto";
  });

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (mode) => {
      if (mode === "light") root.classList.remove("dark");
      else if (mode === "dark") root.classList.add("dark");
      else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }
    };

    applyTheme(theme);

    if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (e) => applyTheme(e.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next =
        prev === "light" ? "dark" : prev === "dark" ? "auto" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
