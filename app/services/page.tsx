import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight, Sparkles, Heart, Phone } from 'lucide-react';
import { Container, Button, Card, CardContent, Badge } from '@/components/ui';
import { ParallaxHero } from '@/components/ParallaxHero';
import { formatPrice, formatDuration } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Services | Aloha Massage Spa',
  description: 'Choose your path to relaxation. Massage therapy, facials, body treatments, and spa packages in Honolulu.',
};

// Services data with images
const services = {
  MASSAGE: [
    {
      id: '1',
      name: 'Lomi Lomi Massage',
      description: 'Traditional Hawaiian massage using long, flowing strokes that mimic the rhythm of the ocean.',
      duration: 60,
      price: 9500,
      popular: true,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
    },
    {
      id: '2',
      name: 'Deep Tissue Massage',
      description: 'Targeted pressure therapy that reaches the deeper layers of muscle tissue.',
      duration: 60,
      price: 10500,
      popular: true,
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400',
    },
    {
      id: '3',
      name: 'Swedish Massage',
      description: 'Classic relaxation massage using gentle to moderate pressure with flowing strokes.',
      duration: 60,
      price: 8500,
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400',
    },
    {
      id: '4',
      name: 'Hot Stone Massage',
      description: 'Heated basalt stones melt away tension and promote deep relaxation.',
      duration: 75,
      price: 12500,
      image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?w=400',
    },
    {
      id: '5',
      name: 'Sports Massage',
      description: 'Designed for athletes and active individuals with overused muscles.',
      duration: 60,
      price: 11000,
      image: 'https://images.unsplash.com/photo-1573384666979-2b1e160d2d08?w=400',
    },
    {
      id: '6',
      name: 'Prenatal Massage',
      description: 'Gentle massage designed specifically for expectant mothers.',
      duration: 60,
      price: 9500,
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400',
    },
  ],
  FACIAL: [
    {
      id: '7',
      name: 'Tropical Facial',
      description: 'Rejuvenating facial featuring Hawaiian botanicals for radiant skin.',
      duration: 45,
      price: 7500,
      popular: true,
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400',
    },
    {
      id: '8',
      name: 'Anti-Aging Facial',
      description: 'Advanced treatment targeting fine lines with collagen-boosting serums.',
      duration: 60,
      price: 9500,
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400',
    },
    {
      id: '9',
      name: 'Deep Cleansing Facial',
      description: 'Thorough cleansing that purifies pores and refreshes skin.',
      duration: 45,
      price: 6500,
      image: 'https://images.unsplash.com/photo-1552693673-1bf958298935?w=400',
    },
  ],
  BODY_TREATMENT: [
    {
      id: '10',
      name: 'Hawaiian Sea Salt Scrub',
      description: 'Exfoliating treatment using Hawaiian sea salt for glowing skin.',
      duration: 45,
      price: 7000,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
    },
    {
      id: '11',
      name: 'Coconut Body Wrap',
      description: 'Nourishing wrap with coconut oil that deeply hydrates skin.',
      duration: 60,
      price: 8500,
      image: 'https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=400',
    },
  ],
  PACKAGE: [
    {
      id: '12',
      name: 'Couples Retreat',
      description: 'Side-by-side massages with champagne and chocolates.',
      duration: 90,
      price: 22000,
      popular: true,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400',
    },
    {
      id: '13',
      name: 'Island Escape',
      description: 'Complete spa journey: body scrub, wrap, and full massage.',
      duration: 150,
      price: 25000,
      image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=400',
    },
    {
      id: '14',
      name: 'Quick Refresh',
      description: '30-minute massage and express facial for busy schedules.',
      duration: 60,
      price: 11000,
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400',
    },
  ],
};

const categoryLabels = {
  MASSAGE: 'Massage Therapy',
  FACIAL: 'Facial Treatments',
  BODY_TREATMENT: 'Body Treatments',
  PACKAGE: 'Spa Packages',
};

const categoryDescriptions = {
  MASSAGE: 'Let go of the tension you\'ve been carrying. Our skilled therapists will customize each session for you.',
  FACIAL: 'Your skin deserves attention too. Reveal your natural radiance with Hawaiian botanicals.',
  BODY_TREATMENT: 'Pamper yourself from head to toe with luxurious treatments.',
  PACKAGE: 'Can\'t decide? Combine multiple treatments for the ultimate experience.',
};

const categoryImages = {
  MASSAGE: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200',
  FACIAL: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200',
  BODY_TREATMENT: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200',
  PACKAGE: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        imageUrl="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2070"
        height="min-h-[60vh]"
      >
        <Container>
          <div className="max-w-3xl text-white text-center mx-auto">
            <Badge variant="info" className="mb-4 bg-white/20 text-white border-white/30">
              <Heart className="w-3 h-3 mr-1" />
              Choose Your Path to Relaxation
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              You work hard. You deal with stress every day. Now it&apos;s time to take care of <strong>you</strong>.
            </p>
          </div>
        </Container>
      </ParallaxHero>

      {/* Quick Nav */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-0 z-40">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <a
                key={key}
                href={`#${key.toLowerCase()}`}
                className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-700 transition-colors text-sm font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Services by Category */}
      {Object.entries(services).map(([category, categoryServices], index) => (
        <section
          key={category}
          id={category.toLowerCase()}
          className="scroll-mt-20"
        >
          {/* Category Header with Image */}
          <div className="relative py-20 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${categoryImages[category as keyof typeof categoryImages]})` }}
            />
            <div className="absolute inset-0 bg-slate-900/70" />
            <Container className="relative z-10">
              <div className="max-w-2xl text-white">
                <h2 className="text-4xl font-bold mb-3">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h2>
                <p className="text-xl text-slate-200">
                  {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                </p>
              </div>
            </Container>
          </div>

          {/* Services Grid */}
          <div className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <Container>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryServices.map((service) => (
                  <Card key={service.id} variant="elevated" className="flex flex-col relative overflow-hidden">
                    {'popular' in service && service.popular && (
                      <div className="absolute top-4 right-4 z-10">
                        <Badge variant="warning" size="sm">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <CardContent className="flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {service.name}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2 text-slate-500">
                            <Clock className="w-4 h-4" />
                            <span>{formatDuration(service.duration)}</span>
                          </div>
                          <span className="text-2xl font-bold text-sky-600">
                            {formatPrice(service.price)}
                          </span>
                        </div>
                        <Link href={`/book?service=${service.id}`}>
                          <Button className="w-full">
                            Book This Treatment
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Container>
          </div>
        </section>
      ))}

      {/* CTA with Parallax */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2070)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-700/90 to-sky-600/80" />
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Not Sure Which Treatment Is Right for You?</h2>
            <p className="text-xl text-sky-100 mb-6">
              That&apos;s okay! Everyone&apos;s body is different. Give us a call and
              we&apos;ll help you find the perfect treatment.
            </p>
            <p className="text-sky-200 mb-10">
              Our team genuinely cares about helping you feel your best. No pressure, just honest guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18081234567">
                <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100 w-full sm:w-auto text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call (808) 123-4567
                </Button>
              </a>
              <Link href="/book">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Book Online
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
