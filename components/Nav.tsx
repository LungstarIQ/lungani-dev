"use client";

import { useTheme } from "@/components/ThemeContext";

export default function Nav() {
  const { mode, setMode } = useTheme();

  return (
    <nav className="term-divider flex items-center justify-between px-8 py-4">
      <span className="text-sm flex items-center gap-2">
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ backgroundColor: "var(--text-primary)" }}
        />
        lungani@lungani.dev
      </span>

      <div className="flex items-center gap-7 text-sm">
        <a href="#work" className="hover:opacity-70">
          Work
        </a>
        <a href="#stack" className="hover:opacity-70">
          Stack
        </a>
        <a href="#contact" className="hover:opacity-70">
          Contact
        </a>

        <div
          className="flex text-[11px] overflow-hidden rounded-sm border"
          style={{ borderColor: "var(--text-primary)" }}
        >
          <button
            onClick={() => setMode("formal")}
            className="px-3 py-1.5"
            style={{
              backgroundColor: mode === "formal" ? "var(--text-primary)" : "transparent",
              color: mode === "formal" ? "var(--bg)" : "var(--text-primary)",
            }}
          >
            FORMAL
          </button>
          <button
            onClick={() => setMode("fun")}
            className="px-3 py-1.5"
            style={{
              backgroundColor: mode === "fun" ? "var(--text-primary)" : "transparent",
              color: mode === "fun" ? "var(--bg)" : "var(--text-primary)",
            }}
          >
            FUN
          </button>
        </div>
      </div>
    </nav>
  );
}