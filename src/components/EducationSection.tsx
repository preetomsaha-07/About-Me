import { portfolioData } from '../data/portfolio';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 bg-[#090A0D] text-[#F3F3F5] border-b border-white/10 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag bg-white/5 border border-white/10 text-[#C5A059]">
              <span>✦</span>
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              FORMAL <span className="text-[#C5A059]">EDUCATION</span>
            </h2>
            <p className="text-sm text-[#95949C] max-w-2xl leading-relaxed">
              Academic progression in Computer Science and Engineering with specialization in Data Science at Narula Institute of Technology.
            </p>
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {education.map((item, index) => (
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
                      {item.status}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono-tag px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-300 border border-emerald-800">
                      <CheckCircle className="w-3 h-3 text-emerald-400" />
                      Verified
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl uppercase tracking-tight text-white pt-1">
                    {item.institution}
                  </h3>
                  <div className="text-sm font-mono-tag font-semibold text-[#E5C882]">
                    {item.degree} — {item.fieldOfStudy}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-1.5 text-xs font-mono-tag text-[#95949C] shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span className="text-white font-medium">{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7C7B84]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Roll number pill if present */}
              {item.rollNumber && (
                <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white/5 border border-white/5 text-xs font-mono-tag text-[#95949C]">
                  <span>College Roll No:</span>
                  <span className="font-semibold text-white">{item.rollNumber}</span>
                </div>
              )}

              {/* Highlights */}
              <div className="mt-5 pt-3 border-t border-white/10">
                <span className="text-xs font-mono-tag text-white uppercase tracking-wider block mb-2">
                  Academic Highlights & Coursework
                </span>
                <ul className="space-y-1.5 text-xs text-[#95949C]">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C5A059]">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
