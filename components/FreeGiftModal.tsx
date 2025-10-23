"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function FreeGiftModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isClaimed, setIsClaimed] = useState(false);

  useEffect(() => {
    // Check if user has already seen the modal
    const hasSeenModal = localStorage.getItem("freeGiftModalSeen");

    if (!hasSeenModal) {
      // Show modal after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("freeGiftModalSeen", "true");
  };

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && phone) {
      setIsClaimed(true);
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors shadow-lg"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="relative h-64 md:h-full bg-gradient-to-br from-primary to-accent">
            <Image
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=800&fit=crop"
              alt="Free Gift"
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">🎁</div>
                <h3 className="text-3xl font-bold mb-2">
                  Exclusive Gift
                </h3>
                <p className="text-xl">
                  For First-Time Visitors
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="p-8 md:p-10">
            {!isClaimed ? (
              <>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  First Timer Special! 🌺
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Get <span className="font-bold text-accent text-3xl">$10 OFF</span> your first massage session!
                </p>

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl mb-6">
                  <h3 className="font-bold text-primary mb-3">Special Offer Includes:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>$10 discount on any massage service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Valid for all service durations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>No expiration date - use when you're ready!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent">✓</span>
                      <span>Plus: Enter to win a lottery ticket when you check in!</span>
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleClaim} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-full focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="(808) 555-0123"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-full focus:border-accent focus:outline-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    Claim My $10 OFF Coupon 🎁
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Valid for first-time visitors only. One per customer.
                </p>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✨</div>
                <h2 className="text-3xl font-bold text-primary mb-4">
                  Gift Claimed!
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  We've sent the $10 OFF coupon to your email. Call us to book your appointment and mention code "FIRST10". Don't forget to check in at the store to enter our lottery drawing!
                </p>
                <a
                  href="tel:8089121000"
                  className="inline-block bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all"
                >
                  📞 Call to Book Now
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
