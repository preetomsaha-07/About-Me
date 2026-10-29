import { useState, useRef } from 'react';
import type { MouseEvent } from 'react';
import { portfolioData } from '../data/portfolio';
import { ShieldCheck, ChevronRight, CheckCircle2, Sparkles } from 'lucide-react';

export function SkillsSection() {
  const { skills = [] } = portfolioData;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  // Mouse motion follower state matching Video Frames 1:04 - 1:12
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const handleSectionMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const featuredTechPills = [
    'Python',
    'PySpark',
    'Google Cloud Vertex AI',
    'IBM Granite Models',
    'React',
    'TypeScript',
    'Data Analytics',
    'Advanced Excel 100%',
    'Tailwind CSS',
    'Machine Learning',
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSectionMouseMove}
      id="skills"
      className="py-20 md:py-28 bg-[#090A0D] text-[#F3F3F5] border-b border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Grid Lines from Reference Video */}
      <div className="absolute inset-0 bg-grid-lines opacity-50 pointer-events-none" />

      {/* Floating Mouse Follower Preview Badge matching Video Frame 1:08 */}
      {hoveredIdx !== null && (
        <div
          aria-hidden="true"
          className="hidden md:flex pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2 items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#C5A059] text-black shadow-2xl transition-all duration-75"
          style={{
            left: `${cursorPos.x + 20}px`,
            top: `${cursorPos.y - 30}px`,
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-black" />
          <span className="font-mono-tag text-xs font-bold uppercase tracking-wider">
            {skills[hoveredIdx]?.categoryName.split('&')[0].trim()}
          </span>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Layout matching Reference Video Frame 0:58 - 1:14 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Title, Philosophy & Floating Badges */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tag bg-white/5 border border-white/10 text-[#C5A059]">
              <span>✦</span>
              <span>EXPERTISE</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
              MY <span className="text-[#C5A059]">EXPERTISE</span>
            </h2>

            <p className="text-sm sm:text-base text-[#95949C] leading-relaxed">
              I design and build digital experiences where data science, AI engineering, and modern web interfaces work as one.
            </p>

            {/* Floating Tech Badges / Pills matching Video Frame 1:00 */}
            <div className="pt-2">
              <p className="text-[11px] font-mono-tag uppercase tracking-widest text-[#66656C] mb-3">
                Core Stack & Tools
              </p>
              <div className="flex flex-wrap gap-2">
                {featuredTechPills.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-mono-tag border border-white/10 bg-white/5 text-[#E6E6EA] hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs font-mono-tag text-[#7C7B84]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All competencies backed by verified credentials & course evaluations</span>
            </div>

          </div>

          {/* Right Column: Interactive Capabilities Accordion matching Video Frame 1:02 - 1:14 */}
          <div className="lg:col-span-7 space-y-4">
            {skills.map((category, idx) => {
              const isSelected = activeCategoryIndex === idx;
              return (
                <div
                  key={category.categoryName}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#121318] border-[#C5A059]/60 shadow-xl'
                      : 'bg-[#0E0F13] border-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono-tag text-xs text-[#C5A059]">
                        0{idx + 1} /
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl uppercase tracking-wider text-white">
                        {category.categoryName}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-transform ${
                      isSelected ? 'border-[#C5A059] bg-[#C5A059] text-black rotate-90' : 'border-white/10 text-white/50'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="mt-2 text-xs sm:text-sm text-[#95949C]">
                    {category.description}
                  </p>

                  {/* Skills Grid within Category */}
                  <div className="mt-5 space-y-2.5 pt-4 border-t border-white/5">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white/[0.06] transition-colors"
                      >
                        <div>
                          <div className="font-semibold text-xs sm:text-sm text-white flex items-center gap-2">
                            <span>{skill.name}</span>
                          </div>
                          <div className="text-xs text-[#8E8D96] mt-0.5">
                            {skill.levelDescription}
                          </div>
                        </div>

                        <div className="shrink-0">
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono-tag px-2.5 py-0.5 rounded-full bg-[#C5A059]/10 text-[#E5C882] border border-[#C5A059]/20">
                            <CheckCircle2 className="w-3 h-3 text-[#C5A059]" />
                            <span>{skill.verifiedBy}</span>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
