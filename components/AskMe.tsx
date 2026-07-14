import Reveal from "@/components/Reveal";

export default function AskMe() {
  const suggestedPrompts = [
    "What have you built?",
    "What's your stack?",
    "Are you open to remote roles?",
    "Tell me about FlipMania",
  ];

  return (
    <section
      id="ask"
      className="border-t px-4 sm:px-8 pt-6 sm:pt-8 pb-8 sm:pb-10"
      style={{ borderColor: "var(--text-primary)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-6">
        <div className="flex items-baseline gap-3">
          <span className="text-xs" style={{ color: "var(--accent)" }}>
            01
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl">Ask me anything</h2>
        </div>
        <p className="term-label">$ lungani --interactive</p>
      </div>

      <Reveal>
        <div className="border" style={{ borderColor: "var(--line)" }}>
          <div
            className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b gap-2"
            style={{ borderColor: "var(--line)" }}
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <span className="flex gap-1 shrink-0">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full inline-block"
                    style={{ backgroundColor: "var(--line)" }}
                  />
                ))}
              </span>
              <span className="term-label truncate">
                lungani@lungani.dev · zsh · 80×24
              </span>
            </div>
            <span
              className="term-label shrink-0"
              style={{ color: "var(--text-muted)" }}
            >
              ○ Coming soon
            </span>
          </div>

          <div className="px-3 sm:px-4 py-5 sm:py-6">
            <p className="term-label mb-2">SYSTEM</p>
            <p
              className="font-serif italic text-sm sm:text-base mb-5 sm:mb-6 max-w-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Placeholder — this will be an AI agent answering in my voice,
              grounded in my real experience. Not wired up yet.
            </p>

            <div className="flex flex-wrap gap-2">
              {suggestedPrompts.map((q) => (
                <span
                  key={q}
                  className="text-[11px] sm:text-xs rounded-sm px-2.5 sm:px-3 py-1.5 border opacity-50 cursor-not-allowed"
                  style={{ borderColor: "var(--line)" }}
                >
                  {q}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t px-3 sm:px-4 py-3" style={{ borderColor: "var(--line)" }}>
            <p className="term-label truncate" style={{ color: "var(--text-muted)" }}>
              $ Ask me about my work, stack, or experience… (coming soon)
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}