import { portfolioData } from '../data/portfolio';
import { X, Download, ExternalLink, FileText, ShieldCheck } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { personal } = portfolioData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#0F1015] border border-white/15 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C5A059]/10 text-[#E5C882] flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl uppercase tracking-tight text-white">
                Preetom Saha — Official Resume
              </h3>
              <p className="text-xs font-mono-tag text-[#95949C]">
                B.Tech 2nd Year · Narula Institute of Technology (2025 – 2029)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personal.resumePdfUrl}
              download="Preetom_Saha_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-tag font-bold bg-[#C5A059] text-black hover:bg-[#E5C882] transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content: PDF Iframe + Quick Metadata */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* Summary Banner */}
          <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tag">
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified PDF Resume (Authentic Document)</span>
            </div>
            <a
              href={personal.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#E5C882] hover:underline"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* PDF Viewer Frame */}
          <div className="w-full h-[62vh] rounded-2xl overflow-hidden border border-white/10 bg-black">
            <iframe
              src={`${personal.resumePdfUrl}#toolbar=1&navpanes=0`}
              title="Preetom Saha Resume PDF"
              className="w-full h-full border-none"
            />
          </div>

          {/* Quick Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-tag pt-1">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[#7C7B84] block text-[10px] uppercase">INSTITUTION</span>
              <span className="font-semibold text-white">Narula Institute of Technology</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[#7C7B84] block text-[10px] uppercase">CONTACT EMAIL</span>
              <span className="font-semibold text-white break-all">{personal.email}</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-[#7C7B84] block text-[10px] uppercase">PHONE</span>
              <span className="font-semibold text-white">{personal.phone}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
