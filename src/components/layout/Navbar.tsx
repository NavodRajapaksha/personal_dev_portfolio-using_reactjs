
const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 glass-nav">
            <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto font-headline tracking-tight">

                {/* Logo */}
                <div className="text-lg md:text-xl font-bold tracking-tighter text-primary">
                    NAVOD_RAJAPAKSHA<span className="text-secondary animate-pulse">_</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-primary border-b-2 border-primary pb-1">
                        Home
                    </a>
                    <a href="#about" className="text-on-surface-variant hover:text-primary transition-colors">
                        About
                    </a>
                    <a href="#skills" className="text-on-surface-variant hover:text-primary transition-colors">
                        Skills
                    </a>
                    <a href="#projects" className="text-on-surface-variant hover:text-primary transition-colors">
                        Projects
                    </a>
                    <a href="#contact" className="text-on-surface-variant hover:text-primary transition-colors">
                        Contact
                    </a>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 md:gap-4">
          <span className="material-symbols-outlined text-on-surface-variant hidden sm:block">
            terminal
          </span>
                    <button className="bg-primary/10 text-primary px-4 md:px-6 py-2 rounded-full border border-primary/30 font-medium hover:bg-primary/20 hover:scale-105 active:scale-95 transition-all text-sm md:text-base shadow-[0_0_15px_rgba(123,208,255,0.1)]">
                        Resume
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;