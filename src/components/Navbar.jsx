import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FileDown, Terminal } from "lucide-react";
import { LINKS } from "../data";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "CP Stats", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    window.__lenis?.scrollTo(href, { offset: -72 });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-slate-800/60" : "bg-transparent"
      }`}
      data-testid="main-navbar"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => go(e, "#top")}
          data-testid="nav-logo"
          className="flex items-center gap-3 group"
        >
          <span className="w-9 h-9 rounded-md bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
            <Terminal size={16} />
          </span>
          <span className="font-display font-semibold text-slate-100 tracking-tight">
            saptarshi<span className="text-cyan-400">.dev</span>
          </span>
          <span className="hidden md:flex items-center gap-2 ml-3 pl-3 border-l border-slate-800">
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-code text-[10px] uppercase tracking-widest text-slate-500">
              Open to roles
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              data-testid={`nav-link-${l.label.toLowerCase().replace(" ", "-")}`}
              className="font-code text-xs uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={LINKS.resume}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-resume-button"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-400 font-code text-xs uppercase tracking-widest hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all"
          >
            <FileDown size={14} /> Resume
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
