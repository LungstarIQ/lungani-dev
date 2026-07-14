type Cert = {
  title: string;
  placeholder?: boolean;
};

const certs: Cert[] = [
  { title: "CS50x: Introduction to Computer Science — Harvard" },
  { title: "Add certification" , placeholder: true },
  { title: "Add certification", placeholder: true },
  { title: "Add certification", placeholder: true },
];

export default function Certifications() {
  return (
    <section
      className="px-8 pt-8 pb-10 border-t border-dashed"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-xs" style={{ color: "var(--accent)" }}>
          04.1
        </span>
        <h2 className="font-serif text-2xl">Certifications</h2>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border"
        style={{ borderColor: "var(--line)" }}
      >
        {certs.map((cert, i) => (
          <div
            key={i}
            className="flex items-start gap-3 p-5 border-b lg:border-b-0 lg:border-r last:border-r-0"
            style={{
              borderColor: "var(--line)",
              opacity: cert.placeholder ? 0.45 : 1,
            }}
          >
            <span
              className="text-[10px] font-semibold px-2 py-1 border shrink-0"
              style={{ borderColor: "var(--text-primary)" }}
            >
              CERT
            </span>
            <p className="text-sm leading-snug">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}