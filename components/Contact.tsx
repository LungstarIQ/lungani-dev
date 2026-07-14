export default function Contact() {
  const links = [
    { label: "Email me", href: "mailto:you@example.com" },
    { label: "Download résumé", href: "#" },
    { label: "GitHub ↗", href: "https://github.com/your-username" },
    {
      label: "LinkedIn ↗",
      href: "https://www.linkedin.com/in/mkhize-thandanani-lungani",
    },
  ];

  return (
    <section
      id="contact"
      className="border-t px-8 pt-8 pb-16"
      style={{ borderColor: "var(--text-primary)" }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-baseline gap-3">
          <span className="text-xs" style={{ color: "var(--accent)" }}>
            05
          </span>
          <h2 className="font-serif text-4xl">Get in touch</h2>
        </div>
        <p className="term-label">$ echo $CONTACT</p>
      </div>

      <p
        className="font-serif text-lg leading-snug max-w-lg mb-6"
        style={{ color: "var(--text-secondary)" }}
      >
        Open to full-stack roles, remote or on-site. Always happy to talk
        about a project, a role, or just software.
      </p>

      <div className="flex flex-wrap gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-sm px-4 py-2 border rounded-sm hover:opacity-70"
            style={{ borderColor: "var(--text-primary)" }}
          >
            {l.label}
          </a>
        ))}
      </div>

      <p className="term-label mt-12" style={{ color: "var(--text-muted)" }}>
        © 2026 Lungani Mkhize · lungani.dev
      </p>
    </section>
  );
}