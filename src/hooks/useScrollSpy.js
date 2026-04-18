import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds = []) {
  const [active, setActive] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handler = () => {
      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler(); // run once on mount
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds]);

  return active;
}

export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
