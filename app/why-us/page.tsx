"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

export default function WhyUsPage() {
  const reasons = [
    {
      icon: "🕐",
      title: "Open Late Until 11 PM",
      description: "Unlike most spas that close at 9 PM, we're here when you need us most—after work, after dinner, whenever relaxation calls. 7 days a week, 10 AM to 11 PM.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "🚪",
      title: "Walk-Ins Always Welcome",
      description: "No appointment? No problem! We accommodate walk-ins based on availability. Perfect for spontaneous self-care or last-minute vacation relaxation.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "⭐",
      title: "4.7★ Rating with 750+ Reviews",
      description: "Don't just take our word for it—over 750 verified reviews on Yelp, Google, and Groupon consistently praise our skilled therapists and welcoming atmosphere.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🌿",
      title: "100% Organic Products",
      description: "Your skin deserves the best. We use only organic essential oils and natural lotions. No harsh chemicals, just pure Hawaiian healing enhanced with aromatherapy.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: "💰",
      title: "Affordable Luxury Pricing",
      description: "Premium massage shouldn't cost a fortune. From $35 foot massage to $110 for 90-minute full body, we offer exceptional value without compromising quality.",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: "🎟️",
      title: "FREE Lottery Ticket Entry",
      description: "Unique to our spa! Check in during your visit for a FREE entry to win a Hawaii State Lottery ticket (drawn monthly). Only at Aloha Massage Spa!",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "👥",
      title: "Expert Licensed Therapists",
      description: "Meet our team: Angela (customer care & lomilomi specialist), Tony (therapeutic massage expert), and Andy (deep tissue master). All licensed, insured, and dedicated to your wellness.",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: "🌐",
      title: "Multilingual Support",
      description: "We speak your language! Service available in English, Vietnamese, Chinese, and Japanese. Everyone deserves to feel comfortable and understood.",
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: "📍",
      title: "Prime Honolulu Location",
      description: "Just 10 minutes from Waikiki at McCully Shopping Center. Free parking, elevator access, and easy to find. Perfect for tourists and locals alike!",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: "✓",
      title: "Licensed & Insured",
      description: "State of Hawaii Licensed Massage Therapy Establishment #MAT-14098. Fully insured for your peace of mind. Professional, safe, and compliant.",
      color: "from-gray-600 to-gray-700"
    },
    {
      icon: "🏆",
      title: "50,000+ Happy Clients",
      description: "Since 2019, we've welcomed over 50,000 guests with Hawaiian hospitality and healing touch. Join our 'ohana (family) of satisfied clients!",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: "🎯",
      title: "Customizable Pressure",
      description: "Your comfort, your way. Whether you prefer light Swedish relaxation or Andy's intense deep tissue, we tailor pressure to your exact needs. Just ask!",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Why Choose Aloha Massage Spa?
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              12 reasons why we're Honolulu's favorite massage destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8089425000"
                className="inline-block bg-white text-primary hover:bg-gray-100 font-bold text-xl py-4 px-12 rounded-full transition-colors shadow-lg"
              >
                📞 Call (808) 942-5000
              </a>
              <a
                href="/services"
                className="inline-block bg-accent-dark hover:bg-accent text-white font-bold text-xl py-4 px-12 rounded-full transition-colors shadow-lg border-2 border-white"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${reason.color} flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {reason.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 text-center">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-center">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
              How We Compare
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Feature</th>
                    <th className="px-6 py-4 text-center font-bold">Aloha Massage Spa</th>
                    <th className="px-6 py-4 text-center font-bold">Typical Competitor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold">Hours</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">10 AM - 11 PM</td>
                    <td className="px-6 py-4 text-center text-gray-500">10 AM - 9 PM</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold">Walk-Ins</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ Welcome</td>
                    <td className="px-6 py-4 text-center text-gray-500">Appointment Only</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold">60-Min Full Body</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">$70</td>
                    <td className="px-6 py-4 text-center text-gray-500">$90-120</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold">Organic Products</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ 100%</td>
                    <td className="px-6 py-4 text-center text-gray-500">Sometimes</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold">Languages</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">4 Languages</td>
                    <td className="px-6 py-4 text-center text-gray-500">English Only</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold">Verified Reviews</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">750+ (4.7★)</td>
                    <td className="px-6 py-4 text-center text-gray-500">50-200</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-6 py-4 font-semibold">Lottery Bonus</td>
                    <td className="px-6 py-4 text-center text-green-600 font-bold">✓ FREE Entry</td>
                    <td className="px-6 py-4 text-center text-gray-500">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="text-6xl mb-4">💙</div>
              <blockquote className="text-2xl text-gray-700 italic mb-6">
                "Best massage I've ever had! Angela was very welcoming and provides amazing customer care. The organic oils smell wonderful and the atmosphere is so relaxing. I come here every month!"
              </blockquote>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-yellow-400 text-2xl">★★★★★</span>
              </div>
              <p className="font-bold text-primary">Sarah J. - Yelp Verified Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience the Aloha Difference Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join over 50,000 satisfied clients who've discovered Honolulu's best-kept massage secret. Book now and feel the difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8089425000"
              className="inline-block bg-white text-primary hover:bg-gray-100 font-bold text-xl py-4 px-12 rounded-full transition-colors shadow-lg"
            >
              📞 Call Now - (808) 942-5000
            </a>
            <a
              href="/contact"
              className="inline-block bg-accent-dark hover:bg-accent text-white font-bold text-xl py-4 px-12 rounded-full transition-colors shadow-lg border-2 border-white"
            >
              📍 Visit Us Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </main>
  );
}
