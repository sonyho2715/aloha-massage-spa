"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      titleKey: "footMassageTitle",
      descriptionKey: "footMassageDesc",
      duration30: "30",
      price30: "$35",
      duration60: "60",
      price60: "$55",
      popular: false,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop",
      icon: "🦶",
    },
    {
      titleKey: "fullBodyTitle",
      descriptionKey: "fullBodyDesc",
      duration30: "60",
      price30: "$70",
      duration60: "90",
      price60: "$110",
      popular: true,
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
      icon: "💆",
    },
    {
      titleKey: "customMassageTitle",
      descriptionKey: "customMassageDesc",
      duration30: "30",
      price30: "$45",
      popular: false,
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=600&fit=crop",
      icon: "✨",
    },
    {
      titleKey: "comboMassageTitle",
      descriptionKey: "comboMassageDesc",
      duration30: "60",
      price30: "$80",
      duration60: "90",
      price60: "$120",
      popular: false,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      icon: "🌺",
    },
    {
      titleKey: "couplesMassageTitle",
      descriptionKey: "couplesMassageDesc",
      duration30: "60",
      price30: "$140",
      duration60: "90",
      price60: "$220",
      popular: true,
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop",
      icon: "💑",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-warm-white to-sand-light relative overflow-hidden">
      {/* Decorative Wave Pattern */}
      <div className="absolute top-0 left-0 w-full opacity-5">
        <svg viewBox="0 0 1440 100" className="w-full h-24" preserveAspectRatio="none">
          <path
            fill="currentColor"
            className="text-teal"
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-ocean-blue mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            {t.servicesSubtitle}
          </p>
        </div>

        {/* Bento-Style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-sand-light/30 border border-stone-light/20 shadow-soft hover:shadow-soft-lg transform hover:-translate-y-2 transition-all duration-500 ${
                service.popular ? "lg:col-span-1 ring-2 ring-coral/50" : ""
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-coral to-coral-dark text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  ⭐ {t.mostPopular}
                </div>
              )}

              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={t[service.titleKey as keyof typeof t] as string}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>

                {/* Icon Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-2xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-heading text-2xl text-ocean-blue mb-2 group-hover:text-teal transition-colors">
                  {t[service.titleKey as keyof typeof t]}
                </h3>
                <p className="text-stone-dark text-base mb-4 leading-relaxed">
                  {t[service.descriptionKey as keyof typeof t]}
                </p>

                {/* Pricing Options */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between p-3 bg-sand-light/50 rounded-xl border border-sand-dark/20">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-charcoal-light font-medium">
                        {service.duration30} {t.minutes}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-ocean-blue">{service.price30}</span>
                  </div>

                  {service.duration60 && service.price60 && (
                    <div className="flex items-center justify-between p-3 bg-plumeria-light/50 rounded-xl border border-plumeria-dark/20">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-charcoal-light font-medium">
                          {service.duration60} {t.minutes}
                        </span>
                        <span className="text-xs bg-sage text-white px-2 py-0.5 rounded-full font-semibold">
                          Best Value
                        </span>
                      </div>
                      <span className="text-2xl font-bold text-ocean-blue">{service.price60}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Overlay with Book Button */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-blue/95 via-ocean-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <Link
                  href="/book"
                  className="w-full bg-coral hover:bg-coral-dark text-white py-3 rounded-full font-bold text-center shadow-glow transition-all duration-300 transform hover:scale-105"
                >
                  📅 {t.bookNow}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-ocean-blue/5 via-teal/5 to-ocean-blue/5 rounded-3xl p-8 border border-ocean-blue/10">
          <p className="text-lg text-charcoal mb-6 font-medium">
            {t.walkInsWelcome}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:8089425000"
              className="inline-flex items-center justify-center bg-coral hover:bg-coral-dark text-white font-bold text-xl py-4 px-8 rounded-full transition-all duration-300 shadow-glow hover:shadow-2xl transform hover:scale-105"
            >
              <span className="mr-2">📞</span>
              {t.phone}
            </a>
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-ocean-blue hover:bg-ocean-blue-dark text-white font-bold text-xl py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="mr-2">📅</span>
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
