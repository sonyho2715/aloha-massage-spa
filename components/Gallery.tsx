"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Image from "next/image";

export default function Gallery() {
  const { t } = useLanguage();

  const images = [
    { src: "/images/IMG_6276.jpg", alt: "Massage therapy room" },
    { src: "/images/couples-massage.jpg", alt: "Couples massage" },
    { src: "/images/couples-massage-1-1024x679.jpg", alt: "Couples massage session" },
    { src: "/images/IMG_6261.jpg", alt: "Relaxation space" },
    { src: "/images/IMG_6263 (1).jpg", alt: "Spa interior" },
    { src: "/images/IMG_6265.jpg", alt: "Treatment room" },
    { src: "/images/Reunion 2010 012.jpg", alt: "Spa ambiance" },
    { src: "/images/Reunion 2010 013.jpg", alt: "Massage area" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.gallery}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the tranquil atmosphere of our spa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                index === 0 || index === 3 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:8089121000"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold text-lg px-8 py-4 rounded-full transition-colors shadow-lg"
          >
            {t.bookNow}
          </a>
        </div>
      </div>
    </section>
  );
}
