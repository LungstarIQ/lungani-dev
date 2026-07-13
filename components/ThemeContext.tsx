"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Mode = "formal" | "fun";

const ThemeContext = createContext<{
  mode: Mode;
  setMode: (m: Mode) => void;
}>({ mode: "formal", setMode: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("formal");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}