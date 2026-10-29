import { portfolioData } from '../data/portfolio';
import { Database, Sparkles, ShieldCheck } from 'lucide-react';

export function AboutSection() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 md:py-28 bg-[#08090C] text-[#F3F3F5] border-b border-white/10 relative overflow-hidden">
      {/* Background Subtle Grid from Reference Video */}
      <div className="absolute inset-0 bg-grid-lines opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Center Pill matching Video Frame 0:41 */}
        <div className="flex justify-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-xs font-mono-tag tracking-wider bg-white/5 border border-white/10 text-[#C5A059]">
            <span>✦</span>
            <span className="font-bold text-white">ABOUT ME</span>
            <span>✦</span>
          </div>
        </div>

        {/* Editorial Two-Column Grid matching Video Frame 0:48 - 0:56 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Card with Metadata */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm rounded-2xl p-2.5 bg-[#121317] border border-white/10 shadow-2xl relative group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-black/40">
                <img
                  src={personal.photoUrl}
                  alt="Preetom Saha - Student at Narula Institute of Technology"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Floating Bottom Label inside photo */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <p className="font-display text-xl uppercase tracking-wider text-white">
                    {personal.name}
                  </p>
                  <p className="text-xs font-mono-tag text-[#C5A059]">
                    B.Tech 2nd Year · NIT Data Science
                  </p>
                </div>
              </div>

              {/* Status pill under portrait */}
              <div className="mt-3 px-3.5 py-2 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs font-mono-tag">
                <span className="text-[#95949C]">ENROLLMENT</span>
                <span className="text-white font-semibold">2025 – 2029 (Roll: 127250900089)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Statement & Editorial Bio */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Small tag: WHO AM I? */}
            <div className="inline-flex items-center gap-2 text-xs font-mono-tag tracking-widest text-[#C5A059] uppercase">
              <span>[ 01 ]</span>
              <span>WHO AM I?</span>
            </div>

            {/* Giant Editorial Heading from Video */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05]">
              I BUILD DIGITAL WORLDS WHERE <span className="text-[#C5A059]">DESIGN</span> MEETS <span className="text-[#E5C882]">CODE</span>.
            </h2>

            {/* Verified Bio Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#95949C] leading-relaxed">
              {personal.bio.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#C5A059] mb-1.5">
                  <Database className="w-4 h-4" />
                  <span className="text-xs font-mono-tag font-bold uppercase tracking-wider text-white">
                    Data Science & Big Data
                  </span>
                </div>
                <p className="text-xs text-[#95949C] leading-normal">
                  PySpark certified via Infosys Springboard; tabular analysis, distributed operations, and data pipelines.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-2 text-[#C5A059] mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-mono-tag font-bold uppercase tracking-wider text-white">
                    Applied Generative AI
                  </span>
                </div>
                <p className="text-xs text-[#95949C] leading-normal">
                  Google Cloud Vertex AI skill badge, IBM Granite Models, and TCS iON Generative AI Essentials.
                </p>
              </div>
            </div>

            {/* Metadata Spec Matrix from Reference Video Frame 0:50 */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 text-xs font-mono-tag">
              <div>
                <span className="text-[#65646C] block text-[10px] uppercase">NAME</span>
                <span className="text-white font-medium">{personal.name}</span>
              </div>
              <div>
                <span className="text-[#65646C] block text-[10px] uppercase">ROLE</span>
                <span className="text-white font-medium">Data & AI Developer</span>
              </div>
              <div>
                <span className="text-[#65646C] block text-[10px] uppercase">COLLEGE</span>
                <span className="text-white font-medium">Narula Inst. of Tech</span>
              </div>
              <div>
                <span className="text-[#65646C] block text-[10px] uppercase">LOCATION</span>
                <span className="text-white font-medium">Kolkata, India</span>
              </div>
              <div>
                <span className="text-[#65646C] block text-[10px] uppercase">EXPERIENCE</span>
                <span className="text-white font-medium">3 Internships (IBM/AICTE)</span>
              </div>
              <div>
                <span className="text-[#65646C] block text-[10px] uppercase">STATUS</span>
                <span className="text-emerald-400 font-medium inline-flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
