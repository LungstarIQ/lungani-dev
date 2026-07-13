"use client";

import { useState } from "react";

export default function Nav() {
  const [mode, setMode] = useState<"formal" | "fun">("formal");

  return (
    <nav className="term-box term-divider flex items-center justify-between px-5 py-3 border-b-2">
      <span className="font-mono text-xs">lungani@lungani.dev</span>

      <div className="flex items-center gap-4 text-xs">
        <a href="#work" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          Work
        </a>
        <a href="#stack" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          Stack
        </a>
        <a href="#contact" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          Contact
        </a>

        <div className="term-box flex overflow-hidden text-[10px] font-mono">
          <button
            onClick={() => setMode("formal")}
            className="px-2 py-1"
            style={{
              backgroundColor: mode === "formal" ? "var(--text-primary)" : "transparent",
              color: mode === "formal" ? "var(--surface)" : "var(--text-primary)",
            }}
          >
            FORMAL
          </button>
          <button
            onClick={() => setMode("fun")}
            className="px-2 py-1"
            style={{
              backgroundColor: mode === "fun" ? "var(--text-primary)" : "transparent",
              color: mode === "fun" ? "var(--surface)" : "var(--text-primary)",
            }}
          >
            FUN
          </button>
        </div>
      </div>
    </nav>
  );
}