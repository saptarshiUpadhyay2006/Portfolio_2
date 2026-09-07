import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { FileDown, Terminal, Menu, X, Sparkles, ChevronRight } from "lucide-react";
import { LINKS } from "../data";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "CP Stats", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      let current = "";
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = `#${s}`;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(href);
    window.__lenis?.scrollTo(href, { offset: -76 });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50 pointer-events-none"
      data-testid="main-navbar"
    >
      {/* Scroll Progress Bar at top edge */}
      <motion.div
        style={{ scaleX }}
        className="h-[2px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 origin-left w-full shadow-[0_0_12px_rgba(0,243,255,0.8)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-3 sm:pt-4">
        <nav
          className={`pointer-events-auto transition-all duration-500 rounded-2xl sm:rounded-full px-5 py-3 flex items-center justify-between ${
            scrolled
              ? "glass border border-cyan-400/20 bg-[#030712]/80 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              : "bg-transparent border border-transparent"
          }`}
        >
          {/* Brand / Logo */}
          <a
            href="#top"
            onClick={(e) => go(e, "#top")}
            data-testid="nav-logo"
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-cyan-400/20 rounded-lg blur-sm group-hover:bg-cyan-400/40 transition-all" />
              <span className="relative w-9 h-9 rounded-lg bg-[#070c18] border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
                <Terminal size={17} />
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-100 tracking-tight text-base sm:text-lg group-hover:text-cyan-300 transition-colors">
                saptarshi<span className="text-cyan-400">.dev</span>
              </span>
            </div>

            <span className="hidden md:flex items-center gap-2 ml-2 pl-3 border-l border-slate-800/80">
              <span className="status-dot w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="font-code text-[10px] uppercase tracking-widest text-slate-400">
                Open to roles
              </span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 bg-[#02050c]/60 p-1.5 rounded-full border border-slate-800/60">
            {NAV_LINKS.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => go(e, l.href)}
                  data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
                  className={`relative font-code text-[11px] uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive ? "text-cyan-300 font-semibold" : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-cyan-400/15 border border-cyan-400/30 shadow-[0_0_15px_rgba(0,243,255,0.15)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              data-testid="nav-resume-button"
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 border border-cyan-400/40 text-cyan-300 font-code text-xs uppercase tracking-widest hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,243,255,0.35)] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <FileDown size={14} className="group-hover:-translate-y-0.5 transition-transform" />
              <span className="relative z-10 font-semibold">Resume</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="nav-mobile-toggle"
              aria-label="Toggle mobile menu"
              className="lg:hidden w-10 h-10 rounded-xl glass border border-slate-700 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto lg:hidden max-w-7xl mx-auto px-4 sm:px-6 pt-2"
          >
            <div className="glass rounded-2xl p-5 border border-cyan-400/20 bg-[#030712]/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-2">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-code text-xs uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
                  <Sparkles size={12} /> Menu Navigation
                </span>
                <span className="font-code text-[10px] text-slate-500">// saptarshi.dev</span>
              </div>

              <div className="grid gap-1 pt-2">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => go(e, l.href)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl font-code text-xs uppercase tracking-widest text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20 transition-all"
                  >
                    <span>{l.label}</span>
                    <ChevronRight size={14} className="text-slate-600" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-400 text-[#05070a] font-display font-semibold text-xs uppercase tracking-wider hover:bg-cyan-300 transition-colors"
                >
                  <FileDown size={15} /> View Resume Document
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
