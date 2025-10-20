"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Gallery
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Step into serenity - experience the tranquil atmosphere of Aloha Massage Spa
            </p>
          </div>
        </div>
      </section>

      <Gallery />

      <Footer />
    </main>
  );
}
