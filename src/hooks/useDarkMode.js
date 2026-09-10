import { useEffect, useState } from "react";

// Manages light/dark theme, persists choice, respects OS preference on first visit.
export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem("nova-theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("nova-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return [isDark, setIsDark];
}
