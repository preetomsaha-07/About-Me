import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Calendar, MapPin, ShieldCheck, FileCheck, X } from 'lucide-react';

export function ExperienceSection() {
  const { experience } = portfolioData;
  const [activeDoc, setActiveDoc] = useState<string | null>(null);

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#08090C] text-[#F3F3F5] border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Grid from Reference */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag bg-white/5 border border-white/10 text-[#C5A059]">
              <span>✦</span>
              <span>PRACTICAL WORK</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              INTERNSHIPS & <span className="text-[#C5A059]">EXPERIENCE</span>
            </h2>
            <p className="text-sm text-[#95949C] max-w-2xl leading-relaxed">
              Verified virtual internships and industry assignments in Data Science, AI foundations, and Cloud technologies.
            </p>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experience.map((item, index) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-3xl bg-[#0F1015] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-300 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-4 border-b border-white/10">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono-tag text-xs text-[#C5A059] font-bold">
                      0{index + 1} /
                    </span>
                    <span className="text-[11px] font-mono-tag px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-white">
                      {item.type}
                    </span>
                    {item.verification.status === 'verified' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono-tag px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800">
                        <ShieldCheck className="w-3 h-3 text-emerald-400" />
                        Verified Offer Letter
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono-tag px-2.5 py-0.5 rounded-full bg-blue-950/40 text-blue-300 border border-blue-900">
                        Confirmed Record
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white pt-1">
                    {item.role}
                  </h3>
                  <div className="text-sm font-mono-tag font-semibold text-[#E5C882]">
                    {item.organization}
                  </div>
                </div>

                {/* Period & Location */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-1.5 text-xs font-mono-tag text-[#95949C] shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="text-white font-medium">{item.period}</span>
                    {item.duration && <span>({item.duration})</span>}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7C7B84]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Reference ID Pill if available */}
              {item.referenceId && (
                <div className="mt-4 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-mono-tag text-[#95949C]">
                  {item.referenceId}
                </div>
              )}

              {/* Summary */}
              <p className="mt-4 text-xs sm:text-sm text-[#AEADB6] leading-relaxed">
                {item.summary}
              </p>

              {/* Responsibilities */}
              <div className="mt-4 space-y-1.5">
                <span className="text-xs font-mono-tag text-white uppercase tracking-wider block">
                  Responsibilities & Outcomes
                </span>
                <ul className="space-y-1.5 text-xs text-[#95949C]">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C5A059]">✦</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Footer + Document View */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono-tag text-[#7C7B84] mr-1">STACK:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono-tag bg-white/5 text-[#E6E6EA] border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {item.hasDocument && item.documentPath && (
                  <button
                    type="button"
                    onClick={() => setActiveDoc(item.documentPath!)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-tag font-semibold bg-[#C5A059]/10 text-[#E5C882] border border-[#C5A059]/30 hover:bg-[#C5A059]/20 transition-colors cursor-pointer"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>VIEW OFFER LETTER</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Offer Letter Document Preview Modal */}
      {activeDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0F1015] border border-white/15 rounded-3xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto text-white">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-[#C5A059]" />
                <h4 className="font-mono-tag font-semibold text-xs sm:text-sm text-white">
                  Official AICTE - EduSkills Offer Letter (Ref: C18Y2026M091578812)
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="p-1 rounded-full border border-white/10 text-white/60 hover:text-white cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-4 rounded-2xl overflow-hidden border border-white/10 bg-black flex justify-center p-2">
              <img
                src={activeDoc}
                alt="AICTE EduSkills Virtual Internship Offer Letter for Preetom Saha"
                className="max-w-full h-auto object-contain"
              />
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setActiveDoc(null)}
                className="px-5 py-2 rounded-full text-xs font-mono-tag font-bold bg-[#C5A059] text-black hover:bg-[#E5C882] cursor-pointer"
              >
                CLOSE PREVIEW
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
