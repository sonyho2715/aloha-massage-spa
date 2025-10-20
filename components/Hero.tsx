"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              {t.heroTitle}
              <span className="block text-accent">{t.heroSubtitle}</span>
            </h1>

            <p className="text-lg text-gray-600">
              {t.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary text-lg px-8 py-3">
                {t.bookNow}
              </button>
              <button className="btn-outline text-lg px-8 py-3">
                {t.viewServices}
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-600">{t.yearsExp}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-gray-600">{t.clients}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-gray-600">{t.satisfaction}</div>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video
                src="https://video.wixstatic.com/video/16897f_16fe500669d04342aba34ce506424677/1080p/mp4/file.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-primary">{t.benefitBrand}</div>
                  <div className="text-sm text-gray-600">{t.benefitBrandDesc}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
