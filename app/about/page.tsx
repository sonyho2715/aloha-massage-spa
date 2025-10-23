"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Aloha Massage Spa
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Bringing the healing spirit of Hawaii to Honolulu since 2019
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/IMG_6276.jpg"
                    alt="Angela Yang - Owner & Master Therapist at Aloha Massage Spa"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-center text-sm text-gray-600 mt-3 italic">
                  Angela Yang, Licensed Massage Therapist #MAT-14098
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Founded in 2019 by Angela Yang, Aloha Massage Spa has been a sanctuary of relaxation
                    and healing in the heart of Honolulu. Our mission is simple: to bring
                    the authentic Hawaiian healing traditions to every guest who walks through
                    our doors, treating each person like 'ohana (family).
                  </p>
                  <p>
                    Led by owner and master therapist Angela Yang (Licensed #MAT-14098),
                    our team of skilled therapists—including Tony and Andy—combines traditional Hawaiian
                    lomilomi techniques with modern massage therapy to provide a truly unique
                    and transformative experience. Angela's warm welcome and genuine care set the tone
                    for your entire visit.
                  </p>
                  <p>
                    At Aloha Massage Spa, we believe in the power of touch to heal the body,
                    calm the mind, and restore the spirit. Every session is personalized to
                    meet your individual needs, whether you're seeking relief from chronic pain,
                    stress reduction, or simply a moment of peaceful escape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-16">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1590736969955-71cc94901144?w=200&h=200&fit=crop"
                    alt="Aloha Spirit"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Aloha Spirit</h3>
                <p className="text-gray-700">
                  We embody the Hawaiian spirit of love, compassion, and respect in
                  everything we do. Every guest is treated like family (ohana).
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=200&h=200&fit=crop"
                    alt="Excellence"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Excellence</h3>
                <p className="text-gray-700">
                  Our licensed therapists are highly trained professionals with 10+ years
                  of experience, committed to delivering the highest quality massage therapy.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=200&h=200&fit=crop"
                    alt="Healing"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Healing</h3>
                <p className="text-gray-700">
                  We believe in the therapeutic power of massage to promote physical healing,
                  mental clarity, and emotional balance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-16">
              Why Choose Aloha Massage Spa
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Licensed & Certified Therapists
                  </h3>
                  <p className="text-gray-700">
                    All our massage therapists are state-licensed and certified in various
                    massage modalities including lomilomi, Swedish, deep tissue, and sports massage.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Authentic Hawaiian Techniques
                  </h3>
                  <p className="text-gray-700">
                    Experience traditional lomilomi massage, an ancient Hawaiian healing art
                    passed down through generations, combined with modern therapeutic methods.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Clean & Relaxing Environment
                  </h3>
                  <p className="text-gray-700">
                    Our spa maintains the highest standards of cleanliness and hygiene.
                    Every room is designed to create a peaceful, calming atmosphere.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Flexible Hours & Walk-Ins
                  </h3>
                  <p className="text-gray-700">
                    Open 7 days a week from 10 AM to 11 PM. We welcome walk-ins and offer
                    flexible scheduling to fit your busy lifestyle.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Affordable Pricing
                  </h3>
                  <p className="text-gray-700">
                    Quality massage therapy doesn't have to break the bank. We offer
                    competitive pricing with no hidden fees.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    50,000+ Happy Clients
                  </h3>
                  <p className="text-gray-700">
                    Join thousands of satisfied clients who have experienced the healing
                    benefits of our massage services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-16">
              Our Expert Team
            </h2>
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <p className="text-lg text-gray-700 text-center mb-8">
                Our team consists of highly skilled, licensed massage therapists who are
                passionate about helping you achieve optimal health and wellness. Each
                therapist brings unique expertise and a genuine commitment to your well-being.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&h=300&fit=crop"
                      alt="Experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">10+ Years</h3>
                  <p className="text-gray-600">Average Experience</p>
                </div>
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=300&fit=crop"
                      alt="Certified"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">100%</h3>
                  <p className="text-gray-600">Licensed & Certified</p>
                </div>
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1529973625058-8869efd7760a?w=300&h=300&fit=crop"
                      alt="Reviews"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">5-Star</h3>
                  <p className="text-gray-600">Client Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Experience the Aloha Spirit?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your massage today and discover why we're Honolulu's favorite spa
          </p>
          <a
            href="tel:8089425000"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold text-xl py-4 px-12 rounded-full transition-colors shadow-lg"
          >
            📞 Call (808) 942-5000
          </a>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </main>
  );
}
