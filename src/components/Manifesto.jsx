import { MANIFESTO } from "../data";
import { FadeIn } from "./Shared";
import SectionFX from "./SectionFX";

export default function Manifesto() {
  return (
    <section data-testid="manifesto-section" className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28">
      <SectionFX variant="dots" />
      <div className="grid md:grid-cols-3 gap-6">
        {MANIFESTO.map((ch, i) => (
          <FadeIn key={ch.num} delay={i * 0.12}>
            <div
              data-testid={`manifesto-chapter-${ch.num}`}
              className="glow-card glass rounded-2xl p-8 h-full group"
            >
              <span className="font-code text-4xl font-bold text-cyan-400/20 group-hover:text-cyan-400/50 transition-colors">
                {ch.num}
              </span>
              <h3 className="font-display text-xl font-semibold text-slate-100 mt-4 tracking-tight">
                {ch.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mt-3">{ch.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
