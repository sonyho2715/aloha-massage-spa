import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Heart, Users, MapPin, ArrowRight } from 'lucide-react';
import { Container, Button, Card, CardContent } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Aloha Massage Spa, our story, values, and the talented therapists dedicated to your wellness.',
};

const therapists = [
  {
    name: 'Angela Kahale',
    title: 'Founder & Lead Therapist',
    specialty: 'Lomi Lomi Specialist',
    years: 15,
    bio: 'Angela learned the art of Lomi Lomi from her grandmother, a native Hawaiian healer. Her passion for preserving traditional healing arts led her to open Aloha Massage Spa.',
  },
  {
    name: 'Tony Martinez',
    title: 'Senior Massage Therapist',
    specialty: 'Deep Tissue & Sports Massage',
    years: 10,
    bio: 'With a background in sports medicine, Tony specializes in therapeutic techniques that help athletes and active individuals recover and perform at their best.',
  },
  {
    name: 'Andy Chen',
    title: 'Massage Therapist',
    specialty: 'Swedish & Relaxation Massage',
    years: 6,
    bio: 'Andy brings a calm, intuitive approach to massage therapy. His gentle techniques create a deeply relaxing experience for every guest.',
  },
  {
    name: 'Malia Kealoha',
    title: 'Esthetician',
    specialty: 'Facial Treatments',
    years: 8,
    bio: 'Malia is passionate about skincare and specializes in treatments using Hawaiian botanicals. She customizes every facial to address your unique skin needs.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Aloha Spirit',
    description: 'We embody the Hawaiian concept of aloha—love, compassion, and mutual respect—in every interaction.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We continuously improve our skills and techniques to provide the highest quality treatments.',
  },
  {
    icon: Users,
    title: 'Personal Connection',
    description: 'We take time to understand your needs and customize every treatment for optimal results.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-stone-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-6">
                Our Story
              </h1>
              <p className="text-lg text-stone-600 mb-4">
                Aloha Massage Spa was founded in 2015 with a simple mission: to share the
                healing traditions of Hawaii with everyone who walks through our doors.
              </p>
              <p className="text-lg text-stone-600 mb-4">
                Our founder, Angela Kahale, grew up learning the ancient art of Lomi Lomi
                massage from her grandmother, a respected healer in her community. She dreamed
                of creating a sanctuary where these traditions could thrive alongside modern
                wellness practices.
              </p>
              <p className="text-lg text-stone-600">
                Today, Aloha Massage Spa is honored to serve thousands of guests each year,
                helping them find relaxation, healing, and renewal in the spirit of aloha.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl flex items-center justify-center">
                <MapPin className="w-24 h-24 text-teal-600" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-3xl font-bold text-teal-600">10+</p>
                <p className="text-stone-600">Years of Service</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Our Values</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Everything we do is guided by these core principles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} variant="outlined" className="text-center">
                <CardContent>
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-2">{value.title}</h3>
                  <p className="text-stone-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 bg-stone-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Our skilled therapists are dedicated to your wellness and relaxation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {therapists.map((therapist) => (
              <Card key={therapist.name} variant="elevated">
                <CardContent className="flex gap-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-semibold text-teal-700">
                      {therapist.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-stone-900">{therapist.name}</h3>
                    <p className="text-teal-600 font-medium">{therapist.title}</p>
                    <p className="text-stone-500 text-sm mb-2">
                      {therapist.specialty} • {therapist.years} years experience
                    </p>
                    <p className="text-stone-600 text-sm">{therapist.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Experience the Aloha Difference</h2>
            <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
              Book your appointment and let our team take care of you.
            </p>
            <Link href="/book">
              <Button size="lg" className="bg-white text-teal-700 hover:bg-stone-100">
                Book Your Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
