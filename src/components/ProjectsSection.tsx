import { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import type { ProjectItem } from '../data/portfolio';
import { 
  ExternalLink, 
  CheckCircle2, 
  Users, 
  X,
  Info,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { GitHubIcon } from './Icons';

export function ProjectsSection() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Artificial Intelligence & Vision', 'System & Security', 'Data & Research'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const tickerItems = [
    'COMPUTER VISION',
    'GENERATIVE AI',
    'DATA ANALYTICS',
    'SYSTEM ARCHITECTURE',
    'HACKATHON SPRINT',
    'BIG DATA PYSPARK',
    'FULL STACK REACT',
    'PREDICTIVE MODELING'
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-[#060709] text-[#F3F3F5] border-b border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Grid from Reference Video */}
      <div className="absolute inset-0 bg-grid-lines opacity-40 pointer-events-none" />

      {/* 1. Massive Marquee Banner matching Video Frame 1:15 - 1:24 */}
      <div className="relative z-10 text-center mb-12 sm:mb-16 select-none">
        <p className="text-xs sm:text-sm font-mono-tag tracking-[0.3em] uppercase text-[#C5A059] mb-2">
          SCROLL TO EXPLORE MY
        </p>

        {/* Giant WORK text taking full viewport width */}
        <div className="overflow-hidden">
          <h2 className="font-display text-[22vw] sm:text-[18vw] font-black uppercase text-[#E5C882] leading-[0.8] tracking-tighter opacity-95 hover:tracking-normal transition-all duration-500">
            WORK
          </h2>
        </div>

        {/* Marquee Ticker Ribbon matching Video Frame 1:20 */}
        <div className="mt-6 border-y border-white/10 py-3 overflow-hidden bg-white/[0.02]">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-mono-tag tracking-widest text-[#95949C]">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <span key={idx} className="flex items-center gap-8">
                <span className="hover:text-white transition-colors">{item}</span>
                <span className="text-[#C5A059]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
            <span className="text-xs font-mono-tag uppercase tracking-wider text-white">
              FEATURED CASE STUDIES & APPLICATIONS
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono-tag transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white text-black font-bold shadow-md'
                    : 'bg-white/5 border border-white/10 text-[#95949C] hover:text-white hover:bg-white/10'
                }`}
              >
                {cat === 'All' ? 'ALL PROJECTS' : cat.split('&')[0].trim().toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Stacked Project Cards matching Video Frame 1:26 - 1:50 */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#0F1015] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl group relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Column: Index, Titles & Description */}
                <div className="lg:col-span-8 space-y-4">
                  
                  {/* Category & Status Row */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tag text-xs sm:text-sm text-[#C5A059] font-bold">
                      0{index + 1} /
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-mono-tag bg-white/5 border border-white/10 text-white">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono-tag text-[#7C7B84]">
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white group-hover:text-[#E5C882] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm font-mono-tag text-[#95949C]">
                    {project.subtitle}
                  </p>

                  {/* Overview */}
                  <p className="text-sm text-[#AEADB6] leading-relaxed max-w-3xl">
                    {project.overview}
                  </p>

                  {/* Highlights / Features pill row */}
                  <div className="space-y-1.5 pt-1">
                    {project.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#95949C]">
                        <span className="text-[#C5A059]">✦</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono-tag bg-white/5 border border-white/5 text-[#D1D0D7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Team / Context info */}
                  {project.team && (
                    <div className="flex items-center gap-2 text-xs font-mono-tag text-[#C5A059] pt-1">
                      <Users className="w-3.5 h-3.5" />
                      <span>Team: {project.team}</span>
                    </div>
                  )}
                </div>

                {/* Right Column: Interactive Action Card & Rotating Stamp */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6 pt-4 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-8">
                  
                  {/* Rotating Circular Stamp inside project card matching Video Frame 1:28 */}
                  <div className="relative w-24 h-24 self-start lg:self-end">
                    <svg
                      className="w-full h-full animate-spin-badge"
                      viewBox="0 0 100 100"
                    >
                      <defs>
                        <path
                          id={`stampPath-${project.id}`}
                          d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                        />
                      </defs>
                      <text className="text-[9px] font-mono-tag uppercase tracking-[0.2em] fill-current text-[#7C7B84]">
                        <textPath xlinkHref={`#stampPath-${project.id}`}>
                          · VIEW DETAILS · CASE STUDY ·
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="space-y-2.5 w-full">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-tag font-bold bg-white text-black hover:bg-[#E5C882] transition-colors shadow-md"
                      >
                        <span>LIVE DEPLOYMENT</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-tag font-semibold bg-white/5 border border-white/15 text-white hover:bg-white/10 transition-colors"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        <span>SOURCE CODE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => setActiveProject(project as ProjectItem)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-tag font-semibold border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#E5C882] hover:bg-[#C5A059]/20 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>FULL SPECIFICATIONS</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal with Complete Data Preserved */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0F1015] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-white">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono-tag px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#C5A059]">
                  {activeProject.category}
                </span>
                <h3 className="mt-3 font-display text-3xl sm:text-4xl uppercase tracking-tight text-white">
                  {activeProject.title}
                </h3>
                <p className="text-xs font-mono-tag text-[#95949C] mt-1">
                  {activeProject.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-1.5 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/10 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="mt-6 space-y-6 text-sm">
              
              {/* Problem Statement */}
              <div>
                <h4 className="font-mono-tag text-xs uppercase tracking-wider text-[#C5A059]">
                  Problem Statement
                </h4>
                <p className="mt-1 text-[#C5C4CD] leading-relaxed text-xs sm:text-sm">
                  {activeProject.problemStatement}
                </p>
              </div>

              {/* Overview */}
              <div>
                <h4 className="font-mono-tag text-xs uppercase tracking-wider text-[#C5A059]">
                  Project Overview
                </h4>
                <p className="mt-1 text-[#C5C4CD] leading-relaxed text-xs sm:text-sm">
                  {activeProject.overview}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="font-mono-tag text-xs uppercase tracking-wider text-[#C5A059]">
                  Core Capabilities & Features
                </h4>
                <ul className="mt-2 space-y-2 text-xs sm:text-sm text-[#AEADB6]">
                  {activeProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contribution */}
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <h4 className="font-mono-tag text-xs uppercase tracking-wider text-white">
                  Preetom&apos;s Contribution
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm text-[#AEADB6] leading-relaxed">
                  {activeProject.myContribution}
                </p>
                {activeProject.team && (
                  <p className="mt-2 text-xs font-mono-tag text-[#E5C882]">
                    Collaborators: {activeProject.team}
                  </p>
                )}
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-mono-tag text-xs uppercase tracking-wider text-[#C5A059]">
                  Technologies & Frameworks
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {activeProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono-tag bg-white/5 text-[#E6E6EA] border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verification Status */}
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-[#95949C] flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Status Note: </span>
                  <span>{activeProject.verification.note}</span>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-tag font-bold bg-white text-black"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {activeProject.githubUrl && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-mono-tag border border-white/20 text-white"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
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
