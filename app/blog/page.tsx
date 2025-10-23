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
    },
    {
      id: "couples-massage-guide",
      title: "The Complete Guide to Couples Massage: Bonding Through Wellness",
      excerpt: "Discover how couples massage can strengthen relationships, reduce stress together, and create lasting memories. Perfect for anniversaries, date nights, or quality time.",
      image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&h=600&fit=crop",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Relationships"
    },
    {
      id: "massage-pregnancy",
      title: "Prenatal Massage: Safe Relief for Expecting Mothers",
      excerpt: "Learn about the benefits and safety considerations of massage therapy during pregnancy, including techniques that provide relief for common discomforts.",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=600&fit=crop",
      date: "December 5, 2024",
      readTime: "7 min read",
      category: "Women's Health"
    },
    {
      id: "essential-oils-massage",
      title: "Essential Oils in Massage: Benefits of Aromatherapy",
      excerpt: "Explore how organic essential oils enhance your massage experience, from lavender for relaxation to eucalyptus for respiratory relief.",
      image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=600&fit=crop",
      date: "November 28, 2024",
      readTime: "5 min read",
      category: "Health & Wellness"
    },
    {
      id: "chronic-pain-relief",
      title: "Managing Chronic Pain with Regular Massage Therapy",
      excerpt: "How consistent massage therapy can help manage conditions like fibromyalgia, arthritis, and chronic back pain without medication.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      date: "November 20, 2024",
      readTime: "6 min read",
      category: "Pain Management"
    },
    {
      id: "first-time-massage",
      title: "First Time Getting a Massage? Here's What to Expect",
      excerpt: "A complete guide for massage newcomers covering what to wear, how to prepare, what to expect during your session, and post-massage care.",
      image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=800&h=600&fit=crop",
      date: "November 15, 2024",
      readTime: "4 min read",
      category: "Beginner's Guide"
    },
    {
      id: "massage-immunity",
      title: "Boost Your Immune System with Regular Massage",
      excerpt: "Scientific evidence shows how massage therapy can strengthen your immune system, reduce illness frequency, and improve overall health.",
      image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop",
      date: "November 10, 2024",
      readTime: "5 min read",
      category: "Health & Wellness"
    },
    {
      id: "post-workout-massage",
      title: "Post-Workout Massage: Accelerate Muscle Recovery",
      excerpt: "Learn optimal timing and techniques for post-exercise massage to reduce soreness, prevent injury, and enhance athletic performance.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
      date: "November 5, 2024",
      readTime: "4 min read",
      category: "Sports & Fitness"
    },
    {
      id: "office-workers-massage",
      title: "Desk Job Relief: Massage Solutions for Office Workers",
      excerpt: "Combat tech neck, shoulder tension, and lower back pain from sitting all day with targeted massage therapy and self-care tips.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      date: "October 30, 2024",
      readTime: "5 min read",
      category: "Workplace Wellness"
    },
    {
      id: "sleep-better-massage",
      title: "How Massage Therapy Can Improve Your Sleep Quality",
      excerpt: "Discover the connection between massage, stress reduction, and better sleep. Learn which massage techniques promote deeper, more restful sleep.",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&h=600&fit=crop",
      date: "October 25, 2024",
      readTime: "5 min read",
      category: "Mental Health"
    },
    {
      id: "hot-stone-benefits",
      title: "Hot Stone Massage: Ancient Therapy Meets Modern Wellness",
      excerpt: "Explore the healing benefits of hot stone massage, from deep muscle relaxation to improved circulation and stress relief.",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&h=600&fit=crop",
      date: "October 20, 2024",
      readTime: "6 min read",
      category: "Massage Techniques"
    },
    {
      id: "massage-elderly",
      title: "Gentle Massage Therapy for Seniors and Elderly Care",
      excerpt: "How adapted massage techniques can improve quality of life for seniors, addressing arthritis, circulation, and mobility issues safely.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      date: "October 15, 2024",
      readTime: "5 min read",
      category: "Senior Health"
    },
    {
      id: "massage-frequency",
      title: "How Often Should You Get a Massage? Finding Your Perfect Schedule",
      excerpt: "Determine the ideal massage frequency based on your lifestyle, health goals, and budget. From weekly sessions to monthly maintenance.",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&h=600&fit=crop",
      date: "October 10, 2024",
      readTime: "4 min read",
      category: "Health & Wellness"
    }
  ];

  const categories = ["All", "Health & Wellness", "Massage Techniques", "Mental Health", "Sports & Fitness", "Pain Management", "Relationships", "Women's Health", "Senior Health"];

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
