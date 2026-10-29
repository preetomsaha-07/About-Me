import { useState, useEffect } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [showHello, setShowHello] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Quick counter increment to reach 100% in ~1.4s
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const jump = Math.floor(Math.random() * 8) + 3;
        return Math.min(100, prev + jump);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const helloTimer = setTimeout(() => {
        setShowHello(true);
      }, 250);

      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 1050);

      const finishTimer = setTimeout(() => {
        onComplete();
      }, 1600);

      return () => {
        clearTimeout(helloTimer);
        clearTimeout(exitTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 400);
  };

  return (
    <div
      onClick={handleSkip}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#07080a] text-[#f2efe9] select-none transition-all duration-700 ease-in-out cursor-pointer ${
        isExiting ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading animation - click to enter"
      title="Click anywhere to skip"
    >
      {/* Background subtle noise/glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center">
        {!showHello ? (
          <div className="relative flex flex-col items-center">
            {/* Golden Arc Spinner matching video */}
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg
                className="w-full h-full animate-rotate-arc"
                viewBox="0 0 100 100"
                fill="none"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="3"
                />
                <path
                  d="M 50 8 A 42 42 0 0 1 92 50"
                  stroke="url(#goldGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FFF4D0" />
                    <stop offset="50%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#997A24" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Big Serif Percentage in Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif-accent text-4xl sm:text-5xl font-medium tracking-tight text-[#f5ecd5]">
                  {progress}%
                </span>
              </div>
            </div>

            <p className="mt-6 text-[11px] font-mono-tag uppercase tracking-[0.25em] text-[#8e8d89]">
              Preetom Saha · Portfolio
            </p>
          </div>
        ) : (
          /* Cursive "hello" reveal matching video frame 0:11 */
          <div className="animate-in fade-in zoom-in-95 duration-500 text-center">
            <h1 className="font-serif-accent text-6xl sm:text-8xl tracking-normal text-[#e6d5b0] italic font-normal">
              hello
            </h1>
            <p className="mt-3 text-xs font-mono-tag tracking-[0.3em] uppercase text-[#9e9d98]">
              Welcome
            </p>
          </div>
        )}
      </div>

      {/* Skip indicator at bottom */}
      <div className="absolute bottom-6 text-[10px] font-mono-tag uppercase tracking-widest text-[#666562]">
        Click anywhere to skip
      </div>
    </div>
  );
}
