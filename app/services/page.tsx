import { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Container, Button, Card, CardContent, Badge } from '@/components/ui';
import { formatPrice, formatDuration } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our full menu of massage therapy, facials, body treatments, and spa packages.',
};

// Services data (in production, fetch from database)
const services = {
  MASSAGE: [
    {
      id: '1',
      name: 'Lomi Lomi Massage',
      description: 'Traditional Hawaiian massage using long, flowing strokes that mimic the rhythm of the ocean. This nurturing technique promotes deep relaxation and restores harmony to your body and spirit.',
      duration: 60,
      price: 9500,
    },
    {
      id: '2',
      name: 'Deep Tissue Massage',
      description: 'Targeted pressure therapy that reaches the deeper layers of muscle tissue to release chronic tension, break down adhesions, and restore natural movement patterns.',
      duration: 60,
      price: 10500,
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
      description: 'Gentle, nurturing massage designed specifically for expectant mothers. Helps relieve pregnancy-related discomforts.',
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
      description: 'Share a relaxing experience in our couples suite with side-by-side massages. Includes champagne and chocolates.',
      duration: 90,
      price: 22000,
    },
    {
      id: '13',
      name: 'Island Escape',
      description: 'Complete spa journey including body scrub, wrap, and full-body massage. The ultimate relaxation experience.',
      duration: 150,
      price: 25000,
    },
    {
      id: '14',
      name: 'Quick Refresh',
      description: 'Perfect for a lunch break. Includes 30-minute massage and express facial to refresh and revitalize.',
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
  MASSAGE: 'Release tension and restore balance with our range of therapeutic massage treatments.',
  FACIAL: 'Reveal your natural radiance with customized facial treatments for every skin type.',
  BODY_TREATMENT: 'Exfoliate, hydrate, and rejuvenate with our luxurious body treatments.',
  PACKAGE: 'Combine multiple treatments for the ultimate spa experience.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-stone-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="info" className="mb-4">
              <Sparkles className="w-3 h-3 mr-1" />
              Full Service Menu
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-stone-600">
              From traditional Hawaiian Lomi Lomi to modern therapeutic techniques,
              discover the perfect treatment for your wellness journey.
            </p>
          </div>
        </Container>
      </section>

      {/* Services by Category */}
      {Object.entries(services).map(([category, categoryServices]) => (
        <section
          key={category}
          id={category.toLowerCase()}
          className="py-16 even:bg-stone-50"
        >
          <Container>
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-stone-900 mb-2">
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h2>
              <p className="text-lg text-stone-600">
                {categoryDescriptions[category as keyof typeof categoryDescriptions]}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryServices.map((service) => (
                <Card key={service.id} variant="elevated" className="flex flex-col">
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
                          Book Now
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

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Not Sure Which Service to Choose?</h2>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Call us and our team will help you find the perfect treatment for your needs.
            </p>
            <a href="tel:+18081234567">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-stone-100">
                Call (808) 123-4567
              </Button>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
