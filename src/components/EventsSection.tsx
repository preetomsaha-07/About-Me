import { portfolioData } from '../data/portfolio';
import { Calendar } from 'lucide-react';

export function EventsSection() {
  const { events } = portfolioData;

  return (
    <section id="events" className="py-20 md:py-28 bg-[#08090C] text-[#F3F3F5] border-b border-white/10 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag bg-white/5 border border-white/10 text-[#C5A059]">
              <span>✦</span>
              <span>ENGAGEMENTS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              HACKATHONS & <span className="text-[#C5A059]">EVENTS</span>
            </h2>
            <p className="text-sm text-[#95949C] max-w-2xl leading-relaxed">
              Hackathon developer sprints, Google Student Ambassador Program Pitch Night 2026, and collaborative campus initiatives.
            </p>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((evt, index) => (
            <div
              key={evt.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0F1015] border border-white/10 flex flex-col justify-between hover:border-[#C5A059]/40 transition-all duration-300 shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono-tag text-xs font-bold text-[#E5C882]">
                    0{index + 1} / {evt.organizationOrHost}
                  </span>
                  <span className="text-xs font-mono-tag text-[#7C7B84] flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C5A059]" />
                    {evt.year}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-2xl uppercase tracking-tight text-white group-hover:text-[#E5C882] transition-colors">
                  {evt.title}
                </h3>
                <p className="mt-1 text-xs font-mono-tag text-[#C5A059]">
                  Role: {evt.roleOrTeam}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#95949C] leading-relaxed">
                  {evt.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono-tag text-[#7C7B84] uppercase tracking-wider block mb-1">
                  Outcome & Status
                </span>
                <p className="text-xs font-mono-tag text-white">
                  {evt.outcomeOrStatus}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
