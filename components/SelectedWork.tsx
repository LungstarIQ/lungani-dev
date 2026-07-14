import Reveal from "@/components/Reveal";

type Project = {
  years: string;
  roleLabel: string;
  name: string;
  tags: string;
  stack: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    years: "2025 — 2026",
    roleLabel: "SOLO PROJECT · CS50 FINAL PROJECT",
    name: "FlipMania",
    tags: "GAMES · WEB PLATFORM",
    stack: "Angular 21 · Firebase · Web Audio API",
    featured: true,
  },
  {
    years: "2024 — 2025",
    roleLabel: "BACKEND & WORKFLOW",
    name: "IziRenewal",
    tags: "BUSINESS SYSTEMS",
    stack: "Spring Boot · Java · PostgreSQL",
  },
  {
    years: "2024",
    roleLabel: "FULL STACK",
    name: "Order & Inventory System",
    tags: "BUSINESS SYSTEMS",
    stack: "Spring Boot · Angular · PostgreSQL",
  },
  {
    years: "2024",
    roleLabel: "FRONT END",
    name: "Barcode & License Disc Scanner",
    tags: "TOOLING",
    stack: "Angular · REST APIs",
  },
];

export default function SelectedWork() {
  return (
    <section
      id="work"
      className="border-t px-4 sm:px-8 pt-6 sm:pt-8 pb-8 sm:pb-10"
      style={{ borderColor: "var(--text-primary)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-6">
        <div className="flex items-baseline gap-3">
          <span className="text-xs" style={{ color: "var(--accent)" }}>
            03
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl">Selected Work</h2>
        </div>
        <p className="term-label">$ git log --author=lungani --oneline</p>
      </div>

      <div>
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 100}>
            <div
              className="grid grid-cols-1 sm:grid-cols-[100px_1fr_auto] gap-3 sm:gap-6 py-6 border-b items-start"
              style={{ borderColor: "var(--line)" }}
            >
              <p className="term-label pt-1">{p.years}</p>

              <div>
                <p
                  className="text-xs font-semibold tracking-wide mb-1"
                  style={{ color: p.featured ? "var(--accent)" : "var(--text-secondary)" }}
                >
                  {p.roleLabel}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl mb-2">{p.name}</h3>
                <p className="term-label mb-1">{p.tags}</p>
                <p className="term-label" style={{ color: "var(--text-muted)" }}>
                  {p.stack}
                </p>
              </div>

              <p className="term-label pt-1 whitespace-nowrap sm:justify-self-end">
                See more [+]
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}