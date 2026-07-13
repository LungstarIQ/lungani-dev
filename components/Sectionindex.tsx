"use client";

import { useEffect, useState } from "react";

const sections = [
  { label: "00", id: "hero" },
  { label: "01", id: "ask" },
  { label: "02", id: "currently" },
  { label: "03", id: "work" },
  { label: "04", id: "stack" },
  { label: "05", id: "contact" },
];

export default function SectionIndex() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        // Counts a section "active" once it crosses the vertical middle of the viewport
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden xl:flex flex-col items-end gap-3 fixed right-6 top-1/2 -translate-y-1/2">
      {sections.map(({ label, id }) => {
        const isActive = id === activeId;
        return (
          <button
            key={id}
            onClick={() =>
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center gap-2 group"
          >
            <span
              className="term-label transition-colors"
              style={{ color: isActive ? "var(--accent)" : "var(--text-muted)" }}
            >
              {label}
            </span>
            <span
              className="block h-px transition-all"
              style={{
                width: isActive ? "20px" : "12px",
                backgroundColor: isActive ? "var(--accent)" : "var(--line)",
              }}
            />
          </button>
        );
      })}
    </div>
  );
}