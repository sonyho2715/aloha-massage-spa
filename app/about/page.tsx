import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Heart, Users, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { Container, Button, Card, CardContent, Badge } from '@/components/ui';
import { ParallaxHero } from '@/components/ParallaxHero';

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
    bio: 'Angela learned the art of Lomi Lomi from her grandmother, a native Hawaiian healer. Her passion for preserving traditional healing arts led her to open Aloha Massage Spa.',
    quote: 'I understand how important it is to take a moment for yourself.',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400',
  },
  {
    name: 'Tony Martinez',
    title: 'Senior Massage Therapist',
    specialty: 'Deep Tissue & Sports Massage',
    years: 10,
    bio: 'With a background in sports medicine, Tony specializes in therapeutic techniques that help athletes and active individuals recover.',
    quote: 'Your body tells a story. I listen and help it heal.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
  {
    name: 'Andy Chen',
    title: 'Massage Therapist',
    specialty: 'Swedish & Relaxation Massage',
    years: 6,
    bio: 'Andy brings a calm, intuitive approach to massage therapy. His gentle techniques create a deeply relaxing experience.',
    quote: 'True relaxation is a gift you give yourself.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
  },
  {
    name: 'Malia Kealoha',
    title: 'Esthetician',
    specialty: 'Facial Treatments',
    years: 8,
    bio: 'Malia is passionate about skincare and specializes in treatments using Hawaiian botanicals.',
    quote: 'When you look good, you feel good. Let me help you glow.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Aloha Spirit',
    description: 'We embody the Hawaiian concept of aloha—love, compassion, and mutual respect—in every interaction.',
  },
  {
    icon: Sparkles,
    title: 'Genuine Care',
    description: 'We truly care about your well-being. That\'s why we customize every treatment just for you.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We continuously improve our skills to bring you the highest quality treatments available.',
  },
  {
    icon: Users,
    title: 'Personal Connection',
    description: 'We remember your name, your preferences, and what helps you relax.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        imageUrl="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070"
        height="min-h-[70vh]"
      >
        <Container>
          <div className="max-w-3xl text-white">
            <Badge variant="info" className="mb-4 bg-white/20 text-white border-white/30">
              <Heart className="w-3 h-3 mr-1" />
              Our Story
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              More Than a Spa.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-300">
                A Sanctuary.
              </span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
              Where the outside world fades away and you can finally focus on yourself.
              Welcome to our ohana.
            </p>
          </div>
        </Container>
      </ParallaxHero>

      {/* Story Section */}
      <section className="py-20 bg-[#faf8f5]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Our Beginning
              </h2>
              <p className="text-lg text-slate-600 mb-4">
                Aloha Massage Spa was founded with a simple belief: <strong>everyone deserves
                a peaceful escape</strong>. A place where stress melts away and renewal begins.
              </p>
              <p className="text-lg text-slate-600 mb-4">
                Our founder, Angela Kahale, grew up learning the ancient art of Lomi Lomi
                massage from her grandmother, a respected healer in her community. She dreamed
                of creating a sanctuary where these traditions could thrive.
              </p>
              <p className="text-lg text-slate-600">
                Today, we're honored to serve thousands of guests each year, helping them
                find the relaxation, healing, and renewal they deserve.
              </p>
            </div>
            <div className="relative">
              <div
                className="aspect-[4/5] rounded-2xl bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800)',
                }}
              />
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

      {/* Angela's Message with Parallax */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070)',
          }}
        />
        <div className="absolute inset-0 bg-sky-900/80" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center text-white">
              <div
                className="w-40 h-40 rounded-full bg-cover bg-center border-4 border-white/30 flex-shrink-0"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400)',
                }}
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  A Personal Note from Angela
                </h2>
                <p className="text-sky-100 leading-relaxed mb-4">
                  I understand how busy life gets. Between work, family, and everything else,
                  it's easy to put yourself last. But here's what I've learned:
                  <strong className="text-white"> you can't pour from an empty cup</strong>.
                </p>
                <p className="text-sky-100 leading-relaxed mb-4">
                  That's why I created Aloha Massage Spa—to be a place where you can
                  step away from your responsibilities and give your body and mind the care they deserve.
                </p>
                <p className="text-xl font-medium text-cyan-300">
                  — Angela Kahale, Owner
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">What We Believe</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These aren't just words on a wall. They guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} variant="elevated" className="text-center">
                <CardContent>
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-sky-600" />
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
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Skilled, caring, and dedicated to your wellness.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapists.map((therapist) => (
              <Card key={therapist.name} variant="elevated" className="overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${therapist.image})` }}
                />
                <CardContent className="text-center">
                  <h3 className="text-xl font-semibold text-slate-900">{therapist.name}</h3>
                  <p className="text-sky-600 font-medium text-sm">{therapist.title}</p>
                  <p className="text-slate-500 text-xs mt-1 mb-3">
                    {therapist.specialty} • {therapist.years} yrs
                  </p>
                  <p className="text-slate-600 text-sm">{therapist.bio}</p>
                  <p className="text-slate-400 italic text-xs mt-3">"{therapist.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA with Parallax */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-700/90 to-sky-600/80" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Come Experience the Aloha Difference</h2>
            <p className="text-xl text-sky-100 mb-10">
              We can't wait to welcome you. Book your first appointment and see why
              our guests keep coming back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100 w-full sm:w-auto text-lg">
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
