import { useState } from 'react';
import type { MouseEvent } from 'react';
import { portfolioData } from '../data/portfolio';
import {
  ArrowDown,
  Download,
  Eye,
  ArrowUpRight,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const { personal, socialLinks } = portfolioData;

  const linkedin = socialLinks.find(
    (social) => social.platform === 'LinkedIn'
  );

  const github = socialLinks.find(
    (social) => social.platform === 'GitHub'
  );

  // Dynamic mouse distortion state matching Video Frames 0:24 - 0:28
  const [distortion, setDistortion] = useState({
    active: false,
    scale: 0,
    baseFreqX: 0.03,
    baseFreqY: 0.04,
    tiltX: 0,
    tiltY: 0
  });

  const handleMouseMove = (e: MouseEvent<HTMLHeadingElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    // Fluid wave calculation directly responding to mouse movement
    const scale = 22 + Math.sin(relX * Math.PI) * 16;
    const baseFreqX = 0.02 + relX * 0.035;
    const baseFreqY = 0.03 + relY * 0.045;
    const tiltX = (relY - 0.5) * -7;
    const tiltY = (relX - 0.5) * 8;

    setDistortion({
      active: true,
      scale,
      baseFreqX,
      baseFreqY,
      tiltX,
      tiltY
    });
  };

  const handleMouseLeave = () => {
    setDistortion({
      active: false,
      scale: 0,
      baseFreqX: 0.03,
      baseFreqY: 0.04,
      tiltX: 0,
      tiltY: 0
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-between pt-8 pb-12 overflow-hidden border-b border-black/10 bg-[#FAF9F5] text-[#0A0A0C]"
    >
      {/* Background Subtle Grid - Light Mode */}
      <div className="absolute inset-0 bg-grid-lines-light opacity-70 pointer-events-none" />

      {/* Real-time Dynamic SVG Liquid Distortion Filter matching Video Frame 0:25 */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="interactiveWave">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={`${distortion.baseFreqX} ${distortion.baseFreqY}`}
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={distortion.active ? distortion.scale : 0}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Badges / Context row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono-tag border border-black/10 bg-white text-[#4A4944] shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              VERIFIED PORTFOLIO
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono-tag border border-black/10 bg-white text-[#4A4944] shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#B8860B]" />
              NARULA INSTITUTE OF TECHNOLOGY
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono-tag text-[#55544E]">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>KOLKATA, INDIA · B.TECH CSE (DATA SCIENCE)</span>
          </div>
        </div>

        {/* Centerstage: Massive Editorial Headline in Crisp Pure Black with Mouse Motion */}
        <div className="my-auto py-12 sm:py-16 text-center select-none">
          {/* Main Huge Word: CREATIVE with Real-time Mouse Wave Distortion */}
          <div className="overflow-visible">
            <h1
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setDistortion(prev => ({ ...prev, active: true, scale: 20 }))}
              onMouseLeave={handleMouseLeave}
              className="font-display text-[17vw] sm:text-[15vw] lg:text-[13.5vw] font-black uppercase tracking-tight text-black leading-[0.88] cursor-crosshair select-none"
              style={{
                letterSpacing: '-0.02em',
                filter: distortion.active ? 'url(#interactiveWave)' : 'none',
                transform: distortion.active
                  ? `perspective(800px) rotateX(${distortion.tiltX}deg) rotateY(${distortion.tiltY}deg)`
                  : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
                transition: distortion.active ? 'none' : 'transform 0.4s ease-out',
              }}
              title="Move your mouse over CREATIVE to liquefy"
            >
              CREATIVE
            </h1>
          </div>

          {/* Sub-headline: ✦ DATA & AI DEVELOPER in Black */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8860B] animate-pulse" />
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase tracking-wider text-black font-bold">
              DATA & AI DEVELOPER
            </h2>
            <span className="w-2.5 h-2.5 rounded-full bg-[#B8860B] animate-pulse" />
          </div>

          {/* Triad tags: VISUALS · CODE · EXPERIENCE */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-mono-tag tracking-widest text-[#55544E] uppercase">
            <span className="hover:text-black transition-colors">VISUALS</span>
            <span className="text-[#B8860B]">✦</span>
            <span className="hover:text-black transition-colors">CODE</span>
            <span className="text-[#B8860B]">✦</span>
            <span className="hover:text-black transition-colors">EXPERIENCE</span>
          </div>

          {/* Action CTAs in clean high-contrast editorial pills */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono-tag font-bold bg-black text-white hover:bg-neutral-800 shadow-sm transition-all"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href={personal.resumePdfUrl}
              download="Preetom_Saha_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-tag font-semibold border border-black/15 bg-white hover:bg-black/5 text-black transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>DOWNLOAD RESUME</span>
            </a>

            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono-tag font-semibold border border-black/15 bg-white hover:bg-black/5 text-black transition-colors shadow-xs cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5 text-[#4A4944]" />
              <span>PREVIEW</span>
            </button>

            {linkedin?.isAvailable && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono-tag font-semibold border border-black/15 bg-white hover:bg-black/5 text-black transition-colors shadow-xs"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            )}

            {github?.isAvailable && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono-tag font-semibold border border-black/15 bg-white hover:bg-black/5 text-black transition-colors shadow-xs"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-black" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            )}
          </div>
        </div>

        {/* Bottom Row: Metadata + Scroll To Explore + Rotating Badge */}
        <div className="pt-6 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Metadata */}
          <div className="text-center md:text-left space-y-0.5">
            <p className="text-xs font-mono-tag font-bold tracking-wider text-black">
              {personal.name.toUpperCase()}
            </p>
            <p className="text-[11px] font-mono-tag text-[#55544E]">
              B.Tech Data Science (2025–2029) · Narula Institute of Technology
            </p>
          </div>

          {/* Center: Scroll To Explore indicator matching Video Frame 0:15 */}
          <a
            href="#about"
            className="group flex flex-col items-center gap-1.5 text-[11px] font-mono-tag tracking-widest text-[#55544E] hover:text-black transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <div className="w-px h-6 bg-black/20 relative overflow-hidden">
              <div className="w-full h-1/2 bg-[#B8860B] animate-pulse" />
            </div>
          </a>

          {/* Right: Circular Rotating Stamp Badge in Black on Light background */}
          <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
            {/* Rotating SVG text */}
            <svg
              className="w-full h-full animate-spin-badge"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[8.5px] font-mono-tag uppercase tracking-[0.22em] fill-black font-bold">
                <textPath xlinkHref="#circlePath">
                  · BASED IN KOLKATA · OPEN TO WORK ·
                </textPath>
              </text>
            </svg>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#B8860B] text-base font-bold">✦</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
