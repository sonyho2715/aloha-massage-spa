"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export default function Benefits() {
  const { t } = useLanguage();

  const benefits = [
    {
      image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400&h=400&fit=crop",
      title: t.benefitTeam,
      description: t.benefitTeamDesc
    },
    {
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop",
      title: t.benefitBrand,
      description: t.benefitBrandDesc
    },
    {
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=400&fit=crop",
      title: t.benefitTech,
      description: t.benefitTechDesc
    },
    {
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=400&fit=crop",
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
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-all duration-300">
                <Image
                  src={benefit.image}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
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
