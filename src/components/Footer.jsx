import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { LINKS } from "../data";
import SectionFX from "./SectionFX";

export default function Footer({ onOpenResume }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer data-testid="site-footer" className="relative z-20 border-t border-cyan-500/10 mt-10 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #0f172a, #0b1120)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-20">
        <h2
          data-testid="footer-kinetic-text"
          className="font-display font-bold tracking-tight leading-none text-3xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-200 to-cyan-400"
        >
          LET'S BUILD
          <br />
          THE FUTURE.
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-10 sm:mt-14 pt-8 border-t border-slate-800/60">
          <div>
            <p className="font-code text-xs text-slate-500">
              Kolkata, India · <span className="text-emerald-400">{time} IST</span>
            </p>
            <p className="font-code text-xs text-slate-600 mt-2">
              &copy; 2026 Saptarshi Upadhyay · Engineered with intent
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-5">
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" data-testid="footer-github-link" className="font-code text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">
              GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" data-testid="footer-linkedin-link" className="font-code text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">
              LinkedIn
            </a>
            <button onClick={onOpenResume} data-testid="footer-resume-link" className="font-code text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">
              Resume
            </button>
            <a href={`mailto:${LINKS.email}`} data-testid="footer-email-link" className="font-code text-xs uppercase tracking-widest text-slate-500 hover:text-cyan-400 transition-colors">
              Email
            </a>
            <button
              onClick={() => window.__lenis?.scrollTo(0)}
              data-testid="back-to-top-button"
              aria-label="Back to top"
              className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-1 transition-all"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
