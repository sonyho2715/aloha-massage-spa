import Link from 'next/link';
import { Star, Clock, Award, Users, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Container, Button, Card, CardContent, Badge } from '@/components/ui';
import { formatPrice, formatDuration } from '@/lib/utils';

// Featured services data (in production, this would come from the database)
const featuredServices = [
  {
    id: '1',
    name: 'Lomi Lomi Massage',
    description: 'Traditional Hawaiian massage using flowing, rhythmic strokes to restore harmony.',
    duration: 60,
    price: 9500, // $95.00
    category: 'MASSAGE',
  },
  {
    id: '2',
    name: 'Deep Tissue Massage',
    description: 'Targeted pressure to release chronic muscle tension and knots.',
    duration: 60,
    price: 10500, // $105.00
    category: 'MASSAGE',
  },
  {
    id: '3',
    name: 'Couples Retreat',
    description: 'Share a relaxing experience with side-by-side massages in our couples suite.',
    duration: 90,
    price: 22000, // $220.00
    category: 'PACKAGE',
  },
  {
    id: '4',
    name: 'Tropical Facial',
    description: 'Rejuvenating facial with local Hawaiian botanicals and natural ingredients.',
    duration: 45,
    price: 7500, // $75.00
    category: 'FACIAL',
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Sarah M.',
    rating: 5,
    text: 'The best massage I\'ve ever had! Angela has magic hands. I felt completely renewed.',
    service: 'Lomi Lomi Massage',
  },
  {
    name: 'James K.',
    rating: 5,
    text: 'Perfect couples retreat for our anniversary. The ambiance and service were exceptional.',
    service: 'Couples Retreat',
  },
  {
    name: 'Lisa T.',
    rating: 5,
    text: 'Finally found relief from my chronic back pain. Tony really knows his craft.',
    service: 'Deep Tissue Massage',
  },
];

// Therapists
const therapists = [
  { name: 'Angela', specialty: 'Lomi Lomi Specialist', years: 12 },
  { name: 'Tony', specialty: 'Deep Tissue Expert', years: 8 },
  { name: 'Andy', specialty: 'Sports Massage', years: 6 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-pattern py-20 lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <Badge variant="info" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Hawaiian Wellness Experience
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight mb-6">
              Feel the True Spirit of{' '}
              <span className="text-gradient">Aloha</span>
            </h1>
            <p className="text-xl text-stone-600 mb-8 leading-relaxed">
              Escape to tranquility with authentic Hawaiian healing traditions.
              Our skilled therapists blend ancient techniques with modern wellness
              for a truly transformative experience.
            </p>
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
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-stone-200">
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
                <Users className="w-5 h-5 text-teal-600" />
                <span className="text-stone-600">10,000+ Happy Clients</span>
              </div>
            </div>
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
              Discover our most popular treatments, crafted to restore your body and mind.
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

      {/* Why Choose Us */}
      <section className="py-20 bg-stone-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">
                Why Guests Choose Aloha Massage Spa
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Expert Therapists</h3>
                    <p className="text-stone-600">
                      Our team brings decades of combined experience in Hawaiian and therapeutic massage techniques.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Authentic Experience</h3>
                    <p className="text-stone-600">
                      We honor traditional Hawaiian healing practices while incorporating modern wellness science.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Personalized Care</h3>
                    <p className="text-stone-600">
                      Every session is customized to your needs. We listen and adapt to ensure your complete satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Therapist Cards */}
            <div className="grid gap-4">
              <h3 className="text-xl font-semibold text-stone-900 mb-2">Meet Our Therapists</h3>
              {therapists.map((therapist) => (
                <Card key={therapist.name} variant="outlined" padding="sm">
                  <CardContent className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-semibold text-teal-700">
                        {therapist.name[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-900">{therapist.name}</h4>
                      <p className="text-stone-600 text-sm">{therapist.specialty}</p>
                      <p className="text-stone-500 text-xs">{therapist.years}+ years experience</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} variant="elevated">
                <CardContent>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-stone-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div className="border-t border-stone-100 pt-4">
                    <p className="font-semibold text-stone-900">{testimonial.name}</p>
                    <p className="text-sm text-stone-500">{testimonial.service}</p>
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
              Ready to Experience Aloha?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Book your appointment today and discover the healing power of Hawaiian wellness traditions.
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
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
