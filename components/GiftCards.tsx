"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Link from "next/link";
import { useState } from "react";

export default function GiftCards() {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState(100);

  const giftCardOptions = [
    { amount: 50, popular: false, bestFor: "Foot Reflexology" },
    { amount: 100, popular: true, bestFor: "Full Body Massage" },
    { amount: 150, popular: false, bestFor: "Couples Massage" },
    { amount: 200, popular: false, bestFor: "Spa Day Package" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-plumeria-light via-warm-white to-sand-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-6xl">🎁</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-ocean-blue mb-4">
              Gift Cards
            </h2>
            <p className="text-xl text-charcoal-light max-w-2xl mx-auto leading-relaxed">
              Share the gift of relaxation and wellness. Perfect for birthdays, holidays, or just because.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Gift Card Preview */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-ocean-blue via-teal to-ocean-blue-dark rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 400 250">
                    <pattern id="hibiscus" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                      <circle cx="50" cy="50" r="20" fill="white" opacity="0.2"/>
                    </pattern>
                    <rect width="400" height="250" fill="url(#hibiscus)"/>
                  </svg>
                </div>

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <h3 className="text-white font-heading text-2xl mb-1">Aloha Massage Spa</h3>
                      <p className="text-white/80 text-sm">Gift Certificate</p>
                    </div>
                    <div className="text-4xl">🌺</div>
                  </div>

                  <div className="mb-8">
                    <div className="text-white/70 text-sm mb-2">Card Value</div>
                    <div className="text-white font-bold text-5xl">${selectedAmount}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-white/60 text-xs">
                      Valid for all services
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-xs font-semibold">
                      No Expiration
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-3xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-3xl"></div>
              </div>

              {/* Floating Benefits */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-soft border border-sand-dark/20">
                  <div className="text-2xl mb-2">📧</div>
                  <div className="text-sm font-semibold text-ocean-blue">Instant Delivery</div>
                  <div className="text-xs text-stone-dark">Email or Print</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-soft border border-sand-dark/20">
                  <div className="text-2xl mb-2">♾️</div>
                  <div className="text-sm font-semibold text-ocean-blue">Never Expires</div>
                  <div className="text-xs text-stone-dark">Use Anytime</div>
                </div>
              </div>
            </div>

            {/* Right Side - Amount Selection */}
            <div>
              <h3 className="text-2xl font-heading text-ocean-blue mb-6">Choose Amount</h3>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {giftCardOptions.map((option) => (
                  <button
                    key={option.amount}
                    onClick={() => setSelectedAmount(option.amount)}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedAmount === option.amount
                        ? "border-coral bg-coral/5 shadow-glow"
                        : "border-stone-light/40 bg-white hover:border-ocean-blue/40 hover:shadow-soft"
                    }`}
                  >
                    {option.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-coral text-white px-3 py-1 rounded-full text-xs font-bold">
                        Most Popular
                      </div>
                    )}
                    <div className={`text-3xl font-bold mb-2 ${
                      selectedAmount === option.amount ? "text-coral" : "text-ocean-blue"
                    }`}>
                      ${option.amount}
                    </div>
                    <div className="text-xs text-stone-dark">{option.bestFor}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-ocean-blue mb-2">
                  Or Enter Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-ocean-blue">
                    $
                  </span>
                  <input
                    type="number"
                    min="25"
                    max="500"
                    value={selectedAmount}
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-4 text-2xl font-bold text-ocean-blue border-2 border-stone-light/40 rounded-2xl focus:border-ocean-blue focus:ring-4 focus:ring-ocean-blue/20 transition-all"
                  />
                </div>
                <p className="text-xs text-stone-dark mt-2">Minimum $25, Maximum $500</p>
              </div>

              {/* Purchase Button */}
              <Link
                href={`/gift-cards/purchase?amount=${selectedAmount}`}
                className="block w-full bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white font-bold text-xl py-5 px-8 rounded-full text-center shadow-glow hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">🎁</span>
                Purchase Gift Card - ${selectedAmount}
              </Link>

              {/* Additional Info */}
              <div className="mt-6 bg-sage-light/20 border border-sage/30 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💝</div>
                  <div>
                    <h4 className="font-semibold text-sage-dark mb-1">Personalize Your Gift</h4>
                    <p className="text-sm text-charcoal-light">
                      Add a custom message and choose delivery date during checkout
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🎉</div>
              <h4 className="font-heading text-lg text-ocean-blue mb-2">Perfect for Any Occasion</h4>
              <p className="text-sm text-stone-dark">Birthdays, anniversaries, holidays, or appreciation gifts</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🔒</div>
              <h4 className="font-heading text-lg text-ocean-blue mb-2">Secure & Easy</h4>
              <p className="text-sm text-stone-dark">Safe checkout with instant email delivery</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-heading text-lg text-ocean-blue mb-2">Flexible Redemption</h4>
              <p className="text-sm text-stone-dark">Use for any service, any time, never expires</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
