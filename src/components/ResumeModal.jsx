import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, FileText, Loader2, Sparkles } from "lucide-react";
import { LINKS } from "../data";

export default function ResumeModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(true);

  // Direct Drive Embed preview link + fallback to local PDF
  const driveEmbedUrl = "https://drive.google.com/file/d/1_foUjalODzHxTdmsjr9ypM7pz_D_58wH/preview";
  const downloadUrl = "/resume.pdf";

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030712]/85 backdrop-blur-md"
        />

        {/* Modal Window Container with explicit height */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl h-[85vh] min-h-[600px] flex flex-col rounded-2xl glass border border-slate-800 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden bg-[#070b14]"
          data-testid="resume-modal"
        >
          {/* Modal Header Bar - fixed 60px height */}
          <div className="h-[60px] flex items-center justify-between px-5 border-b border-slate-800/80 bg-[#020408] shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <FileText size={16} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-semibold text-slate-100 text-xs sm:text-sm">
                    Saptarshi_Upadhyay_Resume.pdf
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 font-code text-[10px] text-emerald-400">
                    <Sparkles size={10} /> Live PDF
                  </span>
                </div>
                <p className="font-code text-[10px] sm:text-[11px] text-slate-500">
                  IT Undergrad @ Jadavpur University · CGPA 9.09
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={downloadUrl}
                download="Saptarshi_Upadhyay_Resume.pdf"
                data-testid="resume-modal-download"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-cyan-400/50 font-code text-xs text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all"
              >
                <Download size={13} />
                <span className="hidden sm:inline">Download</span>
              </a>
              <a
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="resume-modal-drive"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-cyan-400/50 font-code text-xs text-slate-300 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all"
              >
                <ExternalLink size={13} />
                <span className="hidden sm:inline">Drive Tab</span>
              </a>
              <button
                onClick={onClose}
                data-testid="resume-modal-close"
                className="w-8 h-8 rounded-lg border border-slate-800 flex items-center justify-center text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-colors ml-1"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Modal Body Container with ABSOLUTE INSET positioning for iframe */}
          <div className="relative flex-1 w-full h-[calc(100%-60px)] min-h-[540px] bg-[#050810] overflow-hidden">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400 bg-[#050810] z-20">
                <Loader2 size={26} className="animate-spin text-cyan-400" />
                <span className="font-code text-xs">Loading Resume Viewer...</span>
              </div>
            )}
            <iframe
              src={driveEmbedUrl}
              title="Saptarshi Upadhyay Resume"
              className="absolute inset-0 w-full h-full border-0 block"
              onLoad={() => setLoading(false)}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
