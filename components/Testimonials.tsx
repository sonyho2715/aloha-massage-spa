"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      text: "Best massage I've ever had! The therapists are incredibly skilled and the atmosphere is so relaxing. I come here every month and always leave feeling refreshed and rejuvenated.",
      verified: true
    },
    {
      name: "Michael Chen",
      rating: 5,
      date: "1 month ago",
      text: "My wife and I had the couples massage for our anniversary. It was absolutely perfect! Professional service, clean facilities, and the Hawaiian techniques are amazing. Highly recommend!",
      verified: true
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      date: "3 weeks ago",
      text: "I was a walk-in and they accommodated me right away. The foot massage was heavenly and the prices are very reasonable. Definitely my new go-to spot for relaxation!",
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t.testimonialsTitle}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xl">
            <div className="flex text-yellow-400">
              {"★".repeat(5)}
            </div>
            <span className="font-bold">5.0</span>
            <span className="text-gray-600">· Based on 247 reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating and Date */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-yellow-400 text-xl">
                  {"★".repeat(testimonial.rating)}
                </div>
                <span className="text-sm text-gray-500">{testimonial.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  {testimonial.verified && (
                    <div className="text-sm text-gray-600 flex items-center gap-1">
                      <span className="text-green-600">✓</span> Verified Customer
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">See what our clients are saying</p>
          <a
            href="https://www.google.com/maps/place/Aloha+Massage+Spa/@21.3004,-157.8468,15z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border-2 border-gray-300 hover:border-primary text-gray-700 hover:text-primary font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
