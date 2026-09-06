import { Users } from "lucide-react";
import { LEADERSHIP } from "../data";
import { FadeIn, SectionHeading } from "./Shared";
import SectionFX from "./SectionFX";

export default function Leadership() {
  return (
    <section id="leadership" data-testid="leadership-section" className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <SectionFX variant="beam" />
      <SectionHeading index="05" eyebrow="Leadership" title="Building for communities" testId="leadership-heading" />

      <div className="grid md:grid-cols-2 gap-6">
        {LEADERSHIP.map((l, i) => (
          <FadeIn key={l.org} delay={i * 0.12}>
            <div className="glow-card glass rounded-2xl p-8 lg:p-10 h-full relative overflow-hidden group" data-testid={`leadership-card-${i}`}>
              <span className="absolute -bottom-8 -right-4 font-display text-[120px] font-bold text-slate-800/30 leading-none select-none group-hover:text-cyan-400/10 transition-colors">
                {l.metric}
              </span>
              <span className="w-11 h-11 rounded-xl bg-emerald-400/10 border border-emerald-400/25 flex items-center justify-center text-emerald-400">
                <Users size={19} />
              </span>
              <h3 className="font-display text-xl font-semibold text-slate-50 mt-5 tracking-tight">{l.org}</h3>
              <p className="font-code text-xs uppercase tracking-widest text-cyan-400 mt-1">{l.role}</p>
              <p className="text-sm text-slate-400 leading-relaxed mt-4 relative z-10">{l.impact}</p>
              <p className="mt-6 font-code text-xs text-slate-500">
                <span className="text-emerald-400 text-lg font-bold">{l.metric}</span> {l.metricLabel}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
