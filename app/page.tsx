import Link from 'next/link';
import { Star, Clock, Award, Users, ArrowRight, Phone, Sparkles, Heart, Leaf, MapPin } from 'lucide-react';
import { Container, Button, Card, CardContent, Badge } from '@/components/ui';
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
  },
  {
    id: '2',
    name: 'Deep Tissue Massage',
    description: 'Targeted pressure to release chronic muscle tension and knots.',
    duration: 60,
    price: 10500,
    category: 'MASSAGE',
  },
  {
    id: '3',
    name: 'Couples Retreat',
    description: 'Share a relaxing experience with side-by-side massages in our couples suite.',
    duration: 90,
    price: 22000,
    category: 'PACKAGE',
  },
  {
    id: '4',
    name: 'Hot Stone Massage',
    description: 'Heated basalt stones melt away tension and promote deep relaxation.',
    duration: 75,
    price: 12500,
    category: 'MASSAGE',
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
    text: "Booked this place due to having a bad experience at my resort's spa. I had just flew in from my flight and went straight to get my couples massage. I was frustrated and irritable due to having a bad day. Angela was very welcoming and nice to us. She provided amazing customer care and also gave us some wise words. The massage was amazing. I felt a load off my back. After that everything went great for the rest of our trip. Thanks Angela for being so kind to us and understanding. When I come back I will book with you again.",
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
    bio: 'Angela learned the art of Lomi Lomi from her grandmother, a native Hawaiian healer. Her passion for preserving traditional healing arts led her to open Aloha Massage Spa.',
  },
  {
    name: 'Tony',
    title: 'Deep Tissue & Sports Expert',
    years: 10,
    bio: 'With a background in sports medicine, Tony specializes in therapeutic techniques that help athletes and active individuals recover.',
  },
  {
    name: 'Andy',
    title: 'Swedish & Hot Stone Specialist',
    years: 6,
    bio: 'Andy brings a calm, intuitive approach to massage therapy. His gentle techniques create a deeply relaxing experience.',
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Welcome Message */}
      <section className="relative hero-pattern py-16 lg:py-28">
        <Container>
          <div className="max-w-4xl">
            {/* Aloha Greeting */}
            <p className="text-2xl text-teal-600 font-medium mb-4">Aloha,</p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
              You Deserve a Moment of{' '}
              <span className="text-gradient">Peace</span>
            </h1>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-stone-200">
              <p className="text-lg text-stone-700 leading-relaxed">
                Life moves fast. You work hard, deal with stress you weren't looking for,
                and handle "life" every day. Now is the perfect time to pause and breathe.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed mt-4">
                Whether you need to unwind with a classic Swedish massage, work out tension
                with Deep Tissue, or experience the warmth of Hot Stone therapy, we have
                a ritual designed just for <strong>you</strong>.
              </p>
              <p className="text-stone-600 mt-4 italic">
                Make your well-being a priority. The only thing you need to worry about
                now is which massage to choose.
              </p>
              <p className="mt-4 text-stone-700">
                We look forward to welcoming you soon.
              </p>
              <p className="mt-2 font-medium text-teal-700">
                Warmly, The Aloha Massage Spa Team 🌺
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Your Escape
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+18081234567">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  (808) 123-4567
                </Button>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 mt-10 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="font-semibold text-stone-900">4.9</span>
                <span className="text-stone-500">(500+ reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-teal-600" />
                <span className="text-stone-600">Licensed & Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-600" />
                <span className="text-stone-600">Honolulu, Hawaii</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Let Us Spoil You Section */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="info" className="mb-4">
                <Heart className="w-3 h-3 mr-1" />
                You Deserve This
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">
                Let Us Spoil You
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                You work hard, find stress you weren't looking for, deal with "life" every day,
                and deserve <strong>"you time."</strong>
              </p>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Your experience at Aloha Massage Spa will be like stepping out of life
                for a few moments, allowing you to recharge and rejuvenate. Even if for
                only an hour or two, come and enjoy our soothing ambiance and excellent
                services and get revived!
              </p>
              <p className="text-xl font-medium text-teal-700 mb-8">
                Be pampered. Be spoiled. Let us help you.
              </p>
              <Link href="/services">
                <Button size="lg">
                  Take Me There
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Atmosphere Features */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Serene Visuals</h3>
                <p className="text-stone-600">
                  From the moment you enter, our peaceful decor and soft lighting
                  begin calming your senses.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Soothing Sounds & Aromas</h3>
                <p className="text-stone-600">
                  Gentle Hawaiian music and delightful aromatherapy create the
                  perfect atmosphere for relaxation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">Expert Touch</h3>
                <p className="text-stone-600">
                  Our skilled therapists customize every session to your unique needs,
                  ensuring complete satisfaction.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Owner's Message */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-stone-50 to-teal-50 rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl font-bold text-teal-700">A</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-stone-900 mb-4">
                    A Message from Angela
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    As the owner of Aloha Massage Spa, I understand how important it is to
                    take a moment for yourself, whether you're seeking relief from physical
                    aches or just need a brief escape from the daily grind.
                  </p>
                  <p className="text-stone-600 leading-relaxed mb-4">
                    At our spa, we start by calming your senses with serene visuals, soothing
                    sounds, and delightful aromas. This peaceful setting, combined with the
                    exceptional skills of our trained therapists, ensures that your visit to
                    Aloha Massage Spa provides the perfect "me time" that you both need and deserve.
                  </p>
                  <p className="font-medium text-teal-700 text-lg">
                    — Angela, Owner & Lead Therapist
                  </p>
                </div>
              </div>
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
            <h2 className="text-3xl font-bold text-stone-900">
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
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{special.title}</h3>
                  <p className="text-stone-600 mb-4">{special.description}</p>
                  {special.originalPrice ? (
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-stone-400 line-through">{formatPrice(special.originalPrice)}</span>
                      <span className="text-2xl font-bold text-teal-600">{formatPrice(special.salePrice!)}</span>
                    </div>
                  ) : (
                    <p className="text-xl font-bold text-teal-600 mb-2">{special.discount}</p>
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

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Choose your path to relaxation. Each treatment is crafted to restore
              your body, calm your mind, and rejuvenate your spirit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} variant="elevated" className="group">
                <CardContent>
                  <div className="h-40 bg-gradient-to-br from-teal-50 to-stone-100 rounded-lg mb-4 flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-teal-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <Badge variant="default" size="sm" className="mb-2">
                    {service.category.replace('_', ' ')}
                  </Badge>
                  <h3 className="text-lg font-semibold text-stone-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-stone-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {formatDuration(service.duration)}
                    </div>
                    <span className="text-lg font-semibold text-teal-600">
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

      {/* The Environment Section */}
      <section className="py-20 bg-stone-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Relax in Our Unique Massage Therapy Environment
            </h2>
            <p className="text-lg text-stone-300 leading-relaxed mb-6">
              When you visit us, you'll instantly feel the comfort of Aloha upon
              entering our welcoming lobby. As you step into the therapy area,
              you'll be absorbed by our peaceful atmosphere.
            </p>
            <p className="text-lg text-stone-300 leading-relaxed mb-8">
              Your mind and soul will begin to relax as a warming calm takes over.
              Your body will now be ready for complete soothing.
            </p>
            <p className="text-2xl font-medium text-teal-400 mb-10">
              Come, Relax with Aloha!
            </p>
            <Link href="/book">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600">
                I Want to Relax
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Meet Our Therapists */}
      <section className="py-20 bg-stone-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              Meet Our Expert Therapists
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Our team brings decades of combined experience in Hawaiian and
              therapeutic massage techniques.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {therapists.map((therapist) => (
              <Card key={therapist.name} variant="elevated">
                <CardContent className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-teal-700">
                      {therapist.name[0]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-1">
                    {therapist.name}
                  </h3>
                  <p className="text-teal-600 font-medium text-sm mb-2">
                    {therapist.title}
                  </p>
                  <p className="text-stone-500 text-sm mb-4">
                    {therapist.years}+ years experience
                  </p>
                  <p className="text-stone-600 text-sm">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
              <span className="ml-2 text-stone-600 font-medium">4.9 out of 5</span>
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
                  <p className="text-stone-600 mb-4 italic leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-stone-900">{testimonial.name}</p>
                      <p className="text-sm text-stone-500">{testimonial.source}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready for Your "Me Time"?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Don't wait any longer. You deserve to feel relaxed, renewed, and
              completely at peace. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-teal-700 hover:bg-stone-100 w-full sm:w-auto">
                  Book Online Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+18081234567">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
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
