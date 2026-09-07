import { useState } from "react";
import { Search } from "lucide-react";
import { SKILLS } from "../data";
import { FadeIn, SectionHeading } from "./Shared";
import SectionFX from "./SectionFX";

export default function Skills() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  return (
    <section id="skills" data-testid="skills-section" className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <SectionFX variant="dots-glow" />
      <SectionHeading index="04" eyebrow="Arsenal" title="Technical skills matrix" testId="skills-heading" />

      <FadeIn className="mb-10 max-w-md">
        <div className="relative">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the matrix — try 'docker' or 'c++'"
            data-testid="skills-search-input"
            className="w-full glass rounded-full pl-11 pr-5 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-cyan-400/50 focus:shadow-[0_0_20px_rgba(0,243,255,0.1)] transition-all"
          />
        </div>
      </FadeIn>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((pillar, i) => {
          const items = pillar.items.filter((s) => !q || s.toLowerCase().includes(q));
          if (q && items.length === 0) return null;
          return (
            <FadeIn key={pillar.pillar} delay={i * 0.08} className={i === 0 ? "lg:row-span-2" : ""}>
              <div className="glow-card glass rounded-2xl p-7 h-full" data-testid={`skills-pillar-${pillar.pillar.toLowerCase().replace(/[^a-z]/g, "-")}`}>
                <p className="font-code text-[10px] uppercase tracking-[0.25em] text-cyan-400 mb-5">
                  {String(i + 1).padStart(2, "0")} / {pillar.pillar}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      data-testid={`skill-tag-${s.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                      className={`font-code text-xs px-3.5 py-2 rounded-lg border transition-all hover:-translate-y-0.5 ${
                        q && s.toLowerCase().includes(q)
                          ? "bg-cyan-400/15 border-cyan-400/50 text-cyan-300 shadow-[0_0_15px_rgba(0,243,255,0.15)]"
                          : "bg-slate-800/50 border-slate-700/50 text-slate-300 hover:border-cyan-400/30 hover:text-cyan-300"
                      }`} moving-bandage
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
