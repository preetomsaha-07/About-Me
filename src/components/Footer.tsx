import { portfolioData } from '../data/portfolio';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { LinkedInIcon, GitHubIcon } from './Icons';

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const { personal, socialLinks } = portfolioData;
  const linkedin = socialLinks.find(s => s.platform === 'LinkedIn');
  const github = socialLinks.find(s => s.platform === 'GitHub');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050608] py-14 text-xs font-mono-tag text-[#8E8D96]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-serif-accent text-2xl font-bold text-white">
                Preetom Saha
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-emerald-400">
                <ShieldCheck className="w-3 h-3" />
                Verified Student Portfolio
              </span>
            </div>
            <p className="mt-1 text-xs text-[#7C7B84]">
              B.Tech in Computer Science & Engineering (Data Science) · Narula Institute of Technology (2025–2029)
            </p>
          </div>

          <div className="flex items-center gap-3">
            {linkedin?.isAvailable && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-[#0A66C2] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            )}
            {github?.isAvailable && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            )}
            <a
              href={`mailto:${personal.email}`}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-[#C5A059] flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white text-white hover:text-black font-semibold transition-all cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Attribution & Notice */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="max-w-xl text-[11px] text-[#7C7B84] leading-relaxed">
            {personal.verificationNotice}
          </p>
          <p className="text-[11px] text-[#7C7B84]">
            © {CURRENT_YEAR} Preetom Saha. Designed & Crafted with Reference Direction.
          </p>
        </div>

      </div>
    </footer>
  );
}
