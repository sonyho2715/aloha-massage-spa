"use client";

import { useState } from "react";
import Link from "next/link";

export default function LiveAvailability() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Get next 7 days for quick booking
  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getNextWeekDates();

  // Sample available time slots (in production, this would come from API)
  const timeSlots = [
    { time: "9:00 AM", available: true, popular: false },
    { time: "10:00 AM", available: true, popular: false },
    { time: "11:00 AM", available: false, popular: false },
    { time: "12:00 PM", available: true, popular: true },
    { time: "1:00 PM", available: true, popular: false },
    { time: "2:00 PM", available: true, popular: true },
    { time: "3:00 PM", available: false, popular: false },
    { time: "4:00 PM", available: true, popular: false },
    { time: "5:00 PM", available: true, popular: true },
    { time: "6:00 PM", available: true, popular: false },
    { time: "7:00 PM", available: false, popular: false },
  ];

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const getDayName = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const getMonthDay = (date: Date) => {
    return date.getDate();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-blue-dark to-teal-dark relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sand rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-4">
              📅 Check Availability
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              See real-time availability and book your perfect time slot in seconds
            </p>
          </div>

          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-10">
            {/* Date Selection */}
            <div className="mb-8">
              <h3 className="text-xl font-heading text-ocean-blue mb-4 flex items-center gap-2">
                <span>📆</span>
                Select Your Preferred Date
              </h3>

              <div className="grid grid-cols-7 gap-2">
                {weekDates.map((date, index) => {
                  const dateStr = formatDate(date);
                  const isSelected = selectedDate === dateStr;
                  const isTodayDate = isToday(date);

                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedDate(dateStr)}
                      className={`relative p-4 rounded-xl border-2 transition-all duration-300 ${
                        isSelected
                          ? "border-coral bg-coral text-white shadow-glow scale-105"
                          : "border-stone-light/40 bg-white hover:border-ocean-blue hover:shadow-soft"
                      }`}
                    >
                      {isTodayDate && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-sage text-white px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap">
                          Today
                        </div>
                      )}
                      <div className={`text-xs font-semibold mb-1 ${
                        isSelected ? "text-white" : "text-stone-dark"
                      }`}>
                        {getDayName(date)}
                      </div>
                      <div className={`text-2xl font-bold ${
                        isSelected ? "text-white" : "text-ocean-blue"
                      }`}>
                        {getMonthDay(date)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Selection */}
            {selectedDate && (
              <div className="mb-8 animate-fade-in-up">
                <h3 className="text-xl font-heading text-ocean-blue mb-4 flex items-center gap-2">
                  <span>🕐</span>
                  Available Time Slots
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={`relative p-4 rounded-xl border-2 font-semibold transition-all duration-300 ${
                        selectedTime === slot.time
                          ? "border-coral bg-coral text-white shadow-glow scale-105"
                          : slot.available
                          ? "border-stone-light/40 bg-white hover:border-ocean-blue hover:shadow-soft text-ocean-blue"
                          : "border-stone-light/20 bg-stone-light/10 text-stone cursor-not-allowed opacity-50"
                      }`}
                    >
                      {slot.popular && slot.available && (
                        <div className="absolute -top-2 -right-2 bg-gold text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                          ⭐
                        </div>
                      )}
                      <div className="text-sm">{slot.time}</div>
                      {!slot.available && (
                        <div className="text-xs mt-1">Booked</div>
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-coral rounded"></div>
                    <span className="text-stone-dark">Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-stone-light/40 rounded"></div>
                    <span className="text-stone-dark">Available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-stone-light/20 rounded"></div>
                    <span className="text-stone-dark">Booked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold text-lg">⭐</span>
                    <span className="text-stone-dark">Popular</span>
                  </div>
                </div>
              </div>
            )}

            {/* Selected Summary & CTA */}
            {selectedDate && selectedTime && (
              <div className="animate-fade-in-up">
                <div className="bg-gradient-to-r from-ocean-blue/5 via-teal/5 to-ocean-blue/5 rounded-2xl p-6 mb-6 border border-ocean-blue/20">
                  <h4 className="font-heading text-lg text-ocean-blue mb-3">Your Selection</h4>
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
                      <span>📅</span>
                      <span className="font-semibold text-ocean-blue">
                        {new Date(selectedDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft">
                      <span>🕐</span>
                      <span className="font-semibold text-ocean-blue">{selectedTime}</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/book?date=${selectedDate}&time=${selectedTime}`}
                  className="block w-full bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white font-bold text-xl py-5 px-8 rounded-full text-center shadow-glow hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <span className="mr-2">✨</span>
                  Continue to Booking
                  <span className="ml-2">→</span>
                </Link>

                <p className="text-center text-sm text-stone-dark mt-4">
                  You'll choose your service and therapist on the next page
                </p>
              </div>
            )}

            {/* Call Instead Option */}
            <div className="mt-8 pt-8 border-t border-stone-light/40">
              <div className="text-center">
                <p className="text-stone-dark mb-4">
                  Prefer to book by phone or have questions?
                </p>
                <a
                  href="tel:8089425000"
                  className="inline-flex items-center justify-center bg-white border-2 border-ocean-blue text-ocean-blue hover:bg-ocean-blue hover:text-white font-bold text-lg py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-2">📞</span>
                  Call (808) 942-5000
                </a>
              </div>
            </div>
          </div>

          {/* Live Availability Info */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-white font-semibold text-sm">Real-Time Updates</div>
              <div className="text-white/70 text-xs">Live availability status</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-white font-semibold text-sm">Instant Confirmation</div>
              <div className="text-white/70 text-xs">Book in seconds</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-white font-semibold text-sm">SMS Reminders</div>
              <div className="text-white/70 text-xs">Never miss your appointment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
