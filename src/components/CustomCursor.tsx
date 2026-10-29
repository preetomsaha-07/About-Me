import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [enabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !window.matchMedia('(pointer: coarse)').matches;
  });

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position refs for 60fps lerp smoothing
  const mouseRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const dotRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      // Instantly position the center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if hovering interactive target
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, [role="button"], .cursor-pointer, .interactive-hover')
        );
        setIsHovered(isInteractive);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth animation loop for the trailing ring
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const render = () => {
      ringRef.current.x = lerp(ringRef.current.x, mouseRef.current.x, 0.18);
      ringRef.current.y = lerp(ringRef.current.y, mouseRef.current.y, 0.18);

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${ringRef.current.x}px, ${ringRef.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Center Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#B8860B] transition-transform duration-75 ${
          isClicked ? 'scale-50' : 'scale-100'
        }`}
      />

      {/* Smooth Trailing Follower Ring */}
      <div
        ref={circleRef}
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 border-[#B8860B] bg-[#B8860B]/15 backdrop-blur-[1px]'
            : isClicked
            ? 'w-8 h-8 -ml-4 -mt-4 border-[#B8860B] bg-[#B8860B]/30'
            : 'w-10 h-10 -ml-5 -mt-5 border-neutral-600/40 dark:border-neutral-400/40 bg-transparent'
        }`}
      />
    </div>
  );
}
