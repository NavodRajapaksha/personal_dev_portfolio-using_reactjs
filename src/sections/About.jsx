const certs = [
  "IBM React Developer Professional",
  "Udemy Java Masterclass",
];

export default function About() {
  return (
    <section id="about" className="section-glow-left" style={{ padding: "120px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="grid-about"
          style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }}
        >
          {/* Left label */}
          <div>
            <div className="section-number">01.</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", marginTop: 8 }}>
              The Engineer's<br />Path
            </h2>
            <div style={{
              height: 3, width: 60, background: "var(--secondary)",
              marginTop: 24, borderRadius: 2,
              boxShadow: "0 0 12px rgba(74,225,118,0.55)",
            }} />
          </div>

          {/* Right cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {/* Bio */}
            <div className="glass-card" style={{ gridColumn: "1/-1", borderRadius: 16, padding: 32 }}>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--on-surface-variant)" }}>
                Driven by curiosity and an obsession with clean code, I bridge the gap between
                complex backend architectures and fluid frontend experiences. Currently focusing
                on high-performance enterprise solutions using modern cloud-native patterns.
              </p>
            </div>

            {/* Education */}
            <div className="glass-card" style={{ borderRadius: 16, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: "rgba(123,208,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                }}>
                  🎓
                </div>
                <h3 className="section-title" style={{ fontSize: 18 }}>Education</h3>
              </div>
              <p style={{ fontWeight: 700, color: "var(--on-surface)", fontFamily: "'Space Grotesk'" }}>
                3rd Year Software Engineering
              </p>
              <p style={{ color: "var(--on-surface-variant)", fontSize: 13, marginTop: 6 }}>Saegis Campus</p>
            </div>

            {/* Certifications */}
            <div className="glass-card" style={{ borderRadius: 16, padding: 28 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: "rgba(74,225,118,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18,
                }}>
                  ✦
                </div>
                <h3 className="section-title" style={{ fontSize: 18 }}>Certifications</h3>
              </div>
              {certs.map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--secondary)", flexShrink: 0 }} />
                  <span style={{ color: "var(--on-surface-variant)", fontSize: 13 }}>{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
