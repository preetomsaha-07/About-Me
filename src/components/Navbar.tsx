import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Laptop, FileText, ArrowUpRight } from 'lucide-react';
import type { ThemeMode } from '../hooks/useTheme';

interface NavbarProps {
  themeMode: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setThemeMode: (mode: ThemeMode) => void;
  onOpenResume: () => void;
}

export function Navbar({
  themeMode,
  resolvedTheme,
  setThemeMode,
  onOpenResume
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);

      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 140;

      let current = 'hero';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#projects', label: 'WORK' },
    { href: '#about', label: 'ABOUT' },
    { href: '#skills', label: 'EXPERTISE' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#certifications', label: 'CREDENTIALS' },
    { href: '#contact', label: 'CONTACT' }
  ];

  const cycleTheme = () => {
    if (themeMode === 'system') setThemeMode('light');
    else if (themeMode === 'light') setThemeMode('dark');
    else setThemeMode('system');
  };

  const isHeroView = !scrolled && activeSection === 'hero';

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[#060709]/90 backdrop-blur-md border-b border-white/10 text-white shadow-md'
          : 'py-4 bg-[#FAF9F5] border-b border-black/10 text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Signature Monogram */}
          <a
            href="#"
            className="group flex items-center gap-2 transition-transform hover:scale-105"
            aria-label="Preetom Saha Home"
          >
            <span className={`font-serif-accent text-2xl sm:text-3xl font-medium tracking-tight ${
              isHeroView ? 'text-black' : 'text-white'
            }`}>
              Preetom
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B] inline-block animate-pulse" />
          </a>

          {/* Center: Reference Floating Pill Menu */}
          <nav className={`hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full border backdrop-blur-md shadow-xs ${
            isHeroView
              ? 'border-black/10 bg-white/90 text-black'
              : 'border-white/10 bg-[#0F1015]/85 text-white'
          }`}>
            {navLinks.map((link) => {
              const targetId = link.href.slice(1);
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-mono-tag font-semibold tracking-wider rounded-full transition-all duration-200 ${
                    isActive
                      ? isHeroView
                        ? 'bg-black text-white shadow-xs'
                        : 'bg-white text-black shadow-xs'
                      : isHeroView
                        ? 'text-[#4A4944] hover:text-black hover:bg-black/5'
                        : 'text-[#95949C] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Actions (Status + Resume + Theme) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Status Pill */}
            <span className={`hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono-tag border ${
              isHeroView
                ? 'border-black/10 text-[#4A4944] bg-white/70'
                : 'border-white/10 text-[#95949C] bg-white/5'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>AVAILABLE FOR WORK</span>
            </span>

            {/* Theme Toggle Button */}
            <button
              onClick={cycleTheme}
              type="button"
              className={`inline-flex items-center justify-center w-8 h-8 rounded-full border transition-colors cursor-pointer ${
                isHeroView
                  ? 'border-black/10 bg-white text-black hover:bg-black/5'
                  : 'border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
              title={`Theme: ${themeMode} (${resolvedTheme}). Click to cycle.`}
              aria-label="Toggle theme appearance"
            >
              {themeMode === 'system' ? (
                <Laptop className="w-3.5 h-3.5" />
              ) : resolvedTheme === 'dark' ? (
                <Moon className="w-3.5 h-3.5 text-[#B8860B]" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-600" />
              )}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono-tag font-semibold border transition-all cursor-pointer shadow-xs ${
                isHeroView
                  ? 'border-black/15 bg-white text-black hover:bg-black/5'
                  : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>RESUME</span>
            </button>

            {/* Contact Action */}
            <a
              href="#contact"
              className={`inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-mono-tag font-bold transition-opacity shadow-xs ${
                isHeroView
                  ? 'bg-black text-white hover:bg-neutral-800'
                  : 'bg-white text-black hover:bg-[#E5C882]'
              }`}
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={cycleTheme}
              type="button"
              className={`p-1.5 rounded-full border cursor-pointer ${
                isHeroView
                  ? 'border-black/10 text-black bg-white'
                  : 'border-white/10 text-white bg-white/5'
              }`}
              aria-label="Toggle theme"
            >
              {resolvedTheme === 'dark' ? (
                <Moon className="w-4 h-4 text-[#B8860B]" />
              ) : (
                <Sun className="w-4 h-4 text-amber-600" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full border cursor-pointer ${
                isHeroView
                  ? 'border-black/10 text-black bg-white hover:bg-black/5'
                  : 'border-white/10 text-white bg-white/5 hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden mt-2 border-b px-4 pt-3 pb-5 space-y-2 shadow-xl ${
          isHeroView
            ? 'border-black/10 bg-[#FAF9F5] text-black'
            : 'border-white/10 bg-[#060709] text-white'
        }`}>
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-mono-tag font-medium rounded-lg ${
                  isHeroView
                    ? 'text-[#4A4944] hover:text-black hover:bg-black/5'
                    : 'text-[#95949C] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={`pt-3 border-t flex flex-col gap-2 ${
            isHeroView ? 'border-black/10' : 'border-white/10'
          }`}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-mono-tag font-semibold rounded-full border ${
                isHeroView
                  ? 'border-black/15 bg-white text-black'
                  : 'border-white/15 bg-white/5 text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-[#B8860B]" />
              VIEW RESUME
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`w-full flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-mono-tag font-bold rounded-full ${
                isHeroView
                  ? 'bg-black text-white'
                  : 'bg-white text-black'
              }`}
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
