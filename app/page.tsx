import Link from 'next/link';
import { Star, Clock, Award, ArrowRight, Phone, Sparkles, Heart, Leaf, MapPin } from 'lucide-react';
import { Container, Button, Card, CardContent, Badge } from '@/components/ui';
import { ParallaxHero } from '@/components/ParallaxHero';
import { formatPrice, formatDuration } from '@/lib/utils';

// Featured services data
const featuredServices = [
  {
    id: '1',
    name: 'Lomi Lomi Massage',
    description: 'Traditional Hawaiian massage using flowing, rhythmic strokes to restore harmony.',
    duration: 60,
    price: 9500,
    category: 'MASSAGE',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
  },
  {
    id: '2',
    name: 'Deep Tissue Massage',
    description: 'Targeted pressure to release chronic muscle tension and knots.',
    duration: 60,
    price: 10500,
    category: 'MASSAGE',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400',
  },
  {
    id: '3',
    name: 'Couples Retreat',
    description: 'Share a relaxing experience with side-by-side massages in our couples suite.',
    duration: 90,
    price: 22000,
    category: 'PACKAGE',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
  },
  {
    id: '4',
    name: 'Hot Stone Massage',
    description: 'Heated basalt stones melt away tension and promote deep relaxation.',
    duration: 75,
    price: 12500,
    category: 'MASSAGE',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400',
  },
];

// Weekly specials
const weeklySpecials = [
  {
    day: "Two'sday",
    title: 'Couples Special',
    description: "Share a moment of peace with someone you love. Couple's 1-Hour Massage",
    originalPrice: 13000,
    salePrice: 12000,
    bonus: 'FREE Foot Scrub for both',
  },
  {
    day: "Man'ic Monday",
    title: "Men's Wellness Day",
    description: 'Gentlemen, take time to recover and recharge.',
    discount: '$10 off any massage',
    bonus: 'All services 10AM-8PM',
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Freida F.',
    rating: 5,
    text: "Booked this place due to having a bad experience at my resort's spa. Angela was very welcoming and nice to us. She provided amazing customer care and also gave us some wise words. The massage was amazing. I felt a load off my back. Thanks Angela for being so kind!",
    source: 'Facebook',
  },
  {
    name: 'Sarah M.',
    rating: 5,
    text: "The best massage I've ever had! Angela has magic hands. I felt completely renewed after my Lomi Lomi session. The atmosphere is so peaceful, you forget about the outside world.",
    source: 'Google',
  },
  {
    name: 'James K.',
    rating: 5,
    text: "Perfect couples retreat for our anniversary. The ambiance and service were exceptional. We'll definitely be back every time we visit Hawaii.",
    source: 'Yelp',
  },
];

// Therapists
const therapists = [
  {
    name: 'Angela',
    title: 'Owner & Lomi Lomi Specialist',
    years: 15,
    bio: 'Angela learned the art of Lomi Lomi from her grandmother, a native Hawaiian healer.',
  },
  {
    name: 'Tony',
    title: 'Deep Tissue & Sports Expert',
    years: 10,
    bio: 'With a background in sports medicine, Tony specializes in therapeutic techniques.',
  },
  {
    name: 'Andy',
    title: 'Swedish & Hot Stone Specialist',
    years: 6,
    bio: 'Andy brings a calm, intuitive approach to massage therapy.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        imageUrl="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070"
        height="min-h-[95vh]"
      >
        <Container>
          <div className="max-w-3xl text-white">
            {/* Aloha Greeting */}
            <p className="text-2xl text-cyan-300 font-medium mb-4 animate-fade-in">Aloha,</p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              You Deserve a Moment of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
                Peace
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
              Escape to tranquility with authentic Hawaiian healing traditions.
              Let our skilled therapists melt away your stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 text-lg px-8">
                  Book Your Escape
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+18081234567">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/50 text-white hover:bg-white/10 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (808) 123-4567
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                <span className="font-semibold">4.9</span>
                <span className="text-slate-300">(500+ reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-200">Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-200">Honolulu, Hawaii</span>
              </div>
            </div>
          </div>
        </Container>
      </ParallaxHero>

      {/* Welcome Message Section */}
      <section className="py-20 bg-[#faf8f5]">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Life moves fast. You work hard, deal with stress you weren&apos;t looking for,
              and handle &quot;life&quot; every day. Now is the perfect time to pause and breathe.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Whether you need to unwind with a classic Swedish massage, work out tension
              with Deep Tissue, or experience the warmth of Hot Stone therapy, we have
              a ritual designed just for <strong>you</strong>.
            </p>
            <p className="text-xl font-medium text-sky-700">
              Warmly, The Aloha Massage Spa Team 🌺
            </p>
          </div>
        </Container>
      </section>

      {/* Image Gallery Section with Parallax */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070)',
          }}
        />
        <div className="absolute inset-0 bg-sky-900/70" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let Us Spoil You
            </h2>
            <p className="text-xl text-sky-100 mb-8">
              You work hard, deal with &quot;life&quot; every day, and deserve <strong>&quot;you time.&quot;</strong>
              Your experience at Aloha Massage Spa will be like stepping out of life for a moment.
            </p>
            <p className="text-2xl font-medium text-cyan-300 mb-10">
              Be pampered. Be spoiled. Let us help you.
            </p>
            <Link href="/services">
              <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Atmosphere Features */}
      <section className="py-20 bg-gradient-to-b from-sky-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <Badge variant="info" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              The Experience
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
              What Awaits You
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Serene Visuals</h3>
              <p className="text-slate-600">
                From the moment you enter, our peaceful decor and soft lighting
                begin calming your senses.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-10 h-10 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Soothing Aromas</h3>
              <p className="text-slate-600">
                Gentle Hawaiian music and delightful aromatherapy create the
                perfect atmosphere for relaxation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Expert Touch</h3>
              <p className="text-slate-600">
                Our skilled therapists customize every session to your unique needs,
                ensuring complete satisfaction.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Owner's Message with Image */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div
                className="aspect-[4/5] rounded-2xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800)',
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-sky-600 text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sky-100">Years Experience</p>
              </div>
            </div>
            <div>
              <Badge variant="info" className="mb-4">
                <Heart className="w-3 h-3 mr-1" />
                From Our Founder
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                A Message from Angela
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                As the owner of Aloha Massage Spa, I understand how important it is to
                take a moment for yourself, whether you&apos;re seeking relief from physical
                aches or just need a brief escape from the daily grind.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                At our spa, we start by calming your senses with serene visuals, soothing
                sounds, and delightful aromas. This peaceful setting ensures that your visit
                provides the perfect &quot;me time&quot; that you both need and deserve.
              </p>
              <p className="text-xl font-medium text-sky-700">
                — Angela, Owner & Lead Therapist
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Weekly Specials */}
      <section className="py-16 bg-amber-50">
        <Container>
          <div className="text-center mb-10">
            <Badge variant="warning" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Weekly Specials
            </Badge>
            <h2 className="text-3xl font-bold text-slate-900">
              Special Days, Special Savings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {weeklySpecials.map((special) => (
              <Card key={special.day} variant="elevated" className="border-2 border-amber-200">
                <CardContent>
                  <Badge variant="warning" size="sm" className="mb-3">
                    {special.day}
                  </Badge>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{special.title}</h3>
                  <p className="text-slate-600 mb-4">{special.description}</p>
                  {special.originalPrice ? (
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-slate-400 line-through">{formatPrice(special.originalPrice)}</span>
                      <span className="text-2xl font-bold text-sky-600">{formatPrice(special.salePrice!)}</span>
                    </div>
                  ) : (
                    <p className="text-xl font-bold text-sky-600 mb-2">{special.discount}</p>
                  )}
                  <p className="text-sm text-amber-700 font-medium">{special.bonus}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/book">
              <Button>
                Book a Special
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured Services with Images */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose your path to relaxation. Each treatment is crafted to restore
              your body, calm your mind, and rejuvenate your spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} variant="elevated" className="group overflow-hidden">
                <div
                  className="h-48 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <CardContent>
                  <Badge variant="default" size="sm" className="mb-2">
                    {service.category.replace('_', ' ')}
                  </Badge>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-slate-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {formatDuration(service.duration)}
                    </div>
                    <span className="text-lg font-semibold text-sky-600">
                      {formatPrice(service.price)}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Environment Section with Parallax */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070)',
          }}
        />
        <div className="absolute inset-0 bg-slate-900/80" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Relax in Our Unique Environment
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              When you visit us, you&apos;ll instantly feel the comfort of Aloha upon
              entering our welcoming lobby. As you step into the therapy area,
              you&apos;ll be absorbed by our peaceful atmosphere.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Your mind and soul will begin to relax as a warming calm takes over.
              Your body will now be ready for complete soothing.
            </p>
            <p className="text-3xl font-medium text-cyan-400 mb-10">
              Come, Relax with Aloha!
            </p>
            <Link href="/book">
              <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
                I Want to Relax
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Meet Our Therapists */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Meet Our Expert Therapists
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our team brings decades of combined experience in Hawaiian and
              therapeutic massage techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <Card key={therapist.name} variant="elevated">
                <CardContent className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-sky-200 to-sky-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-sky-700">
                      {therapist.name[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {therapist.name}
                  </h3>
                  <p className="text-sky-600 font-medium text-sm mb-2">
                    {therapist.title}
                  </p>
                  <p className="text-slate-500 text-sm mb-4">
                    {therapist.years}+ years experience
                  </p>
                  <p className="text-slate-600 text-sm">
                    {therapist.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="ml-2 text-slate-600 font-medium">4.9 out of 5</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated">
                <CardContent>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 italic leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.source}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA with Parallax */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-700/90 to-sky-600/80" />
        <Container className="relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready for Your &quot;Me Time&quot;?
            </h2>
            <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
              Don&apos;t wait any longer. You deserve to feel relaxed, renewed, and
              completely at peace. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100 w-full sm:w-auto text-lg px-10">
                  Book Online Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+18081234567">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (808) 123-4567
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
