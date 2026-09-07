import { useEffect, useState } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Leadership from "./components/Leadership";
import TerminalContact from "./components/TerminalContact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";
import { useLiveStats } from "./lib/useLiveStats";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const liveStats = useLiveStats();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-200 antialiased">
      <div className="grain" />
      <Navbar onOpenResume={handleOpenResume} />
      <main>
        <Hero onOpenResume={handleOpenResume} liveStats={liveStats} />
        <Marquee />
        <Manifesto />
        <Experience />
        <Projects />
        <Achievements liveStats={liveStats} />
        <Skills />
        <Leadership />
        <TerminalContact />
      </main>
      <Footer onOpenResume={handleOpenResume} />
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(15, 20, 30, 0.9)",
            border: "1px solid rgba(0, 243, 255, 0.25)",
            color: "#f8fafc",
            backdropFilter: "blur(12px)",
          },
        }}
      />
    </div>
  );
}
