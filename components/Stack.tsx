import Reveal from "@/components/Reveal";

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
      className="border-t px-4 sm:px-8 pt-6 sm:pt-8 pb-8 sm:pb-10"
      style={{ borderColor: "var(--text-primary)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 sm:mb-10 gap-3 sm:gap-8">
        <div>
          <p className="term-label mb-1">FULL TOOLKIT</p>
          <h2 className="font-serif text-3xl sm:text-4xl">Technologies I work with</h2>
        </div>
        <p
          className="text-xs sm:text-sm sm:max-w-xs sm:text-right leading-snug pt-1"
          style={{ color: "var(--text-secondary)" }}
        >
          Grouped by practice area — same stack I use on production work and
          personal builds.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-10">
        {groups.map((g, i) => (
          <Reveal key={g.label} delay={i * 60}>
            <div>
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
          </Reveal>
        ))}
      </div>
    </section>
  );
}