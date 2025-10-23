"use client";

export default function TrustBadges() {
  const badges = [
    {
      icon: "✓",
      title: "Licensed & Insured",
      subtitle: "State of Hawaii #MAT-14098",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "⭐",
      title: "4.7★ Rating",
      subtitle: "750+ Verified Reviews",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "👥",
      title: "50,000+ Clients",
      subtitle: "Happy Guests Since 2019",
      color: "from-green-500 to-green-600"
    },
    {
      icon: "🌿",
      title: "Organic Products",
      subtitle: "Natural Essential Oils",
      color: "from-emerald-500 to-teal-600"
    },
    {
      icon: "🚪",
      title: "Walk-Ins Welcome",
      subtitle: "Open 10 AM - 11 PM Daily",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🏆",
      title: "Professional Team",
      subtitle: "10+ Years Combined Experience",
      color: "from-red-500 to-pink-600"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center text-3xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {badge.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {badge.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
