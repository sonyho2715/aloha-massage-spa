import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Heart, Users, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { Container, Button, Card, CardContent, Badge } from '@/components/ui';

export const metadata: Metadata = {
  title: 'About Us | Aloha Massage Spa',
  description: 'Learn about Aloha Massage Spa, our story, values, and the caring therapists dedicated to your wellness.',
};

const therapists = [
  {
    name: 'Angela Kahale',
    title: 'Owner & Lead Therapist',
    specialty: 'Lomi Lomi Specialist',
    years: 15,
    bio: 'Angela learned the art of Lomi Lomi from her grandmother, a native Hawaiian healer. Her passion for preserving traditional healing arts led her to open Aloha Massage Spa. She believes everyone deserves a peaceful escape from daily stress.',
    quote: 'I understand how important it is to take a moment for yourself.',
  },
  {
    name: 'Tony Martinez',
    title: 'Senior Massage Therapist',
    specialty: 'Deep Tissue & Sports Massage',
    years: 10,
    bio: 'With a background in sports medicine, Tony specializes in therapeutic techniques that help athletes and active individuals recover and perform at their best. His hands-on approach has helped countless guests find relief.',
    quote: 'Your body tells a story. I listen and help it heal.',
  },
  {
    name: 'Andy Chen',
    title: 'Massage Therapist',
    specialty: 'Swedish & Relaxation Massage',
    years: 6,
    bio: 'Andy brings a calm, intuitive approach to massage therapy. His gentle techniques create a deeply relaxing experience for every guest. Clients often say they feel like they\'re floating after his sessions.',
    quote: 'True relaxation is a gift you give yourself.',
  },
  {
    name: 'Malia Kealoha',
    title: 'Esthetician',
    specialty: 'Facial Treatments',
    years: 8,
    bio: 'Malia is passionate about skincare and specializes in treatments using Hawaiian botanicals. She customizes every facial to address your unique skin needs, believing that healthy skin reflects inner wellness.',
    quote: 'When you look good, you feel good. Let me help you glow.',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Aloha Spirit',
    description: 'We embody the Hawaiian concept of aloha—love, compassion, and mutual respect—in every interaction. You\'re not just a client; you\'re our guest.',
  },
  {
    icon: Sparkles,
    title: 'Genuine Care',
    description: 'We truly care about your well-being. That\'s why we take time to understand your needs and customize every treatment just for you.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We continuously improve our skills and techniques. Our therapists regularly train to bring you the highest quality treatments available.',
  },
  {
    icon: Users,
    title: 'Personal Connection',
    description: 'We remember your name, your preferences, and what helps you relax. Because great service is personal service.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="info" className="mb-4">
                <Heart className="w-3 h-3 mr-1" />
                Our Story
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                More Than a Spa. A Sanctuary.
              </h1>
              <p className="text-lg text-slate-600 mb-4">
                Aloha Massage Spa was founded with a simple belief: <strong>everyone deserves
                a peaceful escape</strong>. A place where the outside world fades away and
                you can finally focus on yourself.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Our founder, Angela Kahale, grew up learning the ancient art of Lomi Lomi
                massage from her grandmother, a respected healer in her community. She dreamed
                of creating a sanctuary where these traditions could thrive alongside modern
                wellness practices.
              </p>
              <p className="text-lg text-slate-600">
                Today, we're honored to serve thousands of guests each year, helping them
                find the relaxation, healing, and renewal they deserve. When you visit us,
                you become part of our ohana (family).
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="text-7xl font-bold text-sky-600">🌺</span>
                  <p className="mt-4 text-xl font-medium text-sky-700">
                    "Come, Relax with Aloha"
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-sky-600">10+</p>
                <p className="text-slate-600">Years of Service</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white p-5 rounded-xl shadow-lg">
                <p className="text-4xl font-bold text-sky-600">5,000+</p>
                <p className="text-slate-600">Happy Guests</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Angela's Message */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-sky-200 to-sky-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl font-bold text-sky-700">A</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    A Personal Note from Angela
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    I understand how busy life gets. Between work, family, and everything else,
                    it's easy to put yourself last on the list. But here's what I've learned:
                    <strong> you can't pour from an empty cup</strong>.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    That's why I created Aloha Massage Spa—to be a place where you can
                    step away from your responsibilities, even if just for an hour, and
                    give your body and mind the care they deserve.
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    When you walk through our doors, you're not just another appointment.
                    You're our guest. And we'll do everything we can to make sure you leave
                    feeling better than when you arrived.
                  </p>
                  <p className="font-medium text-sky-700 text-lg">
                    — Angela Kahale, Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Believe</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These aren't just words on a wall. They guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} variant="elevated" className="text-center">
                <CardContent>
                  <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-sky-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Skilled, caring, and dedicated to your wellness. Get to know the people
              who will be taking care of you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {therapists.map((therapist) => (
              <Card key={therapist.name} variant="elevated">
                <CardContent>
                  <div className="flex gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-sky-100 to-sky-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-semibold text-sky-700">
                        {therapist.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900">{therapist.name}</h3>
                      <p className="text-sky-600 font-medium">{therapist.title}</p>
                      <p className="text-slate-500 text-sm mb-3">
                        {therapist.specialty} • {therapist.years} years experience
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 mt-4 text-sm leading-relaxed">{therapist.bio}</p>
                  <p className="text-slate-500 italic mt-4 text-sm">"{therapist.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-sky-600 to-sky-700">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Come Experience the Aloha Difference</h2>
            <p className="text-xl text-sky-100 mb-8">
              We can't wait to welcome you. Book your first appointment and see why
              our guests keep coming back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100 w-full sm:w-auto">
                  Book Your Appointment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+18081234567">
                <Button
                  size="lg"
                  variant="outline"
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
