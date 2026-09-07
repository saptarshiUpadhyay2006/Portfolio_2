import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Trophy, GraduationCap, Medal } from "lucide-react";
import { CP_STATS, RATING_HISTORY, HACKATHONS } from "../data";
import { FadeIn, SectionHeading } from "./Shared";
import SectionFX from "./SectionFX";

const rawBackendUrl =
  (typeof process !== "undefined" && process.env && process.env.REACT_APP_BACKEND_URL) ||
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_BACKEND_URL) ||
  "";
const API = rawBackendUrl ? `${rawBackendUrl}/api` : "";

const Counter = ({ to, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
};

const ChartTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const entry = RATING_HISTORY.find((r) => r.contest === label);
  return (
    <div className="glass rounded-xl px-5 py-4 font-code text-xs space-y-2 min-w-[180px]">
      {entry?.name && (
        <p className="text-slate-200 font-semibold text-[13px]">{entry.name}</p>
      )}
      {entry?.date && (
        <p className="text-slate-500 text-[10px] uppercase tracking-widest">{entry.date}</p>
      )}
      {payload.map((p) => (
        <p key={p.dataKey} style={{ color: p.color }}>
          {p.dataKey}: <span className="font-semibold">{p.value}</span>
        </p>
      ))}
      {entry?.rank && (
        <p className="text-slate-400 pt-1 border-t border-slate-700/60">
          Rank: <span className="text-slate-200">{entry.rank}</span>
          {entry.solved != null && <> · Solved: <span className="text-emerald-400">{entry.solved}</span></>}
        </p>
      )}
    </div>
  );
};

const LiveBadge = ({ show }) =>
  show ? (
    <span className="inline-flex items-center gap-1.5 font-code text-[9px] uppercase tracking-widest text-emerald-400 border border-emerald-400/30 rounded-full px-2 py-0.5 ml-2 align-middle">
      <span className="status-dot w-1 h-1 rounded-full bg-emerald-400" /> live
    </span>
  ) : null;

const cap = (s) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : s);

export default function Achievements({ liveStats }) {
  const [lc, setLc] = useState(null);
  const [cf, setCf] = useState(null);

  useEffect(() => {
    if (!API) return;
    axios.get(`${API}/cp/leetcode`).then((r) => setLc(r.data)).catch(() => {});
    axios.get(`${API}/cp/codeforces`).then((r) => setCf(r.data)).catch(() => {});
  }, []);

  const isLiveActive = !!lc || !!liveStats?.leetcode?.isLive;
  const lcRating = lc?.rating ? Math.round(lc.rating) : (liveStats?.leetcode?.rating || CP_STATS.leetcode.rating);
  const lcTop = lc?.topPercentage ? `Top ${Math.max(1, Math.round(lc.topPercentage))}%` : (liveStats?.leetcode?.rank || CP_STATS.leetcode.top);
  const lcSolved = lc?.solved?.All ? `${lc.solved.All.toLocaleString()}+` : (liveStats?.leetcode?.solved || CP_STATS.leetcode.solved);
  const cfRating = cf?.maxRating ?? CP_STATS.codeforces.rating;
  const cfRank = cf?.maxRank ? cap(cf.maxRank) : CP_STATS.codeforces.label;
  const cfNote = cf?.rating && cf.rating !== cf.maxRating ? `current ${cf.rating} · ` : "";

  return (
    <section id="achievements" data-testid="achievements-section" className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <SectionFX variant="orbs" />
      <SectionHeading index="03" eyebrow="Competitive Programming" title="Proof of work" testId="achievements-heading" />

      <div className="grid lg:grid-cols-5 gap-6 mb-6">
        <FadeIn className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
            <div className="glow-card glass rounded-2xl p-6 sm:p-7" data-testid="leetcode-stat-card">
              <p className="font-code text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-3">
                LeetCode<LiveBadge show={isLiveActive} />
              </p>
              <p className="font-display text-3xl sm:text-4xl font-bold text-cyan-400" data-testid="leetcode-rating">
                <Counter to={lcRating} />
              </p>
              <p className="text-sm text-slate-300 mt-1">{CP_STATS.leetcode.label} · {lcTop}</p>
              <p className="font-code text-xs text-slate-500 mt-3" data-testid="leetcode-solved">{lcSolved} problems solved</p>
            </div>
            <div className="glow-card glass rounded-2xl p-6 sm:p-7" data-testid="codeforces-stat-card">
              <p className="font-code text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-3">
                Codeforces<LiveBadge show={!!cf} />
              </p>
              <p className="font-display text-3xl sm:text-4xl font-bold text-emerald-400" data-testid="codeforces-rating">
                <Counter to={cfRating} />
              </p>
              <p className="text-sm text-slate-300 mt-1">{cfRank}</p>
              <p className="font-code text-xs text-slate-500 mt-3" data-testid="codeforces-solved">{cfNote}{CP_STATS.codeforces.solved} problems solved</p>
            </div>
            <div className="glow-card glass rounded-2xl p-6 sm:p-7 sm:col-span-2 flex items-center gap-5" data-testid="cgpa-stat-card">
              <span className="w-12 h-12 rounded-xl bg-emerald-400/10 border border-emerald-400/25 flex items-center justify-center text-emerald-400 shrink-0">
                <GraduationCap size={22} />
              </span>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-slate-50">
                  <Counter to={9.09} decimals={2} />
                </p>
                <p className="text-sm text-slate-400">CGPA · IT, Jadavpur University</p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="lg:col-span-3">
          <div className="glow-card glass rounded-2xl p-7 h-full" data-testid="rating-chart-card">
            <p className="font-code text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-4">
              Rating progression · contest history
            </p>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={RATING_HISTORY} margin={{ top: 4, right: 8, bottom: 0, left: -18 }}>
                  <XAxis dataKey="contest" stroke="#334155" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} />
                  <YAxis stroke="#334155" tick={{ fill: "#64748b", fontSize: 11 }} axisLine={false} tickLine={false} domain={[1000, 2000]} />
                  <Tooltip content={<ChartTooltip />} cursor={{ stroke: "rgba(0,243,255,0.2)" }} />
                  <Line type="monotone" dataKey="leetcode" stroke="#00f3ff" strokeWidth={2.5} dot={{ r: 3, fill: "#00f3ff" }} activeDot={{ r: 5 }} />
                  <Line type="monotone" dataKey="codeforces" stroke="#10b981" strokeWidth={2.5} dot={{ r: 3, fill: "#10b981" }} activeDot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {HACKATHONS.map((h, i) => (
          <FadeIn key={h.name} delay={i * 0.1}>
            <div className="glow-card glass rounded-2xl p-7 flex items-start gap-4" data-testid={`hackathon-card-${i}`}>
              <span className="w-10 h-10 rounded-lg bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center text-cyan-400 shrink-0">
                {i === 0 ? <Trophy size={17} /> : <Medal size={17} />}
              </span>
              <div>
                <h3 className="font-display font-semibold text-slate-100">{h.name}</h3>
                <p className="text-sm text-emerald-400 mt-0.5">{h.detail}</p>
                <p className="font-code text-xs text-slate-500 mt-1">{h.venue}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
