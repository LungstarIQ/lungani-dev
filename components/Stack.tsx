type Group = {
  label: string;
  items: string[];
};

const groups: Group[] = [
  {
    label: "LANGUAGES",
    items: ["Java", "TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    label: "FRAMEWORKS & LIBRARIES",
    items: ["Angular", "Spring Boot", "Next.js", "Tailwind CSS"],
  },
  {
    label: "DATABASES & ORMS",
    items: ["PostgreSQL", "Firebase (Firestore)"],
  },
  {
    label: "TOOLS & PLATFORMS",
    items: ["Git", "GitHub", "Vercel", "Firebase Hosting"],
  },
  {
    label: "AUTHENTICATION",
    items: ["Firebase Auth"],
  },
  {
    label: "OTHER",
    items: ["REST APIs", "Responsive Design", "UI/UX", "Web Audio API"],
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="border-t px-8 pt-8 pb-10"
      style={{ borderColor: "var(--text-primary)" }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-baseline gap-3">
          <span className="text-xs" style={{ color: "var(--accent)" }}>
            04
          </span>
          <h2 className="font-serif text-4xl">Stack</h2>
        </div>
        <p className="term-label">$ cat ~/.skillset</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
        {groups.map((g) => (
          <div key={g.label}>
            <p
              className="text-xs font-semibold tracking-wide mb-3"
              style={{ color: "var(--accent)" }}
            >
              {g.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-[11px] uppercase tracking-wide px-3.5 py-1.5 border rounded-full"
                  style={{ borderColor: "var(--line)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}