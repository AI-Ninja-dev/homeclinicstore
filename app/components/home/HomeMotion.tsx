'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';

export function HomeMotion({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  return (
    <main className="hcs-home" data-motion={paused ? 'paused' : 'playing'}>
      {children}
      <div className="hcs-motion-control hcs-wrap">
        <button onClick={() => setPaused(!paused)} aria-pressed={paused}>
          {paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
          {paused ? 'Resume animations' : 'Pause animations'}
        </button>
      </div>
    </main>
  );
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;
    if (element.getBoundingClientRect().top > window.innerHeight) element.dataset.reveal = 'waiting';
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.reveal = 'visible';
        observer.unobserve(element);
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`hcs-reveal ${className}`}>{children}</div>;
}
