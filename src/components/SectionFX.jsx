import { useEffect, useRef } from "react";

const TINTS = {
  cyan: ["0, 243, 255"],
  emerald: ["16, 185, 129"],
  mixed: ["0, 243, 255", "16, 185, 129"],
};

function ParticleField({ tint = "mixed" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const colors = TINTS[tint] || TINTS.mixed;
    let raf;
    let running = false;
    let w = 0;
    let h = 0;
    const N = 26;
    const pts = [];

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < N; i++) {
      pts.push({
        x: Math.random() * 1600,
        y: Math.random() * 900,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        c: colors[i % colors.length],
      });
    }

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.c}, 0.5)`;
        ctx.fill();
      }
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = pts[i];
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 115) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${a.c}, ${0.1 * (1 - d / 115)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting;
        if (running) raf = requestAnimationFrame(tick);
        else cancelAnimationFrame(raf);
      },
      { threshold: 0.03 }
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [tint]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" />;
}

const Orb = ({ className, anim = "orb-drift" }) => (
  <div className={`absolute rounded-full blur-[130px] ${anim} ${className}`} />
);

const Stars = ({ variant = "a" }) => (
  <div className={`absolute inset-0 ${variant === "a" ? "section-stars" : "section-stars section-stars-b"}`} />
);

export default function SectionFX({ variant = "orbs" }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {variant === "grid" && (
        <>
          <ParticleField tint="cyan" />
          <Stars />
          <Orb className="w-[400px] h-[400px] -top-24 right-10 bg-cyan-500/[0.08]" />
        </>
      )}
      {variant === "dots" && (
        <>
          <ParticleField tint="emerald" />
          <Stars variant="b" />
          <Orb className="w-[380px] h-[380px] -bottom-20 left-10 bg-emerald-500/[0.07]" />
        </>
      )}
      {variant === "orbs" && (
        <>
          <Orb className="w-[440px] h-[440px] -top-32 -left-24 bg-cyan-500/[0.09]" />
          <Orb anim="orb-drift-rev" className="w-[400px] h-[400px] -bottom-24 -right-16 bg-emerald-500/[0.06]" />
          <ParticleField tint="mixed" />
          <Stars />
        </>
      )}
      {variant === "orbs-emerald" && (
        <>
          <Orb className="w-[440px] h-[440px] -top-32 -right-24 bg-emerald-500/[0.1]" />
          <Orb anim="orb-drift-rev" className="w-[400px] h-[400px] -bottom-24 -left-16 bg-cyan-500/[0.06]" />
          <ParticleField tint="emerald" />
          <Stars variant="b" />
        </>
      )}
      {variant === "beam" && (
        <>
          <Orb className="w-[420px] h-[420px] -top-20 right-10 bg-cyan-500/[0.08]" />
          <ParticleField tint="cyan" />
          <Stars />
        </>
      )}
      {variant === "grid-glow" && (
        <>
          <Orb className="w-[520px] h-[520px] -top-40 left-1/3 bg-emerald-500/[0.08]" />
          <Orb anim="orb-drift-rev" className="w-[380px] h-[380px] -bottom-24 right-10 bg-cyan-500/[0.06]" />
          <ParticleField tint="mixed" />
          <Stars variant="b" />
        </>
      )}
      {variant === "dots-glow" && (
        <>
          <Orb className="w-[440px] h-[440px] -bottom-32 left-1/4 bg-cyan-500/[0.08]" />
          <ParticleField tint="cyan" />
          <Stars />
        </>
      )}
    </div>
  );
}
