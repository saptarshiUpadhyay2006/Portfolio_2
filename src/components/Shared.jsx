import { motion } from "framer-motion";

export const RevealLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const FadeIn = ({ children, delay = 0, className = "", y = 32 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ index, eyebrow, title, testId }) => (
  <FadeIn className="mb-14">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-code text-xs text-cyan-400 tracking-[0.3em]">{index}</span>
      <span className="h-px w-12 bg-cyan-400/40" />
      <span className="font-code text-xs uppercase tracking-[0.3em] text-slate-500">{eyebrow}</span>
    </div>
    <h2
      data-testid={testId}
      className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-50"
    >
      {title}
    </h2>
  </FadeIn>
);
