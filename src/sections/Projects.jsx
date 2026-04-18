import { projects } from "../data";

function ProjectCard({ title, desc, tags, img, github, demo }) {
  return (
    <div className="project-card">
      <div style={{ aspectRatio: "16/9", overflow: "hidden" }}>
        <img
          className="project-img"
          src={img}
          alt={title}
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.style.background = "#131b2e";
          }}
        />
      </div>
      <div style={{ padding: "28px 32px" }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
          {tags.map((t) => (
            <span key={t.label} className={t.color === "blue" ? "tag-blue" : "tag-green"}>
              {t.label}
            </span>
          ))}
        </div>
        <h3 className="section-title" style={{ fontSize: 22, marginBottom: 10 }}>{title}</h3>
        <p style={{ color: "var(--on-surface-variant)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>
          {desc}
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          <a
            href={github}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--secondary)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              display: "flex", alignItems: "center", gap: 6,
              textDecoration: "none", transition: "gap 0.2s",
            }}
          >
            GitHub ↗
          </a>
          <a
            href={demo}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--primary)", fontSize: 11, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase",
              display: "flex", alignItems: "center", gap: 6,
              textDecoration: "none",
            }}
          >
            Demo ▶
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-glow-right" style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 64,
          flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <div className="section-number">02.</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", marginTop: 8 }}>Engineered Solutions</h2>
          </div>
          <p style={{ color: "var(--on-surface-variant)", maxWidth: 340, textAlign: "right", fontSize: 13, lineHeight: 1.7 }}>
            A showcase of production-ready systems and architectural implementations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(440px, 1fr))", gap: 28 }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
