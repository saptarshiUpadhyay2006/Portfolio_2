import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Leaf, Home, LineChart, BookOpen, CheckCircle2, Layers, Target, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { PROJECTS } from "../data";
import { FadeIn, SectionHeading } from "./Shared";
import SectionFX from "./SectionFX";

const FILTERS = ["All", "AI/ML", "Full-Stack", "Real-Time"];
const PROJECT_ICONS = { Greenlens: Leaf, HomeQuest: Home, Binivex: LineChart };

const CASE_STUDIES = {
  Greenlens: {
    role: "Full-Stack & ML Engineer",
    problem:
      "Organizations can't act on carbon data trapped in unstructured receipts and utility bills — manual tracking simply doesn't scale.",
    architecture: [
      "Next.js client behind an API gateway routing to independent microservices",
      "Node.js ingestion service handling document uploads and job dispatch",
      "Python FastAPI ML service: Tesseract OCR extraction, feature engineering, XGBoost carbon estimation",
      "MongoDB Atlas with per-service collections for true service isolation",
    ],
    highlights: [
      "OCR pipeline with confidence scoring and fallback heuristics for noisy scans",
      "Async job flow so ML inference never blocks the request path",
      "Each microservice scales, deploys, and fails independently",
    ],
    outcome: "End-to-end carbon tracking — from a raw receipt photo to a dashboard insight — fully automated.",
  },
  HomeQuest: {
    role: "Full-Stack Engineer",
    problem:
      "Rental discovery is fragmented: listings, authentication, payments, and location search live in separate, clunky tools.",
    architecture: [
      "Express REST API with MongoDB persistence layer",
      "Passport.js sessions plus Google OAuth for frictionless sign-in",
      "Razorpay SDK order creation with server-side payment verification",
      "Mapbox GL JS map-first UI backed by MongoDB 2dsphere geospatial indexes",
    ],
    highlights: [
      "Geospatial queries return nearby listings in milliseconds",
      "Payment state machine keeps bookings consistent across Razorpay callbacks",
      "OAuth and local strategy unified under one session model",
    ],
    outcome: "A complete marketplace loop: discover on the map, authenticate, book, and pay — in one flow.",
  },
  Binivex: {
    role: "Frontend & Platform Engineer",
    problem:
      "Retail traders juggle charts, news, and alerts across apps. Insight needs to be real-time and in one place.",
    architecture: [
      "Next.js + TypeScript app with strict typing across the data layer",
      "Finnhub API streaming live quotes and market data",
      "Google Gemini API generating contextual insights on price action",
      "Inngest event-driven workflows powering alerts and background jobs",
    ],
    highlights: [
      "Streaming quote UI stays responsive under rapid tick updates",
      "Durable, retryable background workflows via Inngest — no cron hacks",
      "AI insights cached and refreshed only on meaningful price movement",
    ],
    outcome: "A real-time analytics dashboard where live data, AI context, and alerting converge.",
  },
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
  const visible = PROJECTS.filter((p) => filter === "All" || p.category === filter);
  const active = open ? PROJECTS.find((p) => p.name === open) : null;
  const study = open ? CASE_STUDIES[open] : null;
  const ActiveIcon = open ? PROJECT_ICONS[open] : null;

  return (
    <section id="projects" data-testid="projects-section" className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <SectionFX variant="grid" />
      <SectionHeading index="02" eyebrow="Featured Work" title="Projects that ship" testId="projects-heading" />

      <FadeIn className="flex flex-wrap gap-2 mb-10">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            data-testid={`project-filter-${f.toLowerCase().replace(/[\/]/g, "-")}`}
            className={`font-code text-xs uppercase tracking-widest px-5 py-2.5 rounded-full border transition-all ${
              filter === f
                ? "bg-cyan-400 text-[#05070a] border-cyan-400 shadow-[0_0_20px_rgba(0,243,255,0.3)]"
                : "border-slate-700 text-slate-400 hover:border-cyan-400/40 hover:text-cyan-400"
            }`}
          >
            {f}
          </button>
        ))}
      </FadeIn>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => {
            const Icon = PROJECT_ICONS[p.name];
            return (
              <motion.article
                layout
                key={p.name}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                data-testid={`project-card-${p.name.toLowerCase()}`}
                className="glow-card glass rounded-2xl p-8 flex flex-col group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/15 to-emerald-400/15 border border-cyan-400/25 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </span>
                  <div className="flex gap-2">
                    <a
                      href={p.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} GitHub`}
                      data-testid={`project-github-${p.name.toLowerCase()}`}
                      className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                    >
                      <Github size={15} />
                    </a>
                    <a
                      href={p.live || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} live demo`}
                      data-testid={`project-live-${p.name.toLowerCase()}`}
                      className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-400/40 transition-all"
                    >
                      <ExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-semibold text-slate-50 tracking-tight">{p.name}</h3>
                <p className="font-code text-xs uppercase tracking-widest text-cyan-400/80 mt-1">{p.tagline}</p>
                <p className="text-sm text-slate-400 leading-relaxed mt-4 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {p.tags.map((t) => (
                    <span key={t} className="font-code text-[10px] px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700/50 text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setOpen(p.name)}
                  data-testid={`case-study-button-${p.name.toLowerCase()}`}
                  className="mt-6 self-start flex items-center gap-2 font-code text-xs uppercase tracking-widest text-cyan-400 hover:text-cyan-300 hover:gap-3 transition-all"
                >
                  <BookOpen size={14} /> Read case study
                </button>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent
          data-testid="case-study-modal"
          className="bg-[#0b0e14]/95 border border-cyan-400/20 text-slate-200 max-w-2xl backdrop-blur-xl max-h-[85vh] overflow-y-auto"
        >
          {active && study && (
            <div className="space-y-7">
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/15 to-emerald-400/15 border border-cyan-400/25 flex items-center justify-center text-cyan-400 shrink-0">
                    <ActiveIcon size={22} />
                  </span>
                  <div>
                    <DialogTitle className="font-display text-2xl text-slate-50 tracking-tight">{active.name}</DialogTitle>
                    <DialogDescription className="font-code text-xs uppercase tracking-widest text-cyan-400/80 mt-1">
                      {active.tagline} · {study.role}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              {active.image && (
                <div className="rounded-xl overflow-hidden border border-slate-800/60">
                  <img
                    src={active.image}
                    alt={`${active.name} product screenshot`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              <StudyBlock icon={Target} title="The problem">
                <p className="text-sm text-slate-300 leading-relaxed">{study.problem}</p>
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
