"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t.heroTitle}
            <span className="block text-accent mt-2">{t.heroSubtitle}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8">
            {t.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="tel:8089121000"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg hover:shadow-xl"
            >
              📞 {t.bookNow}
            </a>
            <button className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-primary font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg">
              {t.viewServices}
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 text-center border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-sm md:text-base text-white/80">{t.yearsExp}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 text-center border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-sm md:text-base text-white/80">{t.clients}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 text-center border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm md:text-base text-white/80">{t.satisfaction}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
