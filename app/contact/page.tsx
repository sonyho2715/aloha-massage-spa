"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              We're here to help you relax and rejuvenate
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left: Contact Info */}
              <div>
                <h2 className="text-4xl font-bold text-primary mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                      📞
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Phone</h3>
                      <a
                        href="tel:8089121000"
                        className="text-lg text-gray-700 hover:text-accent transition-colors"
                      >
                        {t.phone}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Call to book your appointment or for any inquiries
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                      📍
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Address</h3>
                      <p className="text-lg text-gray-700">{t.address}</p>
                      <a
                        href="https://www.google.com/maps/place/Aloha+Massage+Spa/@21.2900189,-157.8350536,1015m/data=!3m3!1e3!4b1!5s0x7c006d8d33979db3:0x148a5d04f8d66a59!4m6!3m5!1s0x7c006d92cf3f892f:0x5e38cb9148efc810!8m2!3d21.2900139!4d-157.8324787!16s%2Fg%2F11fnyn629g?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-accent hover:text-accent-dark transition-colors"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                      ✉
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Email</h3>
                      <a
                        href="mailto:info@alohamassagespahi.com"
                        className="text-lg text-gray-700 hover:text-accent transition-colors"
                      >
                        {t.email}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        Send us an email for any questions
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                      ⏰
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Hours</h3>
                      <p className="text-lg text-gray-700">{t.hours}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Walk-ins welcome!
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <a
                    href="tel:8089121000"
                    className="inline-block bg-accent hover:bg-accent-dark text-white font-bold text-lg py-4 px-8 rounded-full transition-colors shadow-lg"
                  >
                    📞 Call Now to Book
                  </a>
                </div>
              </div>

              {/* Right: Map */}
              <div>
                <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4738935654937!2d-157.83505362499577!3d21.290013880401876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006d92cf3f892f%3A0x5e38cb9148efc810!2sAloha%20Massage%20Spa!5e0!3m2!1sen!2sus!4v1729462000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aloha Massage Spa Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Do I need an appointment?
                </h3>
                <p className="text-gray-700">
                  While walk-ins are welcome, we recommend calling ahead to ensure availability,
                  especially during peak hours (evenings and weekends).
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Is parking available?
                </h3>
                <p className="text-gray-700">
                  Yes! We have convenient parking available at our location on Kapiolani Blvd.
                  Street parking is also available nearby.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-700">
                  We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover),
                  and contactless payments. Gratuity is appreciated but not required.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-primary mb-3">
                  What should I bring?
                </h3>
                <p className="text-gray-700">
                  Just yourself! We provide everything you need including towels, robes, and
                  slippers. For body massages, you can undress to your comfort level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Relax?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Visit us today - we're conveniently located on Kapiolani Blvd
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8089121000"
              className="inline-block bg-white text-primary hover:bg-gray-100 font-bold text-xl py-4 px-12 rounded-full transition-colors shadow-lg"
            >
              📞 Call Now
            </a>
            <a
              href="https://www.google.com/maps/place/Aloha+Massage+Spa/@21.2900189,-157.8350536,1015m/data=!3m3!1e3!4b1!5s0x7c006d8d33979db3:0x148a5d04f8d66a59!4m6!3m5!1s0x7c006d92cf3f892f:0x5e38cb9148efc810!8m2!3d21.2900139!4d-157.8324787!16s%2Fg%2F11fnyn629g?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 hover:bg-white/20 border-2 border-white text-white font-bold text-xl py-4 px-12 rounded-full transition-colors"
            >
              🗺️ Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
