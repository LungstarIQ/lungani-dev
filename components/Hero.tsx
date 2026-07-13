export default function Hero() {
  return (
    <section id="hero" className="term-divider px-8 py-10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10">
        <div>
          <p className="term-label mb-2">
            LUNGANI@LUNGANI.DEV:~$ WHOAMI
          </p>

          <h1 className="font-serif text-6xl sm:text-7xl leading-[0.95] mb-6">
            Thandanani Lungani
            <br />
            Mkhize
          </h1>

          <p className="text-xs font-semibold tracking-wide mb-4">
            <span style={{ color: "var(--text-muted)" }}>// </span>
            FULL-STACK DEVELOPER · WEB PLATFORMS · GAMES
          </p>

          <p className="font-serif text-xl leading-snug max-w-lg">
            Full-stack developer who ships{" "}
            <em style={{ color: "var(--accent)" }}>solo game platforms</em> and
            the production systems behind them.
          </p>
        </div>

        <div>
          <p className="term-label mb-1.5">FIG·01</p>
          <div
            className="w-full aspect-square flex items-center justify-center border"
            style={{ borderColor: "var(--line)" }}
          >
            {/* Swap for Next.js <Image> once a headshot is ready */}
            <span className="term-label">photo</span>
          </div>
          <div className="flex justify-between mt-1.5 term-label">
            <span>lungani.jpg</span>
            <span>800×800</span>
          </div>
        </div>
      </div>

      <div
        className="mt-10 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <div>
          <p className="term-label mb-1">ROLE</p>
          <p className="text-sm font-semibold">Full-Stack Developer</p>
        </div>
        <div>
          <p className="term-label mb-1">BASED</p>
          <p className="text-sm font-semibold">Durban, KZN, ZA</p>
        </div>
        <div>
          <p className="term-label mb-1">EXPERIENCE</p>
          <p className="text-sm font-semibold">2+ yrs, hands-on</p>
        </div>
        <div>
          <p className="term-label mb-1">STATUS</p>
          <p className="text-sm font-semibold" style={{ color: "var(--success)" }}>
            Open to opportunities
          </p>
        </div>
      </div>
    </section>
  );
}