"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-ocean-blue-dark to-teal-dark">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="https://video.wixstatic.com/video/16897f_16fe500669d04342aba34ce506424677/1080p/mp4/file.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Enhanced Gradient Overlay with Tropical Colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-blue/85 via-teal/70 to-ocean-blue-light/40"></div>

        {/* Decorative Wave Pattern Overlay */}
        <div className="absolute bottom-0 left-0 w-full opacity-10">
          <svg viewBox="0 0 1440 320" className="w-full h-32" preserveAspectRatio="none">
            <path
              fill="white"
              fillOpacity="0.3"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-tight mb-6 animate-fade-in-up">
            {t.heroTitle}
            <span className="block text-coral-light mt-2 drop-shadow-lg">{t.heroSubtitle}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-coral hover:bg-coral-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-glow hover:shadow-2xl transform hover:scale-105 animate-pulse-glow"
            >
              <span className="mr-2">📅</span>
              {t.bookNow}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white text-ocean-blue font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-white/50"
            >
              {t.viewServices}
            </Link>
          </div>

          {/* Enhanced Stats Cards with Glassmorphism */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 md:p-6 text-center border border-white/30 shadow-glass hover:shadow-glass-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2019</div>
              <div className="text-sm md:text-base text-white/90 font-medium">{t.yearsExp}</div>
            </div>
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 md:p-6 text-center border border-white/30 shadow-glass hover:shadow-glass-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-sm md:text-base text-white/90 font-medium">{t.clients}</div>
            </div>
            <div className="bg-white/15 backdrop-blur-lg rounded-2xl p-4 md:p-6 text-center border border-white/30 shadow-glass hover:shadow-glass-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl md:text-4xl font-bold text-gold-light mb-2 drop-shadow-lg">4.7★</div>
              <div className="text-sm md:text-base text-white/90 font-medium">{t.satisfaction}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-white/80 text-sm mb-2 font-medium">Scroll</span>
          <svg className="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
