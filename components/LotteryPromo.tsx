"use client";

import Image from "next/image";

export default function LotteryPromo() {
  // Calculate next drawing date (beginning of November 2025)
  const getNextDrawingDate = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-11

    // If we're before November, use November of current year
    // If we're in or after November, use November of next year
    const drawingYear = currentMonth < 10 ? currentYear : currentYear + 1;
    const drawingDate = new Date(drawingYear, 10, 1); // November 1st

    return drawingDate.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-300 rounded-full opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Visual */}
            <div className="relative">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&h=800&fit=crop"
                  alt="Hand Picking Lottery Ticket"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-2xl font-bold">Every Visit is a Chance to Win!</p>
                </div>
              </div>

              {/* Floating lottery ticket */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-6xl mb-2">🎟️</div>
                <p className="font-bold text-primary text-lg">Free Entry!</p>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
                LIMITED TIME OFFER
              </div>

              <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
                Win a Lottery Ticket!
              </h2>

              <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                Check in at our spa and get a <span className="font-bold text-orange-600">FREE entry</span> to win a Hawaii State Lottery ticket!
              </p>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">How to Enter:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Visit Our Spa</h4>
                      <p className="text-gray-600">Come in for any massage service</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Check In at Front Desk</h4>
                      <p className="text-gray-600">Let us know you want to enter the lottery drawing</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Get Your Entry</h4>
                      <p className="text-gray-600">Receive your lottery ticket entry - FREE with your visit!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-xl p-4 mb-8 animate-pulse">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🎉</span>
                  <div>
                    <p className="font-bold text-gray-900">Winner Drawn Monthly!</p>
                    <p className="text-sm text-gray-600">Next drawing: {getNextDrawingDate()}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8089425000"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg py-4 px-8 rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  📞 Book Your Visit Now
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary font-bold text-lg py-4 px-8 rounded-full hover:bg-primary hover:text-white transition-all"
                >
                  View Location
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-6">
                * One entry per customer per visit. No purchase necessary beyond standard massage service. Must be 18+ to enter. Lottery ticket value up to $20. See staff for complete terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
