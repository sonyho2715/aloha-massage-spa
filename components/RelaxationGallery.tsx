"use client";

import { useState } from "react";
import Image from "next/image";

export default function RelaxationGallery() {
  const [activeTab, setActiveTab] = useState<"experience" | "facility">("experience");

  const experienceImages = [
    {
      src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop",
      title: "Traditional Lomi Lomi",
      description: "Experience authentic Hawaiian healing",
      category: "Massage",
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop",
      title: "Foot Reflexology",
      description: "Therapeutic pressure point massage",
      category: "Wellness",
    },
    {
      src: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&h=800&fit=crop",
      title: "Couples Retreat",
      description: "Share relaxation together",
      category: "Couples",
    },
    {
      src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&h=800&fit=crop",
      title: "Aromatherapy",
      description: "Soothing essential oils",
      category: "Wellness",
    },
  ];

  const facilityImages = [
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop",
      title: "Serene Treatment Rooms",
      description: "Peaceful private spaces",
      category: "Interior",
    },
    {
      src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=800&fit=crop",
      title: "Relaxation Lounge",
      description: "Unwind before and after",
      category: "Amenities",
    },
    {
      src: "https://images.unsplash.com/photo-1560185127-6a33746024c5?w=1200&h=800&fit=crop",
      title: "Couples Suite",
      description: "Luxurious shared experience",
      category: "Specialty",
    },
    {
      src: "https://images.unsplash.com/photo-1583416750470-965b2707b355?w=1200&h=800&fit=crop",
      title: "Wellness Garden",
      description: "Natural Hawaiian ambiance",
      category: "Exterior",
    },
  ];

  const images = activeTab === "experience" ? experienceImages : facilityImages;

  return (
    <section className="py-20 bg-warm-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-coral/30 to-transparent"></div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-ocean-blue mb-4">
            The Aloha Experience
          </h2>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Step into tranquility. Discover our serene spa environment and authentic Hawaiian treatments.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-stone-light/20 rounded-full p-1 border border-stone-light/40">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "experience"
                  ? "bg-ocean-blue text-white shadow-lg"
                  : "text-stone-dark hover:text-ocean-blue"
              }`}
            >
              <span className="mr-2">✨</span>
              Experience
            </button>
            <button
              onClick={() => setActiveTab("facility")}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === "facility"
                  ? "bg-ocean-blue text-white shadow-lg"
                  : "text-stone-dark hover:text-ocean-blue"
              }`}
            >
              <span className="mr-2">🌺</span>
              Our Spa
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
            {images.map((image, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-500 ${
                  index === 0 ? "md:row-span-2" : ""
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Image Container */}
                <div className={`relative ${index === 0 ? "aspect-[3/4]" : "aspect-[4/3]"} overflow-hidden`}>
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold border border-white/30">
                        {image.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="font-heading text-2xl md:text-3xl text-white mb-2 transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
                      {image.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base mb-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {image.description}
                    </p>

                    {/* View Details Button */}
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <button className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:gap-3 transition-all">
                        View Details
                        <span>→</span>
                      </button>
                    </div>
                  </div>

                  {/* Decorative Corner Element */}
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-ocean-blue/5 via-teal/5 to-ocean-blue/5 rounded-3xl p-8 border border-ocean-blue/10">
            <h3 className="font-heading text-2xl text-ocean-blue mb-3">
              Ready to Experience True Relaxation?
            </h3>
            <p className="text-charcoal-light mb-6 max-w-xl mx-auto">
              Join thousands of satisfied clients who have discovered the Aloha difference
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="inline-flex items-center justify-center bg-coral hover:bg-coral-dark text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 shadow-glow hover:shadow-2xl transform hover:scale-105"
              >
                <span className="mr-2">📅</span>
                Book Your Session
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center bg-white border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white font-bold text-lg py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">🌺</span>
                View All Services
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-ocean-blue mb-2">50K+</div>
            <div className="text-sm text-stone-dark">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-ocean-blue mb-2">4.7⭐</div>
            <div className="text-sm text-stone-dark">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-ocean-blue mb-2">Since 2019</div>
            <div className="text-sm text-stone-dark">Trusted Service</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-ocean-blue mb-2">100%</div>
            <div className="text-sm text-stone-dark">Natural Products</div>
          </div>
        </div>
      </div>
    </section>
  );
}
