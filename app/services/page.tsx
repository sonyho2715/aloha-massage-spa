import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight, Sparkles, Heart, Phone } from 'lucide-react';
import { Container, Button, Card, CardContent, Badge } from '@/components/ui';
import { formatPrice, formatDuration } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Services | Aloha Massage Spa',
  description: 'Choose your path to relaxation. Massage therapy, facials, body treatments, and spa packages in Honolulu.',
};

// Services data
const services = {
  MASSAGE: [
    {
      id: '1',
      name: 'Lomi Lomi Massage',
      description: 'Traditional Hawaiian massage using long, flowing strokes that mimic the rhythm of the ocean. This nurturing technique promotes deep relaxation and restores harmony to your body and spirit.',
      duration: 60,
      price: 9500,
      popular: true,
    },
    {
      id: '2',
      name: 'Deep Tissue Massage',
      description: 'Targeted pressure therapy that reaches the deeper layers of muscle tissue to release chronic tension, break down adhesions, and restore natural movement patterns.',
      duration: 60,
      price: 10500,
      popular: true,
    },
    {
      id: '3',
      name: 'Swedish Massage',
      description: 'Classic relaxation massage using gentle to moderate pressure with long, flowing strokes. Perfect for stress relief and overall wellness.',
      duration: 60,
      price: 8500,
    },
    {
      id: '4',
      name: 'Hot Stone Massage',
      description: 'Smooth, heated basalt stones are placed on key points and used to massage the body, melting away tension and promoting deep relaxation.',
      duration: 75,
      price: 12500,
    },
    {
      id: '5',
      name: 'Sports Massage',
      description: 'Designed for athletes and active individuals. Focuses on areas of the body that are overused from repetitive movements.',
      duration: 60,
      price: 11000,
    },
    {
      id: '6',
      name: 'Prenatal Massage',
      description: 'Gentle, nurturing massage designed specifically for expectant mothers. Helps relieve pregnancy-related discomforts safely and effectively.',
      duration: 60,
      price: 9500,
    },
  ],
  FACIAL: [
    {
      id: '7',
      name: 'Tropical Facial',
      description: 'Rejuvenating facial featuring local Hawaiian botanicals including noni, kukui nut, and tropical fruit extracts for radiant, hydrated skin.',
      duration: 45,
      price: 7500,
      popular: true,
    },
    {
      id: '8',
      name: 'Anti-Aging Facial',
      description: 'Advanced treatment targeting fine lines and wrinkles with collagen-boosting serums and specialized massage techniques.',
      duration: 60,
      price: 9500,
    },
    {
      id: '9',
      name: 'Deep Cleansing Facial',
      description: 'Thorough cleansing treatment that purifies pores, removes impurities, and leaves skin refreshed and balanced.',
      duration: 45,
      price: 6500,
    },
  ],
  BODY_TREATMENT: [
    {
      id: '10',
      name: 'Hawaiian Sea Salt Scrub',
      description: 'Exfoliating body treatment using Hawaiian sea salt and tropical oils to reveal smooth, glowing skin.',
      duration: 45,
      price: 7000,
    },
    {
      id: '11',
      name: 'Coconut Body Wrap',
      description: 'Nourishing body wrap infused with pure coconut oil and tropical extracts. Deeply hydrates and softens skin.',
      duration: 60,
      price: 8500,
    },
  ],
  PACKAGE: [
    {
      id: '12',
      name: 'Couples Retreat',
      description: 'Share a relaxing experience in our couples suite with side-by-side massages. Includes champagne and chocolates. Perfect for anniversaries or a special date.',
      duration: 90,
      price: 22000,
      popular: true,
    },
    {
      id: '13',
      name: 'Island Escape',
      description: 'Complete spa journey including body scrub, wrap, and full-body massage. The ultimate relaxation experience for those who deserve extended "me time."',
      duration: 150,
      price: 25000,
    },
    {
      id: '14',
      name: 'Quick Refresh',
      description: 'Perfect for a lunch break or busy schedule. Includes 30-minute massage and express facial to refresh and revitalize.',
      duration: 60,
      price: 11000,
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
  MASSAGE: 'Let go of the tension you\'ve been carrying. Our skilled therapists will customize each session to give your body exactly what it needs.',
  FACIAL: 'Your skin deserves attention too. Reveal your natural radiance with treatments featuring Hawaiian botanicals.',
  BODY_TREATMENT: 'Pamper yourself from head to toe. These luxurious treatments will leave your skin glowing and your spirit renewed.',
  PACKAGE: 'Can\'t decide? Combine multiple treatments for the ultimate "me time" experience. You deserve it.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-stone-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="info" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              Choose Your Path to Relaxation
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-stone-600 mb-6">
              You work hard. You deal with stress every day. Now it's time to take care of <strong>you</strong>.
            </p>
            <p className="text-lg text-stone-500">
              Browse our treatments below, or call us at{' '}
              <a href="tel:+18081234567" className="text-teal-600 font-medium hover:underline">
                (808) 123-4567
              </a>
              {' '}and we'll help you find the perfect service for your needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Nav */}
      <section className="py-6 bg-white border-b border-stone-200 sticky top-0 z-40">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categoryLabels).map(([key, label]) => (
              <a
                key={key}
                href={`#${key.toLowerCase()}`}
                className="px-4 py-2 rounded-full bg-stone-100 text-stone-700 hover:bg-teal-100 hover:text-teal-700 transition-colors text-sm font-medium"
              >
                {label}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Services by Category */}
      {Object.entries(services).map(([category, categoryServices]) => (
        <section
          key={category}
          id={category.toLowerCase()}
          className="py-16 even:bg-stone-50 scroll-mt-20"
        >
          <Container>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-stone-900 mb-3">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl">
                {categoryDescriptions[category as keyof typeof categoryDescriptions]}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryServices.map((service) => (
                <Card key={service.id} variant="elevated" className="flex flex-col relative">
                  {'popular' in service && service.popular && (
                    <div className="absolute -top-3 -right-3">
                      <Badge variant="warning" size="sm">
                        <Sparkles className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    </div>
                  )}
                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-stone-900 mb-2">
                        {service.name}
                      </h3>
                      <p className="text-stone-600 mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-stone-500">
                          <Clock className="w-4 h-4" />
                          <span>{formatDuration(service.duration)}</span>
                        </div>
                        <span className="text-2xl font-bold text-teal-600">
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
        </section>
      ))}

      {/* Personal Touch CTA */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-700">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Treatment Is Right for You?</h2>
            <p className="text-xl text-teal-100 mb-6">
              That's okay! Everyone's body is different, and we understand. Give us a call and
              we'll listen to what you're experiencing and recommend the perfect treatment.
            </p>
            <p className="text-teal-200 mb-8">
              Our team genuinely cares about helping you feel your best. No pressure, just honest guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18081234567">
                <Button size="lg" className="bg-white text-teal-700 hover:bg-stone-100 w-full sm:w-auto">
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
