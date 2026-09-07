import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, FileText, Loader2, Sparkles } from "lucide-react";
import { LINKS } from "../data";

export default function ResumeModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(true);
  const embedUrl = "https://drive.google.com/file/d/1_foUjalODzHxTdmsjr9ypM7pz_D_58wH/preview";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1_foUjalODzHxTdmsjr9ypM7pz_D_58wH";

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* Glass Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030712]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl h-[85vh] flex flex-col rounded-2xl glass border border-slate-800 shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden"
          data-testid="resume-modal"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#020408]/90 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <FileText size={16} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-semibold text-slate-100 text-sm sm:text-base">
                    Saptarshi_Upadhyay_Resume.pdf
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 font-code text-[10px] text-emerald-400">
                    <Sparkles size={10} /> Live Document
                  </span>
                </div>
                <p className="font-code text-[11px] text-slate-500">Updated March 2026 · Software Engineer Intern @ Aarish AI</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
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

          {/* Modal Content / Iframe */}
          <div className="relative flex-1 bg-[#090d16] w-full h-full overflow-hidden">
            {loading && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-slate-400">
                <Loader2 size={24} className="animate-spin text-cyan-400" />
                <span className="font-code text-xs">Loading Resume Document...</span>
              </div>
            )}
            <iframe
              src={embedUrl}
              title="Saptarshi Upadhyay Resume"
              className="w-full h-full border-0"
              onLoad={() => setLoading(false)}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
