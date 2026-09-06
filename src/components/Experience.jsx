import { Briefcase, TrendingUp, ShieldCheck, Rocket } from "lucide-react";
import { EXPERIENCE } from "../data";
import { FadeIn, SectionHeading } from "./Shared";
import SectionFX from "./SectionFX";

const ICONS = [Rocket, TrendingUp, ShieldCheck];

export default function Experience() {
  return (
    <section id="experience" data-testid="experience-section" className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <SectionFX variant="orbs-emerald" />
      <SectionHeading index="01" eyebrow="Experience" title="Where I've shipped" testId="experience-heading" />

      <FadeIn>
        <div className="glow-card glass rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center text-cyan-400">
                  <Briefcase size={18} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-slate-50 tracking-tight" data-testid="experience-role">
                    {EXPERIENCE.role}
                  </h3>
                  <p className="text-cyan-400 font-code text-sm mt-0.5">{EXPERIENCE.company}</p>
                </div>
              </div>
            </div>
            <span className="font-code text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-emerald-400/30 text-emerald-400" data-testid="experience-period">
              {EXPERIENCE.period}
            </span>
          </div>

          <p className="font-code text-xs uppercase tracking-[0.25em] text-slate-500 mt-6 mb-6" data-testid="experience-project">
            {EXPERIENCE.project}
          </p>

          <div className="space-y-5">
            {EXPERIENCE.bullets.map((b, i) => {
              const Icon = ICONS[i];
              return (
                <FadeIn key={i} delay={0.1 + i * 0.1}>
                  <div className="flex gap-4 items-start" data-testid={`experience-bullet-${i}`}>
                    <span className="mt-0.5 w-8 h-8 shrink-0 rounded-md bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-emerald-400">
                      <Icon size={14} />
                    </span>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{b}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-slate-800/60">
            {EXPERIENCE.tags.map((t) => (
              <span key={t} className="font-code text-[11px] px-3 py-1.5 rounded-md bg-slate-800/50 border border-slate-700/50 text-slate-400">
                {t}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
