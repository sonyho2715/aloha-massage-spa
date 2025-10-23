"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: "benefits-of-regular-massage",
      title: "10 Science-Backed Benefits of Regular Massage Therapy",
      excerpt: "Discover how incorporating regular massage into your wellness routine can transform your physical and mental health. From reducing chronic pain to boosting immunity.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Health & Wellness"
    },
    {
      id: "lomilomi-tradition",
      title: "The Ancient Art of Lomilomi: Hawaiian Healing Tradition",
      excerpt: "Learn about the sacred Hawaiian massage tradition of lomilomi, its spiritual significance, and how it differs from other massage techniques.",
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Massage Techniques"
    },
    {
      id: "stress-relief-massage",
      title: "5 Best Massage Types for Stress Relief and Anxiety",
      excerpt: "Feeling overwhelmed? Discover which massage modalities are most effective for reducing stress, anxiety, and promoting deep relaxation.",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop",
      date: "January 5, 2025",
      readTime: "4 min read",
      category: "Mental Health"
    },
    {
      id: "deep-tissue-vs-swedish",
      title: "Deep Tissue vs Swedish Massage: Which is Right for You?",
      excerpt: "Understanding the key differences between deep tissue and Swedish massage techniques to choose the perfect treatment for your needs.",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=600&fit=crop",
      date: "December 28, 2024",
      readTime: "5 min read",
      category: "Massage Techniques"
    },
    {
      id: "foot-massage-reflexology",
      title: "The Healing Power of Foot Massage and Reflexology",
      excerpt: "Explore how foot massage and reflexology can benefit your entire body through targeted pressure points and ancient healing principles.",
      image: "https://images.unsplash.com/photo-1598964678353-c8f96e1c8e0f?w=800&h=600&fit=crop",
      date: "December 20, 2024",
      readTime: "4 min read",
      category: "Health & Wellness"
    },
    {
      id: "massage-for-athletes",
      title: "Sports Massage: Essential Recovery for Active Lifestyles",
      excerpt: "How sports massage can enhance athletic performance, prevent injuries, and accelerate recovery for athletes of all levels.",
      image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&h=600&fit=crop",
      date: "December 15, 2024",
      readTime: "6 min read",
      category: "Sports & Fitness"
    }
  ];

  const categories = ["All", "Health & Wellness", "Massage Techniques", "Mental Health", "Sports & Fitness"];

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Wellness Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Expert insights on massage therapy, wellness, and holistic health
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors font-semibold"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-700 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 text-accent font-semibold hover:underline">
                      Read More →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Stay Updated on Wellness Tips
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest massage therapy insights, wellness tips, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full text-gray-900 flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBookButton />
    </main>
  );
}
