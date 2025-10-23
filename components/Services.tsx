"use client";

import { useLanguage } from "@/lib/LanguageContext";

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
    },
    {
      titleKey: "customMassageTitle",
      descriptionKey: "customMassageDesc",
      duration30: "30",
      price30: "$45",
      popular: false,
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&h=600&fit=crop",
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
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.servicesTitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                service.popular ? "ring-2 ring-accent" : ""
              }`}
            >
              {service.popular && (
                <div className="bg-accent text-white text-center py-2 text-sm font-semibold">
                  {t.mostPopular}
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {t[service.titleKey as keyof typeof t]}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t[service.descriptionKey as keyof typeof t]}
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <div>
                      <div className="text-sm text-gray-600">{service.duration30} {t.minutes}</div>
                      <div className="text-2xl font-bold text-primary">{service.price30}</div>
                    </div>
                  </div>

                  {service.duration60 && service.price60 && (
                    <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                      <div>
                        <div className="text-sm text-gray-600">{service.duration60} {t.minutes}</div>
                        <div className="text-2xl font-bold text-primary">{service.price60}</div>
                      </div>
                    </div>
                  )}
                </div>

                <button className="w-full mt-6 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-colors">
                  {t.bookNow}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            {t.walkInsWelcome}
          </p>
          <a
            href="tel:8089425000"
            className="inline-block bg-accent hover:bg-accent-dark text-white font-bold text-xl py-4 px-8 rounded-full transition-colors"
          >
            📞 {t.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
