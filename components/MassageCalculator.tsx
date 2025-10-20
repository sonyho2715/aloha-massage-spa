"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function MassageCalculator() {
  const { t } = useLanguage();
  const [serviceType, setServiceType] = useState("foot");
  const [duration, setDuration] = useState(30);
  const [people, setPeople] = useState(1);

  const services = {
    foot: { name: "Foot Massage", prices: { 30: 35, 60: 55 } },
    full: { name: "Full Body Massage", prices: { 60: 70, 90: 110 } },
    custom: { name: "Custom Massage", prices: { 30: 45 } },
    combo: { name: "Combination Massage", prices: { 60: 80, 90: 120 } },
    couples: { name: "Couples Massage", prices: { 60: 140, 90: 220 } },
  };

  const calculatePrice = () => {
    const service = services[serviceType as keyof typeof services];
    const basePrice = service.prices[duration as keyof typeof service.prices] || 0;
    return serviceType === "couples" ? basePrice : basePrice * people;
  };

  const availableDurations = Object.keys(
    services[serviceType as keyof typeof services].prices
  ).map(Number);

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Massage Price Calculator
            </h2>
            <p className="text-xl text-gray-600">
              Customize your perfect massage experience
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Options */}
              <div className="space-y-6">
                {/* Service Type */}
                <div>
                  <label className="block text-lg font-semibold text-primary mb-3">
                    Select Service
                  </label>
                  <div className="space-y-2">
                    {Object.entries(services).map(([key, service]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setServiceType(key);
                          setDuration(Number(Object.keys(service.prices)[0]));
                          if (key === "couples") setPeople(2);
                          else if (people === 2) setPeople(1);
                        }}
                        className={`w-full p-4 rounded-lg text-left transition-all ${
                          serviceType === key
                            ? "bg-primary text-white shadow-lg"
                            : "bg-gray-50 hover:bg-gray-100"
                        }`}
                      >
                        <div className="font-semibold">{service.name}</div>
                        <div className="text-sm opacity-75">
                          {Object.keys(service.prices).join(", ")} minutes
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-lg font-semibold text-primary mb-3">
                    Duration
                  </label>
                  <div className="flex gap-3">
                    {availableDurations.map((dur) => (
                      <button
                        key={dur}
                        onClick={() => setDuration(dur)}
                        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                          duration === dur
                            ? "bg-accent text-white shadow-lg"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        {dur} min
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number of People */}
                {serviceType !== "couples" && (
                  <div>
                    <label className="block text-lg font-semibold text-primary mb-3">
                      Number of People
                    </label>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setPeople(Math.max(1, people - 1))}
                        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-xl"
                      >
                        -
                      </button>
                      <div className="flex-1 text-center">
                        <div className="text-4xl font-bold text-primary">{people}</div>
                        <div className="text-sm text-gray-600">
                          {people === 1 ? "person" : "people"}
                        </div>
                      </div>
                      <button
                        onClick={() => setPeople(people + 1)}
                        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 font-bold text-xl"
                      >
                        +
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right: Summary */}
              <div className="bg-gradient-to-br from-primary to-accent text-white rounded-xl p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Your Estimate</h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-lg">
                      <span>Service:</span>
                      <span className="font-semibold">
                        {services[serviceType as keyof typeof services].name}
                      </span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>Duration:</span>
                      <span className="font-semibold">{duration} minutes</span>
                    </div>
                    <div className="flex justify-between text-lg">
                      <span>People:</span>
                      <span className="font-semibold">
                        {serviceType === "couples" ? "2 (Couples)" : people}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="border-t border-white/30 pt-6">
                    <div className="flex justify-between items-end">
                      <span className="text-2xl font-semibold">Total:</span>
                      <div className="text-right">
                        <div className="text-5xl font-bold">
                          ${calculatePrice()}
                        </div>
                        <div className="text-sm opacity-75">+ tax</div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="tel:8089121000"
                    className="mt-6 w-full bg-white text-primary hover:bg-gray-100 font-bold text-lg py-4 px-6 rounded-full transition-colors block text-center"
                  >
                    📞 Call to Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p className="text-sm">
              * Prices are estimates. Final prices may vary. Walk-ins welcome!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
