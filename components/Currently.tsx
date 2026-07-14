import Reveal from "@/components/Reveal";

export default function Currently() {
  return (
    <section
      id="currently"
      className="border-t px-4 sm:px-8 pt-6 sm:pt-8 pb-8 sm:pb-10"
      style={{ borderColor: "var(--text-primary)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-6">
        <div className="flex items-baseline gap-3">
          <span className="text-xs" style={{ color: "var(--accent)" }}>
            02
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl">Currently</h2>
        </div>
        <p className="term-label">$ tail -f /now</p>
      </div>

      <Reveal>
        <div
          className="border-l-4 pl-4 sm:pl-5 py-4"
          style={{ borderColor: "var(--text-primary)" }}
        >
          <p className="term-label mb-2">
            // <span style={{ color: "var(--text-muted)" }}>MONTH YEAR</span> —{" "}
            <span style={{ color: "var(--accent)" }}>PRESENT</span>
          </p>
          <p
            className="font-serif text-base sm:text-lg leading-snug max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Placeholder — add what you're currently up to here (job hunting,
            a company/project as a linked word, what you're building right now).
          </p>
        </div>
      </Reveal>
    </section>
  );
}