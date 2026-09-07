import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Leaf, Home, LineChart, Palette, FileText, BookOpen, CheckCircle2, Layers, Target, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { PROJECTS, CASE_STUDIES } from "../data";
import { FadeIn, SectionHeading } from "./Shared";
import SectionFX from "./SectionFX";

const FILTERS = ["All", "AI/ML", "Full-Stack", "Real-Time"];
const PROJECT_ICONS = {
  Greenlens: Leaf,
  HomeQuest: Home,
  Binivex: LineChart,
  Maquette: Palette,
  Snipora: FileText,
  greenlens: Leaf,
  homequest: Home,
  binivex: LineChart,
  maquette: Palette,
  snipora: FileText,
};

const StudyBlock = ({ icon: Icon, title, children }) => (
  <div>
    <p className="font-code text-[10px] uppercase tracking-[0.25em] text-slate-500 flex items-center gap-2 mb-3">
      <Icon size={13} className="text-cyan-400" /> {title}
    </p>
    {children}
  </div>
);

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);
  const displayed = visible.slice(0, visibleCount);
  const active = open ? PROJECTS.find((p) => (p.name === open || p.id === open || p.title === open)) : null;
  const study = open ? (CASE_STUDIES[open] || CASE_STUDIES[open.toLowerCase()] || CASE_STUDIES[open.toUpperCase()]) : null;
  const ActiveIcon = open ? (PROJECT_ICONS[open] || PROJECT_ICONS[open.toLowerCase()] || Palette) : Palette;

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleFilterChange = (f) => {
    setFilter(f);
    setVisibleCount(4);
  };

  return (
    <section id="projects" data-testid="projects-section" className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <SectionFX variant="grid" />
      <SectionHeading index="02" eyebrow="Featured Work" title="Projects that ship" testId="projects-heading" />

      <FadeIn className="flex flex-nowrap sm:flex-wrap overflow-x-auto pb-2 sm:pb-0 gap-2 mb-10 -mx-2 px-2 no-scrollbar">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => handleFilterChange(f)}
            data-testid={`project-filter-${f.toLowerCase().replace(/[\/]/g, "-")}`}
            className={`font-code text-[11px] sm:text-xs uppercase tracking-widest px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-all shrink-0 ${filter === f
              ? "bg-cyan-400 text-[#05070a] border-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.3)] font-semibold"
              : "border-slate-700 text-slate-400 hover:border-cyan-400/40 hover:text-cyan-400"
              }`}
          >
            {f}
          </button>
        ))}
      </FadeIn>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {displayed.map((p, i) => {
            const projName = p.name || p.title;
            const Icon = PROJECT_ICONS[projName] || PROJECT_ICONS[p.id] || Palette;
            return (
              <motion.article
                layout
                key={projName}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                data-testid={`project-card-${projName.toLowerCase()}`}
                className="glow-card glass rounded-2xl p-6 sm:p-8 flex flex-col group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/15 to-emerald-400/15 border border-cyan-400/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={p.github || p.githubUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${projName} GitHub`}
                      data-testid={`project-github-${projName.toLowerCase()}`}
                      className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={p.live || p.demoUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${projName} live demo`}
                      data-testid={`project-live-${projName.toLowerCase()}`}
                      className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-400/40 transition-all"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold text-slate-50 tracking-tight">{projName}</h3>
                <p className="font-code text-xs uppercase tracking-widest text-cyan-400/80 mt-1">{p.tagline}</p>
                <p className="text-sm text-slate-400 leading-relaxed mt-4 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tags.map((t) => (
                    <span key={t} className="font-code text-[10px] px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700/50 text-slate-400 moving-bandage">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setOpen(projName)}
                  data-testid={`case-study-button-${projName.toLowerCase()}`}
                  className="mt-6 self-start flex items-center gap-2 font-code text-xs uppercase tracking-widest text-cyan-400 hover:text-cyan-300 hover:gap-3 transition-all"
                >
                  <BookOpen size={14} /> Read case study
                </button>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {visible.length > 4 && (
        <div className="flex justify-center mt-12">
          {visibleCount < visible.length ? (
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              data-testid="show-more-projects-button"
              className="font-code text-xs uppercase tracking-widest px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] transition-all flex items-center gap-2 glass"
            >
              <span>Show More Projects ({visible.length - visibleCount} remaining)</span>
              <ChevronDown size={14} />
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(4)}
              data-testid="show-less-projects-button"
              className="font-code text-xs uppercase tracking-widest px-6 py-3 rounded-full border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200 transition-all flex items-center gap-2 glass"
            >
              <span>Show Less</span>
              <ChevronUp size={14} />
            </button>
          )}
        </div>
      )}

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent
          data-testid="case-study-modal"
          data-scroll-lock-scrollable
          onWheel={(e) => e.stopPropagation()}
          className="bg-[#0b0e14]/95 border border-cyan-400/20 text-slate-200 max-w-2xl backdrop-blur-xl max-h-[85vh] overflow-y-auto overscroll-contain touch-pan-y"
        >
          {active && study && (
            <div className="space-y-7">
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/15 to-emerald-400/15 border border-cyan-400/25 flex items-center justify-center text-cyan-400 shrink-0">
                    <ActiveIcon size={22} />
                  </span>
                  <div>
                    <DialogTitle className="font-display text-2xl text-slate-50 tracking-tight">{active.name || active.title}</DialogTitle>
                    <DialogDescription className="font-code text-xs uppercase tracking-widest text-cyan-400/80 mt-1">
                      {active.tagline} {study.role ? `· ${study.role}` : ""}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              {active.image && (
                <div className="rounded-xl overflow-hidden border border-slate-800/60 bg-[#070a12]">
                  <img
                    key={active.image}
                    src={`${active.image}?v=${Date.now()}`}
                    alt={`${active.name || active.title} product screenshot`}
                    className="w-full h-auto max-h-[420px] object-cover rounded-xl"
                  />
                </div>
              )}

              <StudyBlock icon={Target} title="The problem">
                <p className="text-sm text-slate-300 leading-relaxed">{study.problem || study.problemStatement}</p>
              </StudyBlock>

              <StudyBlock icon={Layers} title="Architecture">
                <ol className="space-y-2.5">
                  {study.architecture.map((a, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                      <span className="font-code text-cyan-400/70 text-xs mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      {a}
                    </li>
                  ))}
                </ol>
              </StudyBlock>

              <StudyBlock icon={Zap} title="Engineering highlights">
                <ul className="space-y-2.5">
                  {study.highlights.map((h, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 size={15} className="text-emerald-400 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </StudyBlock>

              <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
                <p className="font-code text-[10px] uppercase tracking-[0.25em] text-emerald-400 mb-2">Outcome</p>
                <p className="text-sm text-slate-200 leading-relaxed">{study.outcome}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {active.tags.map((t) => (
                  <span key={t} className="font-code text-[10px] px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700/50 text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
