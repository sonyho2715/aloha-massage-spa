'use client';

import { useEffect, useState, useRef } from 'react';

interface ParallaxHeroProps {
  imageUrl: string;
  overlayOpacity?: number;
  height?: string;
  children: React.ReactNode;
}

export function ParallaxHero({
  imageUrl,
  overlayOpacity = 0.4,
  height = 'min-h-[90vh]',
  children,
}: ParallaxHeroProps) {
  const [scrollY, setScrollY] = useState(0);
  const ticking = useRef(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        rafId.current = requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <section className={`relative ${height} flex items-center overflow-hidden`}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          willChange: 'transform',
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"
        style={{ opacity: overlayOpacity + 0.3 }}
      />

      {/* Bottom Wave Overlay */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-[#faf8f5]"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}
