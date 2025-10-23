"use client";

export default function CustomerReviews() {
  const reviews = [
    {
      name: "Sarah J.",
      rating: 5,
      source: "Yelp",
      date: "2 weeks ago",
      text: "Best massage I've ever had! The therapists are incredibly skilled and the atmosphere is so relaxing. I come here every month and always leave feeling refreshed and rejuvenated. Angela was very welcoming and nice—she provides amazing customer care.",
      verified: true
    },
    {
      name: "Michael C.",
      rating: 5,
      source: "Groupon",
      date: "1 month ago",
      text: "My wife and I had the couples massage for our anniversary. It was absolutely perfect! Professional service, clean facilities, and the Hawaiian techniques are amazing. By the end of our session, we felt completely reset. Highly recommend!",
      verified: true
    },
    {
      name: "Emily R.",
      rating: 5,
      source: "Yelp",
      date: "3 weeks ago",
      text: "I was a walk-in and they accommodated me right away. The foot massage was heavenly and the prices are very reasonable. I got the 90-minute body massage with essential oil—I love the smell and everything they provide is organic. Definitely my new go-to when I visit Hawaii!",
      verified: true
    },
    {
      name: "David K.",
      rating: 5,
      source: "Google",
      date: "1 week ago",
      text: "Tony is attentive and professional. He took time to understand my specific needs and tailored the session perfectly. My chronic back pain has improved significantly after just three visits!",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-bold mb-4">
              REAL CUSTOMER EXPERIENCES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex gap-1 text-3xl">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-bold text-primary">4.7</span>
            </div>
            <p className="text-xl text-gray-600">
              Based on 750+ reviews from Yelp, Google & Groupon
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{review.name}</div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-semibold">Verified</span>
                    </div>
                  )}
                </div>

                {/* Stars & Source */}
                <div className="flex items-center justify-between mb-3">
                  {renderStars(review.rating)}
                  <span className="text-sm text-gray-500 font-semibold">{review.source}</span>
                </div>

                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              See all 750+ reviews on our platforms
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.yelp.com/biz/aloha-massage-spa-honolulu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                Yelp Reviews
              </a>
              <a
                href="https://www.groupon.com/deals/aloha-massage-spa-1-3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
                Groupon Reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
