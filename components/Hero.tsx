export default function Hero() {
  return (
    <section className="term-box term-divider border-b-2 px-5 py-6 flex gap-6 flex-col sm:flex-row">
      <div className="flex-1">
        <p className="term-label mb-1.5">lungani@lungani.dev:~$ whoami</p>
        <h1 className="text-2xl font-semibold mb-4"># Lungani Mkhize</h1>

        <div className="term-box text-xs">
          <div className="grid grid-cols-[90px_1fr]">
            <span className="px-3 py-2 border-r-2 border-b border-dashed border-[var(--line-soft)] text-[var(--text-muted)]">
              Role
            </span>
            <span className="px-3 py-2 border-b border-dashed border-[var(--line-soft)]">
              Full-Stack Software Developer
            </span>

            <span className="px-3 py-2 border-r-2 border-b border-dashed border-[var(--line-soft)] text-[var(--text-muted)]">
              Based
            </span>
            <span className="px-3 py-2 border-b border-dashed border-[var(--line-soft)]">
              Durban, KwaZulu-Natal, ZA
            </span>

            <span className="px-3 py-2 border-r-2 border-[var(--line)] text-[var(--text-muted)]">
              Status
            </span>
            <span className="px-3 py-2" style={{ color: "var(--accent)" }}>
              Open to opportunities
            </span>
          </div>
        </div>
      </div>

      <div className="w-[110px] text-center shrink-0">
        <p className="text-[10px] text-[var(--text-muted)] font-mono mb-1.5">FIG·01</p>
        <div className="term-box w-[100px] h-[100px] flex items-center justify-center mx-auto">
          {/* Swap this div for a Next.js <Image> once you have a photo */}
          <span className="text-[10px] text-[var(--text-muted)] font-mono">photo</span>
        </div>
        <p className="text-[9px] text-[var(--text-muted)] mt-1.5">lungani.jpg</p>
      </div>
    </section>
  );
}