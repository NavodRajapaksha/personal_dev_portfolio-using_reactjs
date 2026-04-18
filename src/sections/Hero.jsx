import { scrollToSection } from "../hooks/useScrollSpy";

const floatingTags = ["SPRING BOOT", "REACT", "FIGMA"];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        justifyContent: "center", position: "relative",
        overflow: "hidden", paddingTop: 80,
      }}
    >
      {/* Background glow blob */}
      <div
        className="hero-glow animate-radiate"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle, rgba(123,208,255,0.08) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, black 0%, transparent 100%)",
      }} />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: 860, padding: "0 24px" }}>

        {/* Floating tech tags */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
          {floatingTags.map((tag, i) => (
            <div
              key={tag}
              className="floating-tag animate-float"
              style={{
                color: i % 2 === 0 ? "var(--primary)" : "var(--secondary)",
                animationDelay: `${i * 0.8}s`,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Availability badge */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 28 }}>
          <div
            className="orb-pulse"
            style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--secondary)" }}
          />
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--on-surface-variant)", fontWeight: 600 }}>
            AVAILABLE FOR PROJECTS
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="gradient-text hero-title"
          style={{
            fontFamily: "'Space Grotesk'", fontSize: "5.5rem",
            fontWeight: 800, letterSpacing: "-0.03em",
            lineHeight: 1.05, marginBottom: 28,
          }}
        >
          Full Stack<br />Developer
        </h1>

        <p style={{
          fontSize: 17, color: "var(--on-surface-variant)",
          maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7,
          fontFamily: "'JetBrains Mono'",
        }}>
          Architecting scalable digital experiences through precise engineering
          and modern aesthetics. Focused on performance and modular design.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            className="btn-primary"
            style={{ padding: "14px 36px", borderRadius: 12, fontSize: 14 }}
            onClick={() => scrollToSection("projects")}
          >
            View Projects →
          </button>
          <button className="btn-ghost" style={{ padding: "14px 36px", borderRadius: 12, fontSize: 14 }}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
