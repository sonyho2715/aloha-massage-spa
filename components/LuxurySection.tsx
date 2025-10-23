"use client";

import Link from "next/link";

export default function LuxurySection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/spa-interior.jpg)' }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-accent/20 backdrop-blur-sm border border-accent/30 px-6 py-2 rounded-full mb-6 animate-fade-in">
            <span className="text-accent font-semibold">LUXURY SPA EXPERIENCE</span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Where Luxury Meets
            <span className="block text-accent mt-2">Authentic Healing</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Step into our elegant sanctuary featuring state-of-the-art massage rooms,
            soothing ambiance, and professional therapists dedicated to your complete relaxation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-white mb-2">Premium Facilities</h3>
              <p className="text-white/80 text-sm">
                Luxurious massage rooms with crystal chandeliers and ambient lighting
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift">
              <div className="text-4xl mb-3">🛋️</div>
              <h3 className="text-xl font-bold text-white mb-2">Comfort First</h3>
              <p className="text-white/80 text-sm">
                Premium massage tables and heated blankets for ultimate comfort
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover-lift">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="text-xl font-bold text-white mb-2">Peaceful Ambiance</h3>
              <p className="text-white/80 text-sm">
                Calming music and aromatherapy for complete sensory relaxation
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="tel:8089121000"
              className="inline-flex items-center justify-center bg-gradient-to-r from-accent to-primary text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-2xl transform hover:scale-110 animate-pulse-glow"
            >
              📞 Book Your Luxury Experience
            </a>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/40 font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg transform hover:scale-105"
            >
              View Gallery
            </Link>
          </div>

          {/* Features List */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-accent text-2xl font-bold mb-1">8</div>
              <div className="text-white/70 text-sm">Massage Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-2xl font-bold mb-1">Private</div>
              <div className="text-white/70 text-sm">Couples Suite</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-2xl font-bold mb-1">24/7</div>
              <div className="text-white/70 text-sm">Sanitization</div>
            </div>
            <div className="text-center">
              <div className="text-accent text-2xl font-bold mb-1">WiFi</div>
              <div className="text-white/70 text-sm">Complimentary</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
}
