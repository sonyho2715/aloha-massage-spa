"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: "💆",
      title: t.benefitTeam,
      description: t.benefitTeamDesc
    },
    {
      icon: "🌺",
      title: t.benefitBrand,
      description: t.benefitBrandDesc
    },
    {
      icon: "✨",
      title: t.benefitTech,
      description: t.benefitTechDesc
    },
    {
      icon: "🕐",
      title: t.benefitService,
      description: t.benefitServiceDesc
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">{t.benefitsTitle}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-4xl mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
