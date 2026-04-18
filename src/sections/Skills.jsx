import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "120px 24px", background: "var(--surface-lowest)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <h2 className="section-title" style={{ fontSize: "2.5rem" }}>Technical Arsenal</h2>
          <p style={{ color: "var(--on-surface-variant)", marginTop: 12, fontSize: 13, letterSpacing: "0.05em" }}>
            Categorized mastery of modern technology stacks.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {skillGroups.map(({ icon, label, color, skills }) => (
            <div key={label} className="glass-card" style={{ borderRadius: 16, padding: 28 }}>
              <div style={{
                fontSize: 28, marginBottom: 16,
                color: color === "blue" ? "var(--primary)" : "var(--secondary)",
              }}>
                {icon}
              </div>
              <h3 className="section-title" style={{ fontSize: 18, marginBottom: 16 }}>{label}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills.map((s) => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
