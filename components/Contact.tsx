export default function Contact() {
  const email = "you@example.com";
  const githubHandle = "your-username";

  return (
    <section
      id="contact"
      className="border-t px-8 pt-8 pb-0"
      style={{ borderColor: "var(--text-primary)" }}
    >
      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-xs" style={{ color: "var(--accent)" }}>
          05
        </span>
        <h2 className="font-serif text-4xl">Get in touch</h2>
      </div>

      <div className="border p-8 mb-10" style={{ borderColor: "var(--line)" }}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <p className="font-serif text-xl leading-snug max-w-xl">
            <a
              href={`mailto:${email}`}
              className="hover:opacity-70"
              style={{ color: "var(--accent)" }}
            >
              Hiring for a role that fits?
            </a>{" "}
            <span style={{ color: "var(--text-secondary)" }}>
              I'd love to hear about it. I read everything and reply within a
              day.
            </span>
          </p>

          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={`mailto:${email}`}
              className="text-sm px-5 py-2.5"
              style={{ backgroundColor: "var(--text-primary)", color: "var(--bg)" }}
            >
              Email me
            </a>
            <a
              href="/resume.pdf"
              className="text-sm px-5 py-2.5 border"
              style={{ borderColor: "var(--line)" }}
            >
              Download résumé
            </a>
            <a
              href={`https://github.com/${githubHandle}`}
              className="text-sm px-5 py-2.5 border"
              style={{ borderColor: "var(--line)" }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row justify-between gap-2 py-6 border-t text-xs"
        style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}
      >
        <p>
          © 2026{" "}
          <a href="#hero" className="hover:opacity-70" style={{ color: "var(--text-muted)" }}>
            Lungani Mkhize
          </a>{" "}
          · <a href="/" className="hover:opacity-70" style={{ color: "var(--text-muted)" }}>lungani.dev</a>
        </p>
        <div className="flex gap-4">
          <a href={`mailto:${email}`} className="hover:opacity-70">
            {email}
          </a>
          <a
            href={`https://github.com/${githubHandle}`}
            className="hover:opacity-70"
          >
            github/{githubHandle}
          </a>
          <a href="/resume.pdf" className="hover:opacity-70">
            résumé.pdf
          </a>
        </div>
      </div>
    </section>
  );
}