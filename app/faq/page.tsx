"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: "Booking & Appointments",
      questions: [
        {
          q: "Do I need an appointment or do you accept walk-ins?",
          a: "We welcome both! While appointments are recommended to ensure your preferred time and therapist, we happily accommodate walk-ins based on availability. Call (808) 942-5000 to check current availability or just stop by!"
        },
        {
          q: "How far in advance should I book?",
          a: "For your preferred therapist and time slot, we recommend booking 1-3 days in advance. However, we often have same-day availability, especially during weekdays."
        },
        {
          q: "Can I request a specific therapist?",
          a: "Yes! You can request Angela, Tony, or Andy when booking. Each brings unique expertise. Angela excels in customer care and lomilomi, Tony specializes in therapeutic massage, and Andy is our deep tissue specialist."
        },
        {
          q: "What's your cancellation policy?",
          a: "We request at least 2 hours notice for cancellations. Late cancellations or no-shows may incur a cancellation fee. We understand emergencies happen—just give us a call!"
        }
      ]
    },
    {
      category: "Before Your Visit",
      questions: [
        {
          q: "What should I wear to my massage appointment?",
          a: "Wear comfortable clothing. You'll undress to your comfort level in a private room. We provide sheets and draping to ensure you're covered during the massage. Most clients undress completely, but you can keep underwear on if preferred."
        },
        {
          q: "Should I arrive early?",
          a: "Please arrive 5-10 minutes early for first-time visits to complete a brief health history form. This helps us customize your massage to your needs."
        },
        {
          q: "Can I eat before my massage?",
          a: "We recommend eating a light meal 1-2 hours before your massage. Avoid heavy meals right before, as it can make you uncomfortable lying on your stomach."
        },
        {
          q: "What if I'm pregnant?",
          a: "Congratulations! We offer prenatal massage but recommend getting your doctor's approval first, especially during the first trimester. Let us know when booking so we can make special accommodations."
        }
      ]
    },
    {
      category: "During Your Session",
      questions: [
        {
          q: "How much pressure should I expect?",
          a: "Pressure is completely customizable to your preference! Angela and Tony offer light to firm pressure. Andy specializes in deep tissue with intense pressure—perfect for stubborn knots but can be strong. Always communicate during your session if you want more or less pressure."
        },
        {
          q: "What if the pressure is too much or too little?",
          a: "Please speak up immediately! Your comfort is our priority. Saying 'lighter please' or 'more pressure on my shoulders' helps us give you the best experience."
        },
        {
          q: "Is it okay to talk during the massage?",
          a: "Entirely up to you! Some clients prefer quiet relaxation, others enjoy conversation. We follow your lead. Feel free to ask questions, request adjustments, or simply zone out."
        },
        {
          q: "What oils do you use?",
          a: "We use organic essential oils and lotions. If you have allergies or sensitivities, please let your therapist know before the session. We can accommodate sensitive skin."
        }
      ]
    },
    {
      category: "Payment & Pricing",
      questions: [
        {
          q: "What are your prices?",
          a: "Prices range from $35 for a 30-minute foot massage to $220 for a 90-minute couples massage. Our most popular full body massage is $70 for 60 minutes or $110 for 90 minutes. See our Services page for complete pricing."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), and debit cards. Payment is due at time of service."
        },
        {
          q: "Do you accept insurance?",
          a: "We do not directly bill insurance. However, we can provide a receipt for you to submit to your insurance company if you have coverage for massage therapy."
        },
        {
          q: "What about tipping?",
          a: "Gratuities are optional but greatly appreciated for exceptional service. Standard tipping is 15-20% of the service cost."
        },
        {
          q: "Do you offer gift certificates?",
          a: "Yes! Gift certificates are perfect for birthdays, holidays, and special occasions. Call us at (808) 942-5000 to purchase."
        }
      ]
    },
    {
      category: "Health & Safety",
      questions: [
        {
          q: "Do I need to disclose medical conditions?",
          a: "Yes, please! Certain conditions require modifications or may contraindicate massage. Disclose: recent injuries, surgeries, cardiovascular issues, blood clots, pregnancy, cancer, infectious diseases, or chronic conditions."
        },
        {
          q: "When should I NOT get a massage?",
          a: "Avoid massage if you have: fever/infection, acute injury (first 48 hours), uncontrolled high blood pressure, blood clots, open wounds, or recent surgery without doctor approval. When in doubt, consult your physician."
        },
        {
          q: "Is massage therapy painful?",
          a: "Massage should not be painful! Deep tissue work (especially with Andy) can feel intense, but should be a 'good pain' not sharp or unbearable. You should never hold your breath or tense up from pain. Speak up if it hurts!"
        },
        {
          q: "Will I be sore after my massage?",
          a: "Some soreness is normal after deep tissue massage, similar to post-workout soreness. It typically resolves within 24-48 hours. Drink plenty of water and use ice if needed. Light soreness is fine; severe pain is not—call us if concerned."
        }
      ]
    },
    {
      category: "Location & Hours",
      questions: [
        {
          q: "Where are you located?",
          a: "We're at 1960 Kapiolani Blvd, Suite 202, Honolulu, HI 96826 on the 2nd floor of McCully Shopping Center. Elevator available!"
        },
        {
          q: "What are your hours?",
          a: "We're open 7 days a week, 10:00 AM to 11:00 PM. Yes, we're open late! Perfect for after-work appointments."
        },
        {
          q: "Is parking available?",
          a: "Yes! Free parking is available at McCully Shopping Center. We're easy to find on the 2nd floor."
        },
        {
          q: "How close are you to Waikiki?",
          a: "We're just 10 minutes from Waikiki—convenient for tourists and locals alike. Perfect for a post-beach relaxation session!"
        }
      ]
    },
    {
      category: "Special Offers",
      questions: [
        {
          q: "Do you have any promotions?",
          a: "Yes! Check in during your visit for a FREE entry to win a Hawaii State Lottery ticket (drawn monthly). We also offer special deals through Groupon. First-time newsletter subscribers get $10 off!"
        },
        {
          q: "Do you offer couples packages?",
          a: "Absolutely! Our couples massage allows you and your partner to enjoy side-by-side massages. Perfect for anniversaries, date nights, or just quality time together. $140 for 60 minutes or $220 for 90 minutes."
        },
        {
          q: "Do you have loyalty programs?",
          a: "We appreciate our regular clients! Ask about our frequent visitor benefits when you call to book."
        }
      ]
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Everything you need to know about Aloha Massage Spa
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 bg-blue-50 border-b">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-700 mb-4">
            Can't find your answer? We're here to help!
          </p>
          <a
            href="tel:8089425000"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-6 py-3 rounded-full transition-colors"
          >
            📞 Call (808) 942-5000
          </a>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, catIdx) => (
              <div key={catIdx} className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-accent rounded-full"></span>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq, qIdx) => {
                    const globalIndex = catIdx * 100 + qIdx;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={qIdx}
                        className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md overflow-hidden border border-blue-100"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-blue-100 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 text-lg">
                            {faq.q}
                          </span>
                          <span className={`flex-shrink-0 text-2xl text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}>
                            ▼
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4 text-gray-700 leading-relaxed border-t border-blue-100 pt-4">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Massage?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Walk-ins welcome or call ahead to reserve your spot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8089425000"
              className="inline-block bg-white text-primary hover:bg-gray-100 font-bold text-xl py-4 px-12 rounded-full transition-colors shadow-lg"
            >
              📞 Call Now
            </a>
            <a
              href="/contact"
              className="inline-block bg-accent-dark hover:bg-accent text-white font-bold text-xl py-4 px-12 rounded-full transition-colors shadow-lg border-2 border-white"
            >
              📍 Get Directions
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </main>
  );
}
