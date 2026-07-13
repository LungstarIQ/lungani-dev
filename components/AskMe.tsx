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
      className="border-t px-8 pt-8 pb-10"
      style={{ borderColor: "var(--text-primary)" }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-baseline gap-3">
          <span className="text-xs" style={{ color: "var(--accent)" }}>
            01
          </span>
          <h2 className="font-serif text-4xl">Ask me anything</h2>
        </div>
        <p className="term-label">$ lungani --interactive</p>
      </div>

      <div className="border" style={{ borderColor: "var(--line)" }}>
        <div
          className="flex items-center justify-between px-4 py-2.5 border-b"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="flex items-center gap-3">
            <span className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ backgroundColor: "var(--line)" }}
                />
              ))}
            </span>
            <span className="term-label">
              lungani@lungani.dev · zsh · 80×24
            </span>
          </div>
          <span className="term-label" style={{ color: "var(--text-muted)" }}>
            ○ Coming soon
          </span>
        </div>

        <div className="px-4 py-6">
          <p className="term-label mb-2">SYSTEM</p>
          <p
            className="font-serif italic text-base mb-6 max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Placeholder — this will be an AI agent answering in my voice,
            grounded in my real experience. Not wired up yet.
          </p>

          <div className="flex flex-wrap gap-2">
            {suggestedPrompts.map((q) => (
              <span
                key={q}
                className="text-xs rounded-sm px-3 py-1.5 border opacity-50 cursor-not-allowed"
                style={{ borderColor: "var(--line)" }}
              >
                {q}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t px-4 py-3" style={{ borderColor: "var(--line)" }}>
          <p className="term-label" style={{ color: "var(--text-muted)" }}>
            $ Ask me about my work, stack, or experience… (coming soon)
          </p>
        </div>
      </div>
    </section>
  );
}