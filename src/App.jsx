import "./styles/index.css";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { navItems } from "./data";

import Navbar  from "./components/Navbar";
import Footer  from "./components/Footer";
import Hero    from "./sections/Hero";
import About   from "./sections/About";
import Skills  from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
    const active = useScrollSpy(navItems);

    return (
        <>
            <Navbar active={active} />

            <main>
                <Hero />
                <div className="divider-glow" />
                <About />
                <div className="divider-glow" />
                <Skills />
                <div className="divider-glow" />
                <Projects />
                <div className="divider-glow" />
                <Contact />
            </main>

            <Footer />
        </>
    );
}
