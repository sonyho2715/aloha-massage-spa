"use client";

import { useParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  content: {
    intro: string;
    sections: Array<{
      heading: string;
      paragraphs: string[];
    }>;
    conclusion: string;
  };
}

const blogPosts: Record<string, BlogPost> = {
  "benefits-of-regular-massage": {
    id: "benefits-of-regular-massage",
    title: "10 Science-Backed Benefits of Regular Massage Therapy",
    excerpt: "Discover how incorporating regular massage into your wellness routine can transform your physical and mental health.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&h=800&fit=crop",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Health & Wellness",
    author: "Dr. Sarah Kim, Licensed Massage Therapist",
    content: {
      intro: "In our fast-paced modern world, stress and physical tension have become constant companions for many people. While massage therapy has been used for thousands of years across different cultures, modern science is now confirming what ancient healers knew intuitively: regular massage offers profound benefits for both body and mind.",
      sections: [
        {
          heading: "1. Reduces Chronic Pain",
          paragraphs: [
            "Studies show that regular massage therapy can significantly reduce chronic pain conditions, including lower back pain, arthritis, and fibromyalgia. The manipulation of soft tissues improves blood flow, reduces inflammation, and releases natural pain-relieving endorphins.",
            "A 2011 study published in the Annals of Internal Medicine found that massage therapy was more effective than medication for chronic back pain."
          ]
        },
        {
          heading: "2. Lowers Stress and Anxiety",
          paragraphs: [
            "Massage therapy has been proven to reduce cortisol (the stress hormone) levels by up to 30% while simultaneously increasing serotonin and dopamine, neurotransmitters that regulate mood and promote feelings of well-being.",
            "Regular sessions can help manage anxiety disorders and provide a natural, drug-free approach to stress management."
          ]
        },
        {
          heading: "3. Improves Sleep Quality",
          paragraphs: [
            "If you struggle with insomnia or poor sleep quality, massage therapy can help. By promoting relaxation and reducing pain and anxiety, massage increases delta waves in the brain, the same brain waves associated with deep sleep.",
            "Research indicates that people who receive regular massage report better sleep quality and duration."
          ]
        },
        {
          heading: "4. Boosts Immune Function",
          paragraphs: [
            "Regular massage has been shown to increase lymphocyte count, the white blood cells that defend your body against disease. A 2010 study found that a single session of Swedish massage produced measurable changes in the immune system.",
            "This immune-boosting effect makes massage an excellent preventive health practice."
          ]
        },
        {
          heading: "5. Enhances Athletic Performance and Recovery",
          paragraphs: [
            "Athletes have long incorporated massage into their training routines. Sports massage helps prevent injuries, improves flexibility, reduces muscle soreness, and accelerates recovery time between workouts.",
            "By improving circulation and breaking down scar tissue, massage helps muscles repair and rebuild more efficiently."
          ]
        }
      ],
      conclusion: "The benefits of regular massage therapy extend far beyond simple relaxation. From pain management to immune support, massage offers a holistic approach to health and wellness. At Aloha Massage Spa, our licensed therapists are committed to helping you achieve your health goals through personalized massage therapy. Book your session today and experience the transformative power of healing touch."
    }
  },
  "lomilomi-tradition": {
    id: "lomilomi-tradition",
    title: "The Ancient Art of Lomilomi: Hawaiian Healing Tradition",
    excerpt: "Learn about the sacred Hawaiian massage tradition of lomilomi and its spiritual significance.",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&h=800&fit=crop",
    date: "January 10, 2025",
    readTime: "6 min read",
    category: "Massage Techniques",
    author: "Koa Nakamura, Lomilomi Practitioner",
    content: {
      intro: "Lomilomi, which literally means 'to knead' or 'to massage' in Hawaiian, is far more than a massage technique—it's a sacred healing art deeply rooted in Hawaiian culture and spirituality. Passed down through generations of Hawaiian healers, lomilomi embodies the philosophy of aloha and recognizes the interconnectedness of body, mind, and spirit.",
      sections: [
        {
          heading: "The Origins of Lomilomi",
          paragraphs: [
            "Lomilomi has been practiced in Hawaii for centuries, traditionally performed by native Hawaiian healers known as kahunas. This sacred practice was often combined with prayer, herbal medicine, and other healing modalities as part of holistic treatment.",
            "Different families and regions developed their own unique lomilomi styles, each with distinct techniques and philosophies passed down through generations. Today, these traditions continue to be honored and practiced."
          ]
        },
        {
          heading: "The Philosophy Behind Lomilomi",
          paragraphs: [
            "At its core, lomilomi is about restoring balance and harmony—what Hawaiians call pono. Practitioners believe that physical ailments often stem from emotional or spiritual blockages, and lomilomi works to release these blockages on all levels.",
            "The practice embodies the spirit of aloha—love, compassion, and respect. Lomilomi therapists often begin sessions with prayer or intention-setting, creating a sacred space for healing."
          ]
        },
        {
          heading: "Unique Techniques and Characteristics",
          paragraphs: [
            "Unlike Western massage styles that work systematically through muscle groups, lomilomi uses long, flowing, dance-like strokes that mimic the waves of the ocean. Therapists use their forearms, elbows, and even walking their feet to apply pressure.",
            "The movements are fluid and continuous, working on multiple body parts simultaneously. This approach helps the recipient experience the massage as a unified whole rather than isolated treatment areas.",
            "Traditional lomilomi may incorporate ho'oponopono (a Hawaiian practice of forgiveness and reconciliation), chanting, and the use of heated stones or bamboo."
          ]
        },
        {
          heading: "Physical and Spiritual Benefits",
          paragraphs: [
            "Physically, lomilomi provides deep muscle relaxation, improved circulation, enhanced flexibility, and release of tension. The rhythmic, flowing nature of the strokes helps activate the parasympathetic nervous system, promoting deep relaxation.",
            "Spiritually, many recipients report feelings of profound peace, emotional release, and renewed connection to themselves. The holistic approach addresses not just physical symptoms but the whole person."
          ]
        }
      ],
      conclusion: "Lomilomi is a gift from Hawaiian culture to the world—a reminder that healing encompasses body, mind, and spirit. At Aloha Massage Spa, we honor this sacred tradition by offering authentic lomilomi massage performed by trained practitioners who respect its cultural significance. Experience the healing power of aloha for yourself."
    }
  },
  "stress-relief-massage": {
    id: "stress-relief-massage",
    title: "5 Best Massage Types for Stress Relief and Anxiety",
    excerpt: "Discover which massage modalities are most effective for reducing stress and anxiety.",
    image: "https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1200&h=800&fit=crop",
    date: "January 5, 2025",
    readTime: "4 min read",
    category: "Mental Health",
    author: "Emily Chen, Wellness Specialist",
    content: {
      intro: "In today's high-stress world, finding effective ways to manage anxiety and tension is crucial for maintaining mental and physical health. Massage therapy offers a natural, evidence-based approach to stress relief. But with so many massage types available, which ones work best for anxiety and stress? Here are the top five massage modalities for calming your nervous system.",
      sections: [
        {
          heading: "1. Swedish Massage",
          paragraphs: [
            "Swedish massage is the gold standard for relaxation. Using long, flowing strokes, kneading, and circular movements, this gentle technique promotes deep relaxation and triggers the body's relaxation response.",
            "Perfect for: First-time massage recipients, those seeking overall stress relief, and anyone needing to decompress from daily pressures."
          ]
        },
        {
          heading: "2. Aromatherapy Massage",
          paragraphs: [
            "Combining massage with essential oils creates a powerful stress-relief experience. Lavender, chamomile, and bergamot oils are particularly effective for anxiety reduction, working through both physical touch and olfactory pathways.",
            "Perfect for: People who respond well to scents, those with high anxiety, and anyone seeking a multi-sensory relaxation experience."
          ]
        },
        {
          heading: "3. Hot Stone Massage",
          paragraphs: [
            "The combination of heat, weight, and massage creates profound relaxation. Heated stones are placed on key points and used as massage tools, melting away tension and promoting a meditative state.",
            "Perfect for: Those with muscle tension related to stress, people who love warmth, and anyone seeking deep, penetrating relaxation."
          ]
        },
        {
          heading: "4. Reflexology",
          paragraphs: [
            "This specialized foot massage targets reflex points connected to different body systems. It's surprisingly effective for stress relief, as many tension points manifest in the feet.",
            "Perfect for: People uncomfortable with full-body massage, those who stand all day, and anyone seeking stress relief in a shorter session."
          ]
        },
        {
          heading: "5. Thai Massage",
          paragraphs: [
            "While more active than other styles, Thai massage's combination of stretching, yoga-like positions, and acupressure releases physical and mental tension. The mindful movement aspect helps calm racing thoughts.",
            "Perfect for: Active individuals, those who feel restless with traditional massage, and people who need both physical and mental stress release."
          ]
        }
      ],
      conclusion: "Each of these massage styles offers unique benefits for stress and anxiety relief. The best choice depends on your personal preferences and what type of stress you're experiencing. At Aloha Massage Spa, our experienced therapists can help you choose the perfect massage modality for your needs and even combine techniques for optimal results. Don't let stress control your life—schedule your stress-relief massage today."
    }
  },
  "deep-tissue-vs-swedish": {
    id: "deep-tissue-vs-swedish",
    title: "Deep Tissue vs Swedish Massage: Which is Right for You?",
    excerpt: "Understanding the key differences between deep tissue and Swedish massage techniques to choose the perfect treatment.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop",
    date: "December 28, 2024",
    readTime: "5 min read",
    category: "Massage Techniques",
    author: "Michael Torres, LMT",
    content: {
      intro: "When booking a massage, you'll often be asked to choose between Swedish and deep tissue techniques. While both offer therapeutic benefits, they serve different purposes and use distinct methods. Understanding these differences will help you select the massage that best addresses your specific needs and preferences.",
      sections: [
        {
          heading: "What is Swedish Massage?",
          paragraphs: [
            "Swedish massage is the most common and well-known massage technique in Western countries. Developed in the 1800s by Swedish physiologist Per Henrik Ling, this gentle, relaxing style uses five basic strokes: effleurage (long gliding strokes), petrissage (kneading), tapotement (rhythmic tapping), friction (deep circular movements), and vibration.",
            "The primary goal of Swedish massage is relaxation and overall wellness. It improves circulation, eases muscle tension, and creates a sense of calm. The pressure is generally light to medium, making it ideal for people new to massage or those seeking stress relief rather than therapeutic deep work.",
            "Swedish massage typically lasts 60-90 minutes and leaves you feeling relaxed and rejuvenated rather than sore."
          ]
        },
        {
          heading: "What is Deep Tissue Massage?",
          paragraphs: [
            "Deep tissue massage, as the name suggests, focuses on the deeper layers of muscle and connective tissue. Therapists use slower, more forceful strokes to target specific problem areas and chronic muscle tension. This technique often involves the use of elbows, forearms, and knuckles to apply sustained pressure.",
            "The goal of deep tissue massage is therapeutic—to break up scar tissue, release chronic muscle tension, and address specific pain points. It's particularly effective for chronic aches and pain, stiff neck and upper back, low back pain, leg muscle tightness, and recovery from injuries.",
            "You may experience some soreness after a deep tissue massage, similar to post-workout muscle soreness. This is normal and typically subsides within a day or two."
          ]
        },
        {
          heading: "Key Differences at a Glance",
          paragraphs: [
            "Pressure: Swedish uses light to medium pressure; deep tissue uses firm to intense pressure. Purpose: Swedish focuses on relaxation and stress relief; deep tissue targets chronic pain and specific problem areas. Technique: Swedish employs long, flowing strokes; deep tissue uses slower, more deliberate movements.",
            "Recovery: Swedish requires no recovery time; deep tissue may cause temporary soreness. Best for: Swedish is ideal for first-timers and stress relief; deep tissue suits athletes and those with chronic pain."
          ]
        },
        {
          heading: "Which Should You Choose?",
          paragraphs: [
            "Choose Swedish massage if you're new to massage therapy, seeking overall relaxation, managing general stress, prefer a gentler touch, or want a full-body wellness treatment.",
            "Choose deep tissue massage if you have chronic muscle pain or tension, recover from an injury, are an athlete with specific problem areas, don't mind some discomfort for therapeutic benefit, or have knots or adhesions that need targeted work.",
            "Remember, these aren't mutually exclusive! Many massage sessions combine both techniques—using Swedish strokes for relaxation and transitioning to deep tissue work on specific problem areas."
          ]
        },
        {
          heading: "Communication is Key",
          paragraphs: [
            "Regardless of which type you choose, communicate with your therapist. Let them know your pain tolerance, specific concerns, and preferences. A skilled therapist can adjust pressure and technique throughout the session to ensure you get the most benefit.",
            "At Aloha Massage Spa, our therapists are trained in both Swedish and deep tissue techniques and can customize your massage to meet your exact needs."
          ]
        }
      ],
      conclusion: "Both Swedish and deep tissue massage offer valuable benefits—the best choice depends on your current needs, pain tolerance, and wellness goals. Don't hesitate to ask your massage therapist for recommendations based on your specific situation. Many clients alternate between styles or combine them in a single session. At Aloha Massage Spa, we're here to help you find the perfect massage for your body and lifestyle."
    }
  },
  "foot-massage-reflexology": {
    id: "foot-massage-reflexology",
    title: "The Healing Power of Foot Massage and Reflexology",
    excerpt: "Explore how foot massage and reflexology can benefit your entire body through targeted pressure points.",
    image: "https://images.unsplash.com/photo-1595147389795-37094173bfd8?w=1200&h=800&fit=crop",
    date: "December 20, 2024",
    readTime: "4 min read",
    category: "Health & Wellness",
    author: "Lisa Nakamura, Certified Reflexologist",
    content: {
      intro: "Your feet carry you through life, bearing your weight and absorbing impact with every step. Yet they're often the most neglected part of our body. Foot massage and reflexology offer more than just relaxation for tired feet—these ancient healing practices can benefit your entire body, from reducing pain to improving sleep and boosting overall health.",
      sections: [
        {
          heading: "Understanding Reflexology",
          paragraphs: [
            "Reflexology is based on the principle that specific points on the feet correspond to different organs and systems in the body. By applying pressure to these reflex points, practitioners can stimulate healing and promote balance throughout the entire body.",
            "This practice has roots in ancient Egypt, China, and India, dating back thousands of years. Modern reflexology was developed in the early 20th century by Dr. William Fitzgerald and Eunice Ingham, who mapped the reflex zones on the feet.",
            "Unlike regular foot massage that focuses on muscles and soft tissue, reflexology targets specific points believed to connect to organs via energy pathways or zones."
          ]
        },
        {
          heading: "Physical Benefits of Foot Massage",
          paragraphs: [
            "Relieves foot pain: Whether from plantar fasciitis, flat feet, or general soreness from standing all day, foot massage provides immediate relief by releasing tension in the muscles and fascia.",
            "Improves circulation: Massage stimulates blood flow to the feet and lower legs, which is especially beneficial for people with diabetes, edema, or peripheral neuropathy.",
            "Reduces swelling: Gentle massage helps drain excess fluid from swollen feet and ankles, particularly helpful during pregnancy or after long periods of standing or sitting.",
            "Promotes better sleep: Foot massage before bed activates the parasympathetic nervous system, helping you relax and fall asleep more easily."
          ]
        },
        {
          heading: "Whole-Body Benefits Through Reflexology",
          paragraphs: [
            "The beauty of reflexology is its holistic approach. By working on specific points in your feet, practitioners can address issues throughout your body:",
            "Digestive health: Points corresponding to the stomach, intestines, and liver can help with digestive issues, bloating, and constipation. Headache relief: Pressure on reflex points related to the head and sinuses can reduce headache and migraine frequency.",
            "Stress reduction: Reflexology sessions decrease cortisol levels and promote deep relaxation, helping manage chronic stress and anxiety. Hormonal balance: Certain reflex points connect to the endocrine system, potentially helping with hormonal imbalances and menstrual issues.",
            "Pain management: Reflexology can help reduce chronic pain by promoting the release of endorphins, the body's natural painkillers."
          ]
        },
        {
          heading: "What to Expect During a Foot Massage Session",
          paragraphs: [
            "A typical foot massage or reflexology session lasts 30-60 minutes. You'll be seated in a comfortable massage chair or recliner. The therapist typically begins with a warm foot soak infused with essential oils or Epsom salts to relax the muscles and soften the skin.",
            "During the massage, the therapist will use various techniques including kneading, circular motions, pressure point work, and gentle stretching. You may feel some tenderness at certain points—this is normal and often indicates areas that need attention. The pressure should never be painful; always communicate with your therapist about your comfort level.",
            "Many people feel deeply relaxed or even fall asleep during foot massage. Afterward, you may notice improved energy, reduced pain, or a general sense of well-being."
          ]
        },
        {
          heading: "Self-Care Tips",
          paragraphs: [
            "Between professional sessions, you can maintain foot health at home: Roll a tennis ball under your foot to release tension in the arch. Soak feet in warm water with Epsom salt after a long day. Stretch your toes and ankles regularly. Use lotion to keep feet moisturized and prevent cracks.",
            "However, nothing replaces the therapeutic benefits of professional foot massage and reflexology, where trained therapists can identify problem areas and apply appropriate techniques."
          ]
        }
      ],
      conclusion: "Your feet are the foundation of your body, and caring for them through massage and reflexology creates positive ripple effects throughout your entire system. Whether you're seeking relief from foot pain, want to improve circulation, or are curious about reflexology's holistic benefits, foot massage offers a gentle yet powerful path to better health. Visit Aloha Massage Spa to experience the healing power of professional foot massage and reflexology."
    }
  },
  "massage-for-athletes": {
    id: "massage-for-athletes",
    title: "Sports Massage: Essential Recovery for Active Lifestyles",
    excerpt: "How sports massage can enhance athletic performance, prevent injuries, and accelerate recovery.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop",
    date: "December 15, 2024",
    readTime: "6 min read",
    category: "Sports & Fitness",
    author: "James Rodriguez, Sports Massage Specialist",
    content: {
      intro: "Whether you're a professional athlete, weekend warrior, or fitness enthusiast, sports massage can be a game-changer for your training routine. This specialized form of therapeutic massage goes beyond relaxation, focusing on preventing injuries, enhancing performance, and accelerating recovery. Understanding how to incorporate sports massage into your fitness regimen can help you reach your athletic goals while maintaining optimal physical health.",
      sections: [
        {
          heading: "What Makes Sports Massage Different?",
          paragraphs: [
            "Sports massage is specifically designed for people who engage in regular physical activity. Unlike relaxation massage, sports massage uses targeted techniques to address the specific demands placed on your body by your sport or activity.",
            "Key characteristics include: Faster, more vigorous strokes than Swedish massage. Focus on specific muscle groups used in your sport. Incorporation of stretching and joint mobilization. May target areas of restriction or injury. Can be adapted for pre-event, post-event, or maintenance purposes.",
            "Sports massage therapists understand biomechanics, muscle function, and the unique stresses different sports place on the body."
          ]
        },
        {
          heading: "Types of Sports Massage",
          paragraphs: [
            "Pre-event massage: Performed shortly before competition or training (15-45 minutes before). Uses stimulating strokes to warm up muscles, increase circulation, and improve flexibility. Helps prepare both body and mind for optimal performance. Short duration (10-15 minutes) and focuses on muscles that will be heavily used.",
            "Post-event massage: Given within 1-2 hours after athletic activity. Helps flush out metabolic waste products like lactic acid. Reduces muscle soreness and speeds recovery. Uses gentler pressure to avoid overwhelming already fatigued muscles.",
            "Maintenance massage: Regular sessions (weekly or bi-weekly) during training periods. Prevents injuries by addressing muscle imbalances and restrictions. Enhances flexibility and range of motion. Identifies potential problem areas before they become injuries.",
            "Rehabilitative massage: Used during recovery from injury. Works in conjunction with physical therapy. Breaks down scar tissue and adhesions. Gradually restores function and strength to injured areas."
          ]
        },
        {
          heading: "Benefits for Athletes",
          paragraphs: [
            "Injury prevention: Regular sports massage identifies and addresses muscle imbalances, tight spots, and areas of weakness before they lead to injury. By maintaining muscle flexibility and joint mobility, you reduce the risk of strains, sprains, and overuse injuries.",
            "Enhanced recovery: Intense training creates micro-tears in muscle fibers and builds up metabolic waste. Sports massage increases blood flow, delivering oxygen and nutrients to muscles while removing waste products. This accelerates the healing process and reduces downtime between workouts.",
            "Improved performance: By maintaining optimal muscle length and function, sports massage can improve your power output, flexibility, and endurance. Many athletes report feeling 'lighter' and more efficient in their movements after massage.",
            "Reduced DOMS: Delayed Onset Muscle Soreness (DOMS) typically peaks 24-72 hours after intense exercise. Regular massage can significantly reduce the severity and duration of DOMS, allowing you to train more consistently.",
            "Mental benefits: The relaxation response triggered by massage reduces cortisol levels and anxiety, improving focus and mental clarity. Many athletes use massage as part of their mental preparation routine."
          ]
        },
        {
          heading: "Sport-Specific Considerations",
          paragraphs: [
            "Runners: Focus on lower body—calves, hamstrings, IT band, hip flexors, and feet. Addresses common issues like plantar fasciitis, shin splints, and runner's knee.",
            "Cyclists: Emphasis on quadriceps, hip flexors, lower back, and shoulders. Helps with the repetitive strain from cycling position.",
            "Swimmers: Targets shoulders, upper back, and core. Addresses the unique demands of overhead arm movements and rotation.",
            "CrossFit/Weightlifters: Full-body approach addressing the multiple movement patterns and muscle groups engaged. Special attention to areas bearing heavy loads.",
            "Tennis/Golf: Focus on rotational movements—shoulders, obliques, and lower back. Addresses asymmetrical demands of one-sided sports."
          ]
        },
        {
          heading: "Timing and Frequency",
          paragraphs: [
            "For optimal results: During heavy training: Weekly sessions to manage load and prevent injury. Off-season or light training: Bi-weekly or monthly for maintenance. Pre-competition: Light sports massage 2-3 days before event. Post-competition: Recovery massage within 24-48 hours.",
            "Never get deep sports massage immediately before an important event, as muscle soreness could impact performance. Similarly, avoid deep work immediately after intense competition when muscles are already fatigued and potentially damaged."
          ]
        },
        {
          heading: "Combining with Other Recovery Methods",
          paragraphs: [
            "Sports massage works best as part of a comprehensive recovery strategy: Proper nutrition and hydration. Adequate sleep (7-9 hours). Active recovery (light movement on rest days). Stretching and mobility work. Ice or heat therapy as appropriate.",
            "Many athletes combine massage with foam rolling, compression therapy, and contrast baths for maximum recovery benefits."
          ]
        }
      ],
      conclusion: "Sports massage isn't a luxury for elite athletes—it's an essential tool for anyone serious about their fitness and athletic performance. By incorporating regular sports massage into your training regimen, you invest in injury prevention, enhanced recovery, and improved performance. At Aloha Massage Spa, our sports massage specialists understand the unique needs of active individuals and can customize treatments to support your athletic goals. Don't wait for an injury to experience the benefits—make sports massage part of your training plan today."
    }
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id as string;
  const post = blogPosts[postId];

  if (!post) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-accent hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-4xl">
            <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="text-xl text-gray-700 leading-relaxed mb-12 font-serif">
              {post.content.intro}
            </div>

            {/* Sections */}
            {post.content.sections.map((section, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-lg text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}

            {/* Conclusion */}
            <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl">
              <h2 className="text-3xl font-bold text-primary mb-6">Final Thoughts</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <a
                href="tel:8089121000"
                className="inline-block bg-gradient-to-r from-primary to-accent text-white hover:shadow-2xl font-bold text-lg py-4 px-12 rounded-full transition-all transform hover:scale-105"
              >
                📞 Book Your Massage Today
              </a>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="text-accent hover:underline font-semibold"
              >
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingBookButton />
    </main>
  );
}
