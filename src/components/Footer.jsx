export default function Footer() {
  const links = ["GitHub", "LinkedIn", "Source"];

  return (
    <footer style={{
      background: "rgba(3, 8, 18, 0.9)",
      borderTop: "1px solid rgba(255,255,255,0.05)",
      padding: "48px 40px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 20,
      }}>
        <div style={{
          fontFamily: "'Space Grotesk'", fontWeight: 800,
          fontSize: 15, letterSpacing: "-0.01em", color: "#dae2fd",
        }}>
          THE CINEMATIC ENGINEER
        </div>

        <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#45464d" }}>
          © 2025 THE CINEMATIC ENGINEER. BUILT FOR PRECISION.
        </div>

        <div style={{ display: "flex", gap: 28 }}>
          {links.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "#45464d", textDecoration: "none", fontSize: 10,
                letterSpacing: "0.18em", textTransform: "uppercase",
                fontWeight: 700, fontFamily: "'Space Grotesk'", transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "var(--secondary)")}
              onMouseLeave={(e) => (e.target.style.color = "#45464d")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
