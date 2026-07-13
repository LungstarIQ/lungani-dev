export default function Currently() {
  return (
    <section
      id="currently"
      className="border-t px-8 pt-8 pb-10"
      style={{ borderColor: "var(--text-primary)" }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-baseline gap-3">
          <span className="text-xs" style={{ color: "var(--accent)" }}>
            02
          </span>
          <h2 className="font-serif text-4xl">Currently</h2>
        </div>
        <p className="term-label">$ tail -f /now</p>
      </div>

      <div className="border-l-4 pl-5 py-4" style={{ borderColor: "var(--text-primary)" }}>
        <p className="term-label mb-2">
          // <span style={{ color: "var(--text-muted)" }}>JAN 2024</span> —{" "}
          <span style={{ color: "var(--accent)" }}>PRESENT</span>
        </p>
        <p
          className="font-serif text-lg leading-snug max-w-xl"
          style={{ color: "var(--text-secondary)" }}
        >
          Placeholder — add what you're currently up to here (job hunting,
          a company/project as a linked word, what you're building right now).
        </p>
      </div>
    </section>
  );
}