import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import type { CertificationItem } from '../data/portfolio';
import { ExternalLink, ShieldCheck, CheckCircle2, Clock, Eye, X, FileText } from 'lucide-react';

export function CertificationsSection() {
  const { certifications } = portfolioData;
  const [activeCertificate, setActiveCertificate] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-20 md:py-28 bg-[#08090C] text-[#F3F3F5] border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Grid from Reference */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag bg-white/5 border border-white/10 text-[#C5A059]">
              <span>✦</span>
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              CERTIFICATIONS & <span className="text-[#C5A059]">BADGES</span>
            </h2>
            <p className="text-sm text-[#95949C] max-w-2xl leading-relaxed">
              Official credentials from IBM SkillsBuild, Google Cloud, TCS iON, Infosys Springboard, Best Computer Technology (100% Score), and Nasscom.
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="flex flex-col justify-between rounded-3xl bg-[#0F1015] border border-white/10 p-6 sm:p-7 hover:border-[#C5A059]/40 transition-all duration-300 shadow-lg group"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <span className="font-mono-tag text-xs font-bold text-[#E5C882] truncate">
                    0{index + 1} / {cert.issuer}
                  </span>
                  {cert.verification.status === 'verified' ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono-tag px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      Verified
                    </span>
                  ) : cert.verification.status === 'confirmed_by_records' ? (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono-tag px-2.5 py-0.5 rounded-full bg-blue-950/40 text-blue-300 border border-blue-900">
                      <CheckCircle2 className="w-3 h-3 text-blue-400" />
                      Recorded
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono-tag px-2.5 py-0.5 rounded-full bg-amber-950/40 text-amber-300 border border-amber-900">
                      <Clock className="w-3 h-3 text-amber-400" />
                      Pending ID
                    </span>
                  )}
                </div>

                {/* Certificate Thumbnail or Document Icon */}
                {cert.imagePath ? (
                  <div
                    onClick={() => setActiveCertificate(cert)}
                    className="mt-4 aspect-16/10 rounded-2xl overflow-hidden border border-white/10 bg-black/50 relative group/thumb cursor-pointer"
                  >
                    <img
                      src={cert.imagePath}
                      alt={cert.title}
                      className="w-full h-full object-contain p-2 group-hover/thumb:scale-105 transition-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center text-white text-xs font-mono-tag font-semibold gap-1.5 transition-opacity">
                      <Eye className="w-4 h-4 text-[#C5A059]" />
                      <span>INSPECT CREDENTIAL</span>
                    </div>
                  </div>
                ) : cert.pdfPath ? (
                  <div
                    onClick={() => setActiveCertificate(cert)}
                    className="mt-4 aspect-16/10 rounded-2xl overflow-hidden border border-white/10 bg-black/40 flex flex-col items-center justify-center p-4 relative group/thumb cursor-pointer"
                  >
                    <FileText className="w-10 h-10 text-[#C5A059] mb-1 group-hover/thumb:scale-110 transition-transform" />
                    <span className="text-xs font-mono-tag font-semibold text-white">VIEW OFFICIAL PDF</span>
                    <span className="text-[10px] font-mono-tag text-[#7C7B84]">Click to preview document</span>
                  </div>
                ) : null}

                {/* Title */}
                <h3 className="mt-4 font-display text-xl sm:text-2xl uppercase tracking-tight text-white leading-snug group-hover:text-[#E5C882] transition-colors">
                  {cert.title}
                </h3>

                {/* Issue Date & Credential ID */}
                <div className="mt-2 space-y-1 text-xs font-mono-tag text-[#95949C]">
                  <div>Issued: <span className="text-white font-medium">{cert.issueDate}</span></div>
                  {cert.credentialId && (
                    <div className="text-[#C5A059] text-[11px] truncate">
                      {cert.credentialId.startsWith('ID:') || cert.credentialId.startsWith('No.') ? cert.credentialId : `ID: ${cert.credentialId}`}
                    </div>
                  )}
                </div>

                {/* Topics Covered */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <span className="text-[10px] font-mono-tag text-[#7C7B84] uppercase tracking-wider block mb-1.5">
                    Topics & Highlights
                  </span>
                  <ul className="space-y-1 text-xs text-[#95949C]">
                    {cert.topicsCovered.slice(0, 3).map((topic, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#C5A059]">✦</span>
                        <span className="line-clamp-1">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                {cert.imagePath || cert.pdfPath ? (
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono-tag font-semibold text-[#E5C882] hover:underline cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{cert.pdfPath ? 'PREVIEW PDF' : 'INSPECT'}</span>
                  </button>
                ) : (
                  <span className="text-[11px] font-mono-tag text-[#7C7B84] italic">
                    Verified ID
                  </span>
                )}

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono-tag text-[#95949C] hover:text-white"
                  >
                    <span>Verify Link</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal (Image or PDF) */}
      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0F1015] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-white">
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono-tag text-[#C5A059]">
                  {activeCertificate.issuer}
                </span>
                <h4 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white mt-1">
                  {activeCertificate.title}
                </h4>
                {activeCertificate.credentialId && (
                  <p className="font-mono-tag text-xs text-[#95949C] mt-1">
                    {activeCertificate.credentialId}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="p-1.5 rounded-full border border-white/10 text-white/60 hover:text-white cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-black flex justify-center p-2">
              {activeCertificate.imagePath ? (
                <img
                  src={activeCertificate.imagePath}
                  alt={activeCertificate.title}
                  className="max-w-full max-h-[60vh] object-contain rounded-xl"
                />
              ) : activeCertificate.pdfPath ? (
                <iframe
                  src={`${activeCertificate.pdfPath}#toolbar=1`}
                  title={activeCertificate.title}
                  className="w-full h-[60vh] rounded-xl border-none"
                />
              ) : null}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              {activeCertificate.verificationUrl ? (
                <a
                  href={activeCertificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tag font-semibold text-[#E5C882] hover:underline"
                >
                  <span>OPEN VERIFICATION AUTHORITY</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : activeCertificate.pdfPath ? (
                <a
                  href={activeCertificate.pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-tag font-semibold text-[#E5C882] hover:underline"
                >
                  <span>OPEN IN NEW TAB</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs font-mono-tag text-[#95949C]">
                  Official credential record
                </span>
              )}

              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="px-5 py-2 rounded-full text-xs font-mono-tag font-bold bg-[#C5A059] text-black hover:bg-[#E5C882] cursor-pointer"
              >
                DONE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
