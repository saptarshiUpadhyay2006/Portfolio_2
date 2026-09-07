import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { LINKS } from "../data";
import { RevealLine } from "./Shared";

function useParticleCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf, w, h;
    const mouse = { x: -9999, y: -9999 };
    const N = 70;
    const pts = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * (canvas.offsetWidth || 1200),
        y: Math.random() * (canvas.offsetHeight || 800),
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      });
    }

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < 140 && d > 0) {
          p.vx += (dx / d) * 0.06;
          p.vy += (dy / d) * 0.06;
        }
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 243, 255, 0.55)";
        ctx.fill();
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0, 243, 255, ${0.12 * (1 - d / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [canvasRef]);
}

const SOCIALS = [
  { icon: Github, href: LINKS.github, label: "GitHub", testId: "hero-social-github" },
  { icon: Linkedin, href: LINKS.linkedin, label: "LinkedIn", testId: "hero-social-linkedin" },
  { icon: Mail, href: `mailto:${LINKS.email}`, label: "Email", testId: "hero-social-email" },
];

export default function Hero({ onOpenResume, liveStats }) {
  const canvasRef = useRef(null);
  useParticleCanvas(canvasRef);
  const { scrollY } = useScroll();
  const yContent = useTransform(scrollY, [0, 600], [0, 140]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const goProjects = (e) => {
    e.preventDefault();
    window.__lenis?.scrollTo("#projects", { offset: -72 });
  };

  const solvedLabel = liveStats?.leetcode?.solved || "1,000+";

  return (
    <section id="top" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="hero-grid-bg absolute inset-0" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none" />

      <motion.div style={{ y: yContent, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 w-full grid lg:grid-cols-[1.15fr_1fr] lg:items-center gap-12">
        <div>
        <RevealLine delay={0.35}>
          <span className="font-code text-xs sm:text-sm uppercase tracking-[0.35em] text-cyan-400">
            // Full-Stack Engineer &amp; AI Systems Builder
          </span>
        </RevealLine>

        <h1 className="font-display font-bold tracking-tight leading-[0.95] mt-6 text-5xl sm:text-7xl lg:text-8xl" data-testid="hero-name">
          <RevealLine delay={0.5}>
            <span className="text-slate-50">SAPTARSHI</span>
          </RevealLine>
          <RevealLine delay={0.65}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 text-glow-cyan">
              UPADHYAY
            </span>
          </RevealLine>
        </h1>

        <RevealLine delay={0.85} className="mt-8 max-w-2xl">
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed" data-testid="hero-tagline">
            IT Undergrad @ <span className="text-slate-200">Jadavpur University</span> · CGPA{" "}
            <span className="text-cyan-400 font-code">9.09</span> — LeetCode{" "}
            <span className="text-slate-200">Knight 1882</span> ({solvedLabel} Solved), Codeforces{" "}
            <span className="text-slate-200">Specialist</span>, and builder of production-grade
            software that ships and scales.
          </p>
        </RevealLine>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            onClick={goProjects}
            data-testid="hero-view-projects-button"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-400 text-[#05070a] font-display font-semibold text-sm tracking-wide hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(0,243,255,0.4)] transition-all"
          >
            View Projects
            <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <button
            onClick={onOpenResume}
            data-testid="hero-resume-button"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-700 text-slate-200 font-display font-semibold text-sm tracking-wide hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-[0_0_25px_rgba(0,243,255,0.15)] transition-all"
          >
            <FileDown size={16} /> Resume
          </button>
          <div className="flex items-center gap-2 ml-2">
            {SOCIALS.map(({ icon: Icon, href, label, testId }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-testid={testId}
                className="w-11 h-11 rounded-full glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:-translate-y-0.5 transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {[`LeetCode Knight · 1882 (${solvedLabel})`, "Codeforces Specialist · 1437", "CGPA 9.09"].map((b) => (
            <span
              key={b}
              className="font-code text-[11px] uppercase tracking-widest px-4 py-2 rounded-full glass text-slate-400"
            >
              {b}
            </span>
          ))}
        </motion.div>
        </div>
        <HeroCard liveStats={liveStats} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="font-code text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.div>
    </section>
  );
}

const TYPED_LINES = [
  "building ai-native systems",
  "solving problem #1003 on leetcode",
  "shipping lorros to production",
  "optimizing the last 5% of latency",
];

function useTypewriter() {
  const [text, setText] = useState("");
  useEffect(() => {
    let li = 0;
    let ci = 0;
    let deleting = false;
    let t;
    const step = () => {
      const line = TYPED_LINES[li];
      if (!deleting) {
        ci++;
        setText(line.slice(0, ci));
        if (ci === line.length) {
          deleting = true;
          t = setTimeout(step, 1700);
          return;
        }
        t = setTimeout(step, 55);
      } else {
        ci--;
        setText(line.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          li = (li + 1) % TYPED_LINES.length;
        }
        t = setTimeout(step, 26);
      }
    };
    t = setTimeout(step, 1200);
    return () => clearTimeout(t);
  }, []);
  return text;
}

const FloatChip = ({ children, className, delay = 0 }) => (
  <motion.span
    animate={{ y: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 4.5, delay, ease: "easeInOut" }}
    className={`absolute z-20 font-code text-[10px] uppercase tracking-widest px-3.5 py-1.5 rounded-full glass text-cyan-300 border-cyan-400/25 shadow-[0_0_20px_rgba(0,243,255,0.1)] ${className}`}
  >
    {children}
  </motion.span>
);

const StatBar = ({ label, value, pct, tone, delay }) => (
  <div>
    <div className="flex justify-between font-code text-[10px] uppercase tracking-widest">
      <span className="text-slate-500">{label}</span>
      <span className={tone === "cyan" ? "text-cyan-400" : "text-emerald-400"}>{value}</span>
    </div>
    <div className="h-1 mt-1.5 rounded-full bg-slate-800 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: pct }}
        transition={{ delay, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className={`h-full rounded-full ${tone === "cyan" ? "bg-cyan-400" : "bg-emerald-400"}`}
      />
    </div>
  </div>
);

function HeroCard({ liveStats }) {
  const typed = useTypewriter();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 7, y: px * 7 });
  };

  const lcSolved = liveStats?.leetcode?.solved || "1,000+";
  const isLive = liveStats?.leetcode?.isLive;

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:block relative"
      style={{ perspective: 1200 }}
    >
      <div className="absolute -inset-10 bg-cyan-400/[0.07] blur-[90px] rounded-full pointer-events-none" />

      <div
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        data-testid="hero-profile-card"
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.18s ease-out",
          transformStyle: "preserve-3d",
        }}
        className="relative glass rounded-3xl p-7 border-cyan-400/15 shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center gap-2 pb-5 border-b border-slate-800/70">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="font-code text-[11px] text-slate-500 ml-2">saptarshi.config</span>
          <span className="ml-auto flex items-center gap-1.5 font-code text-[10px] text-emerald-400">
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-emerald-400" /> {isLive ? "live api sync" : "online"}
          </span>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 p-[2px] shadow-[0_0_25px_rgba(0,243,255,0.25)] shrink-0 group">
            <img
              src="/avatar.jpg"
              alt="Saptarshi Upadhyay"
              className="w-full h-full rounded-2xl object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://github.com/saptarshiUpadhyay2006.png";
              }}
            />
            <span className="status-dot absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0b0e14]" />
          </div>
          <div>
            <p className="font-display font-semibold text-slate-50 leading-tight">Saptarshi Upadhyay</p>
            <p className="font-code text-[11px] text-cyan-400 mt-0.5">full-stack · ai systems</p>
            <p className="font-code text-[10px] text-slate-500 mt-0.5">kolkata, in · utc+5:30</p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-[#020408] border border-slate-800/70 px-4 py-3 font-code text-[13px]">
          <span className="text-emerald-400">$ ~ </span>
          <span className="text-slate-300">{typed}</span>
          <span className="caret-blink inline-block w-2 h-3.5 bg-cyan-400/80 align-middle ml-0.5" />
        </div>

        <div className="mt-6 space-y-4">
          <StatBar label={`LeetCode · ${lcSolved} Solved`} value="1882" pct="94%" tone="cyan" delay={1.5} />
          <StatBar label="Codeforces · Specialist" value="1437" pct="72%" tone="emerald" delay={1.7} />
          <StatBar label="CGPA @ Jadavpur" value="9.09" pct="91%" tone="cyan" delay={1.9} />
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between font-code text-[10px] text-slate-500">
          <span>
            status: <span className="text-emerald-400">open_to_work</span>
          </span>
          <span>
            uptime: <span className="text-cyan-400">3 release cycles</span>
          </span>
        </div>
      </div>

      <FloatChip className="-left-7 top-14" delay={0.4}>React</FloatChip>
      <FloatChip className="-right-5 top-1/3" delay={1.2}>Python</FloatChip>
      <FloatChip className="-left-5 bottom-24" delay={2}>Docker</FloatChip>
      <FloatChip className="-right-7 bottom-8" delay={0.8}>AI / ML</FloatChip>
    </motion.div>
  );
}
