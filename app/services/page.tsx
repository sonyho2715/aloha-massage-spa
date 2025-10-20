"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      id: "foot-massage",
      title: "Foot Massage",
      tagline: "Rejuvenate from the ground up",
      description: "Experience the ultimate relaxation with our therapeutic foot massage. Your feet carry you through life – give them the care they deserve.",
      duration: "30 or 60 minutes",
      prices: { "30 min": "$35", "60 min": "$55" },
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop",
      benefits: [
        "Relieves tension and reduces foot pain",
        "Improves blood circulation",
        "Reduces stress and promotes relaxation",
        "Helps with plantar fasciitis relief",
        "Enhances overall foot health",
        "Stimulates pressure points connected to entire body"
      ],
      technique: "Our foot massage combines reflexology principles with traditional massage techniques. We focus on pressure points in your feet that correspond to different organs and systems in your body, promoting overall wellness.",
      idealFor: "Perfect for those who spend long hours standing, runners, hikers, or anyone seeking deep relaxation. Also ideal for relieving symptoms of plantar fasciitis and general foot fatigue.",
      whatToExpect: "You'll be seated in a comfortable massage chair. Our therapist will begin with a warm foot soak infused with essential oils, followed by a thorough massage of both feet, ankles, and lower legs. The session includes gentle stretching and pressure point work."
    },
    {
      id: "full-body",
      title: "Full Body Massage",
      tagline: "Complete relaxation from head to toe",
      description: "Our signature full body massage is designed to melt away tension and restore balance to your body, mind, and spirit using authentic Hawaiian techniques.",
      duration: "60 or 90 minutes",
      prices: { "60 min": "$70", "90 min": "$110" },
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop",
      popular: true,
      benefits: [
        "Reduces muscle tension and chronic pain",
        "Improves flexibility and range of motion",
        "Boosts immune system function",
        "Enhances sleep quality",
        "Reduces anxiety and depression",
        "Improves circulation and skin tone",
        "Releases endorphins (natural painkillers)"
      ],
      technique: "We blend traditional Hawaiian lomilomi massage with Swedish and deep tissue techniques. Long, flowing strokes mimic the waves of the ocean, while targeted pressure work releases deep-seated tension. Warm oil is used to enhance the experience.",
      idealFor: "Anyone seeking stress relief, athletes recovering from training, office workers with neck and back pain, or those simply wanting to experience the ultimate in relaxation therapy.",
      whatToExpect: "You'll lie comfortably on a heated massage table, draped with soft linens. Your therapist will customize the pressure and technique to your preferences, working through each muscle group systematically. The session includes your back, legs, arms, neck, shoulders, and head."
    },
    {
      id: "custom-massage",
      title: "30 Minute Custom Massage",
      tagline: "Targeted relief where you need it most",
      description: "Short on time but need relief? Our 30-minute custom massage targets your specific problem areas with focused therapeutic work.",
      duration: "30 minutes",
      prices: { "30 min": "$45" },
      image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1200&h=800&fit=crop",
      benefits: [
        "Focused relief for specific problem areas",
        "Perfect for busy schedules",
        "Targets chronic pain points",
        "Reduces headaches and migraines",
        "Relieves shoulder and neck tension",
        "Quick stress relief"
      ],
      technique: "This is a results-focused session where you communicate your main concerns, and our therapist dedicates the entire time to those specific areas. We use a combination of deep tissue, trigger point therapy, and stretching as needed.",
      idealFor: "Busy professionals, those with specific chronic pain issues (like tension headaches, frozen shoulder, or lower back pain), or anyone who wants maintenance work between full body sessions.",
      whatToExpect: "After discussing your concerns, your therapist will focus exclusively on 1-2 problem areas. This might be your neck and shoulders, lower back, or any combination you choose. The pressure will be firm and therapeutic, designed for maximum benefit in minimal time."
    },
    {
      id: "combination",
      title: "Combination Massage",
      tagline: "The best of both worlds",
      description: "Can't decide between foot and body massage? Get both! This popular combination service gives you the perfect blend of relaxation and therapeutic benefit.",
      duration: "60 or 90 minutes",
      prices: { "60 min": "$80", "90 min": "$120" },
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop",
      benefits: [
        "Complete body and foot rejuvenation",
        "Enhanced circulation throughout entire body",
        "Deep relaxation from head to toe",
        "Comprehensive stress relief",
        "Better value than separate sessions",
        "Addresses both specific and general tension"
      ],
      technique: "Your session begins with a therapeutic foot massage including reflexology work, then transitions to upper body massage focusing on your back, shoulders, neck, and arms. The combination creates a comprehensive wellness experience.",
      idealFor: "First-time spa visitors who want to try everything, anyone seeking maximum relaxation, or those who want both targeted foot relief and full body stress reduction.",
      whatToExpect: "Start seated for your foot massage with warm aromatherapy foot soak, then move to the massage table for upper body work. The transition is seamless and the combination creates a deeply restorative experience that leaves you feeling completely renewed."
    },
    {
      id: "couples",
      title: "Couples Full Body Massage",
      tagline: "Share the healing experience",
      description: "Connect and relax together with our couples massage. Two therapists work simultaneously in our couples suite, creating a shared wellness experience perfect for partners, friends, or family.",
      duration: "60 or 90 minutes",
      prices: { "60 min": "$140", "90 min": "$220" },
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1200&h=800&fit=crop",
      popular: true,
      benefits: [
        "Shared relaxation experience",
        "Strengthens emotional connection",
        "Reduces stress for both partners",
        "Creates lasting positive memories",
        "Promotes mutual well-being",
        "Perfect for special occasions",
        "More comfortable for first-timers"
      ],
      technique: "Two skilled therapists provide simultaneous full body massages using our signature Hawaiian-inspired techniques. Each person's massage is customized to their individual preferences and needs.",
      idealFor: "Couples celebrating anniversaries or special occasions, friends wanting to share a spa day, parent-child bonding, or anyone who prefers experiencing massage with a loved one nearby.",
      whatToExpect: "You and your partner will be welcomed into our private couples suite with two side-by-side massage tables. After consultation, you'll both receive full body massages simultaneously. Soft music, aromatherapy, and dim lighting create an intimate, peaceful atmosphere. Pressure and technique are individually customized for each person."
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
              Our Massage Services
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Professional therapeutic massage tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-blue-50 to-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Service Header */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {service.title}
                  {service.popular && (
                    <span className="ml-4 text-lg bg-accent text-white px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                </h2>
                <p className="text-2xl text-accent font-semibold mb-6">
                  {service.tagline}
                </p>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  {service.description}
                </p>
              </div>

              {/* Image and Pricing */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-6">Pricing</h3>
                  <div className="space-y-4 mb-8">
                    {Object.entries(service.prices).map(([duration, price]) => (
                      <div key={duration} className="flex justify-between items-center text-xl">
                        <span className="font-semibold">{duration}</span>
                        <span className="text-3xl font-bold">{price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <a
                      href="tel:8089121000"
                      className="block w-full bg-white text-primary hover:bg-gray-100 font-bold text-lg py-4 px-6 rounded-full transition-colors text-center"
                    >
                      📞 Call to Book
                    </a>
                    <p className="text-sm text-center opacity-90">
                      Walk-ins welcome! Open 9 AM - 9 PM daily
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Benefits</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                        ✓
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Technique</h3>
                  <p className="text-gray-700">{service.technique}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Ideal For</h3>
                  <p className="text-gray-700">{service.idealFor}</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">What to Expect</h3>
                  <p className="text-gray-700">{service.whatToExpect}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Add-ons Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Enhance Your Experience
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="font-bold text-primary mb-2">Hot Stone</h3>
                <p className="text-gray-600 text-sm">Add +$15</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-3">🌿</div>
                <h3 className="font-bold text-primary mb-2">Aromatherapy</h3>
                <p className="text-gray-600 text-sm">Add +$10</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-3">💧</div>
                <h3 className="font-bold text-primary mb-2">CBD Oil</h3>
                <p className="text-gray-600 text-sm">Add +$20</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-3">🧴</div>
                <h3 className="font-bold text-primary mb-2">Deep Tissue</h3>
                <p className="text-gray-600 text-sm">Included</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Do I need to book in advance?
                </h3>
                <p className="text-gray-700">
                  While we welcome walk-ins, we recommend calling ahead to check availability,
                  especially during peak hours (evenings and weekends). Booking in advance
                  ensures you get your preferred time slot.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-3">
                  What should I wear?
                </h3>
                <p className="text-gray-700">
                  Wear comfortable clothing. For foot massages, you'll remain fully clothed.
                  For body massages, you'll undress to your comfort level and be properly
                  draped with sheets. Your privacy and comfort are our top priorities.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Can I request a specific therapist?
                </h3>
                <p className="text-gray-700">
                  Yes! If you have a preferred therapist, please let us know when booking.
                  All our therapists are highly skilled, but we understand if you've found
                  someone whose style you particularly enjoy.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-primary mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-700">
                  We accept cash, all major credit cards, and digital payments. Gratuity
                  for your therapist is appreciated but not required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Book Your Massage?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us today or stop by – walk-ins always welcome!
          </p>
          <a
            href="tel:8089121000"
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold text-xl py-4 px-12 rounded-full transition-colors shadow-lg"
          >
            📞 (808) 912-1000
          </a>
          <p className="mt-6 text-lg opacity-90">
            Open Daily: 9:00 AM - 9:00 PM
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
