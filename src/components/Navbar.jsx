import { scrollToSection } from "../hooks/useScrollSpy";
import { navItems } from "../data";

export default function Navbar({ active }) {
  return (
    <nav className="glass-nav" style={{ position: "fixed", top: 0, width: "100%", zIndex: 50 }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 64,
      }}>
        {/* Logo */}
        <div style={{
          fontFamily: "'Space Grotesk'", fontWeight: 800, fontSize: 18,
          letterSpacing: "-0.02em", color: "var(--primary)",
        }}>
          ENGINEER_CORE
        </div>

        {/* Nav Links */}
        <div className="hide-mobile" style={{ display: "flex", gap: 36 }}>
          {navItems.map((id) => (
            <span
              key={id}
              className={`nav-link ${active === id ? "active" : ""}`}
              onClick={() => scrollToSection(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="btn-primary" style={{ padding: "8px 22px", borderRadius: 10, fontSize: 13 }}>
          Resume
        </button>
      </div>
    </nav>
  );
}
