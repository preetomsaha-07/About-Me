import { useState } from 'react';
import { useTheme } from './hooks/useTheme';

import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const { themeMode, resolvedTheme, setThemeMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <div
      className="portfolio-page min-h-screen transition-colors duration-300"
      data-theme={resolvedTheme}
    >
      {/* Video Reference Custom Interactive Mouse Motion & Follower */}
      <CustomCursor />

      {/* Reference video intro loader (0% -> 100% golden arc -> hello) */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {/* Floating navigation bar */}
      <Navbar
        themeMode={themeMode}
        resolvedTheme={resolvedTheme}
        setThemeMode={setThemeMode}
        onOpenResume={openResume}
      />

      {/* Main portfolio content */}
      <main id="main-content" className="relative">
        <Hero onOpenResume={openResume} />

        <AboutSection />

        <SkillsSection />

        <ProjectsSection />

        <ExperienceSection />

        <EducationSection />

        <CertificationsSection />

        <EventsSection />

        <ContactSection />
      </main>

      {/* Portfolio footer */}
      <Footer />

      {/* Interactive resume modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={closeResume}
      />
    </div>
  );
}

export default App;
