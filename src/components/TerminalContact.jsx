import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { Send, Loader2 } from "lucide-react";
import { LINKS } from "../data";
import { FadeIn, SectionHeading } from "./Shared";
import SectionFX from "./SectionFX";

const rawBackendUrl =
  (typeof process !== "undefined" && process.env && process.env.REACT_APP_BACKEND_URL) ||
  (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_BACKEND_URL) ||
  "";
const API = rawBackendUrl ? `${rawBackendUrl}/api` : "";

const COMMANDS = {
  help: () => ["Available commands:", "  whoami    — about me", "  skills    — tech stack", "  projects  — featured work", "  ratings   — CP stats", "  contact   — reach me", "  clear     — wipe terminal"],
  whoami: () => ["Saptarshi Upadhyay — Full-Stack Engineer & AI Systems Builder.", "IT Undergrad @ Jadavpur University, CGPA 9.09."],
  skills: () => ["C/C++ · Java · JS/TS · Python · SQL", "React · Next.js · Node · Express · MongoDB", "Docker · K8s · Git · NumPy · Pandas · AI/ML"],
  projects: () => ["greenlens  — carbon tracking microservices", "homequest  — rental marketplace", "binivex    — real-time stock analytics"],
  ratings: () => ["leetcode   1882  [KNIGHT]", "codeforces 1437  [SPECIALIST]"],
  contact: () => [`email    ${LINKS.email}`, `github   ${LINKS.github}`, `linkedin ${LINKS.linkedin}`],
};

const QUICK = ["whoami", "skills", "projects", "ratings", "contact"];

export default function TerminalContact() {
  const [lines, setLines] = useState([
    "saptarshi.dev — interactive shell v2.6",
    "Type 'help' or tap a chip below.",
  ]);
  const [input, setInput] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [lines]);

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    const out = COMMANDS[cmd] ? COMMANDS[cmd]() : [`command not found: ${cmd} — try 'help'`];
    setLines((l) => [...l, `guest@saptarshi:~$ ${cmd}`, ...out]);
  };

  const submitContact = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Fill in all fields before sending.");
      return;
    }
    setSending(true);
    try {
      if (API) {
        await axios.post(`${API}/contact`, form);
      } else {
        await new Promise((r) => setTimeout(r, 600));
      }
      toast.success(`Message sent, ${form.name.split(" ")[0]}. Saptarshi will get back to you.`);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(detail || `Couldn't send right now — email directly at ${LINKS.email}`);
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full glass rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 outline-none focus:border-cyan-400/50 transition-all";

  return (
    <section id="contact" data-testid="contact-section" className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
      <SectionFX variant="grid-glow" />
      <SectionHeading index="06" eyebrow="Contact" title="Open a channel" testId="contact-heading" />

      <div className="grid lg:grid-cols-2 gap-6">
        <FadeIn>
          <div className="glass rounded-2xl overflow-hidden glow-card" data-testid="terminal-widget">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-slate-800/70 bg-[#020408]">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
              <span className="font-code text-xs text-slate-500 ml-3">guest@saptarshi.dev — zsh</span>
            </div>
            <div ref={bodyRef} className="h-64 overflow-y-auto px-5 py-4 font-code text-[13px] leading-relaxed bg-[#020408]">
              {lines.map((l, i) => (
                <p key={i} className={l.startsWith("guest@") ? "text-cyan-400 mt-2" : "text-slate-400"}>
                  {l}
                </p>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                run(input);
                setInput("");
              }}
              className="flex items-center gap-2 px-5 py-3.5 border-t border-slate-800/70 bg-[#020408]"
            >
              <span className="font-code text-sm text-emerald-400 shrink-0">&#10095;</span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command..."
                data-testid="terminal-input"
                className="flex-1 bg-transparent font-code text-sm text-slate-200 placeholder:text-slate-700 outline-none"
              />
              <span className="caret-blink w-2 h-4 bg-cyan-400/70" />
            </form>
            <div className="flex flex-wrap gap-2 px-5 py-3 border-t border-slate-800/70 bg-[#05070c]">
              {QUICK.map((c) => (
                <button
                  key={c}
                  onClick={() => run(c)}
                  data-testid={`terminal-chip-${c}`}
                  className="font-code text-[11px] px-3 py-1.5 rounded-md border border-slate-700/70 text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <form onSubmit={submitContact} className="glass rounded-2xl p-8 glow-card h-full flex flex-col gap-4" data-testid="contact-form">
            <p className="font-code text-xs uppercase tracking-[0.25em] text-slate-500">
              // or send a direct message
            </p>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              data-testid="contact-name-input"
              className={field}
            />
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@company.com"
              data-testid="contact-email-input"
              className={field}
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Let's build something ambitious..."
              rows={5}
              data-testid="contact-message-input"
              className={`${field} resize-none flex-1`}
            />
            <button
              type="submit"
              disabled={sending}
              data-testid="contact-send-button"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-cyan-400 text-[#05070a] font-display font-semibold text-sm hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.35)] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {sending ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
