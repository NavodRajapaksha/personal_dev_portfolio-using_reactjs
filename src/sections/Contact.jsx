import { useState } from "react";
import { contactLinks } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSend(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" style={{ padding: "120px 24px", background: "var(--surface-lowest)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

          {/* Left - Info */}
          <div>
            <div className="section-number">03.</div>
            <h2 className="section-title" style={{ fontSize: "2.5rem", marginTop: 8, marginBottom: 24, lineHeight: 1.2 }}>
              Let's Build Something<br />Meaningful.
            </h2>
            <p style={{ color: "var(--on-surface-variant)", fontSize: 15, lineHeight: 1.8, marginBottom: 48 }}>
              Whether you have a question or just want to say hi, my inbox is always open.
              I'm currently looking for new opportunities and collaborations in enterprise software.
            </p>

            {contactLinks.map(({ icon, label, color }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, cursor: "pointer" }}>
                <div
                  className="contact-icon glass-card"
                  style={{ color: color === "primary" ? "var(--primary)" : "var(--secondary)" }}
                >
                  <span style={{ fontSize: 18 }}>{icon}</span>
                </div>
                <span style={{ color: "var(--on-surface)", fontWeight: 500, fontFamily: "'Space Grotesk'" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Right - Form */}
          <div className="glass-card" style={{ borderRadius: 24, padding: 40 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>✦</div>
                <h3 className="section-title" style={{ fontSize: 22, color: "var(--secondary)", marginBottom: 10 }}>
                  Transmission Sent!
                </h3>
                <p style={{ color: "var(--on-surface-variant)", fontSize: 14 }}>I'll get back to you shortly.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div>
                  <label className="input-label">Full Name</label>
                  <input
                    className="input-field"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="input-label">Email Address</label>
                  <input
                    className="input-field"
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="input-label">Message</label>
                  <textarea
                    className="input-field"
                    rows={4}
                    placeholder="How can I help you?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ resize: "vertical" }}
                  />
                </div>
                <button
                  className="btn-primary"
                  onClick={handleSend}
                  style={{ padding: 16, borderRadius: 14, fontSize: 14, width: "100%", letterSpacing: "0.05em" }}
                >
                  Send Transmission →
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
