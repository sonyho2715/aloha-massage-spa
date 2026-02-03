import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Heart, ArrowRight, Car, Navigation } from 'lucide-react';
import { Container, Card, CardContent, Input, Textarea, Button, Badge } from '@/components/ui';
import { ParallaxHero } from '@/components/ParallaxHero';

export const metadata: Metadata = {
  title: 'Contact Us | Aloha Massage Spa',
  description: 'Get in touch with Aloha Massage Spa in Honolulu. Find our location, hours, and reach out with any questions.',
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Kalakaua Ave', 'Honolulu, HI 96815'],
    description: 'Conveniently located with easy parking',
    action: {
      label: 'Get Directions',
      href: 'https://maps.google.com/?q=123+Kalakaua+Ave+Honolulu+HI',
    },
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['(808) 123-4567'],
    description: 'Call us to book or ask questions',
    action: {
      label: 'Call Now',
      href: 'tel:+18081234567',
    },
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['aloha@massagespa.com'],
    description: 'We respond within 24 hours',
    action: {
      label: 'Send Email',
      href: 'mailto:aloha@massagespa.com',
    },
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon - Sat: 9am - 8pm', 'Sunday: 10am - 6pm'],
    description: 'Late appointments available',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxHero
        imageUrl="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2070"
        height="min-h-[50vh]"
      >
        <Container>
          <div className="max-w-3xl text-white text-center mx-auto">
            <Badge variant="info" className="mb-4 bg-white/20 text-white border-white/30">
              <Heart className="w-3 h-3 mr-1" />
              We&apos;re Here for You
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Have a question? Want to book an appointment? Or just want to say aloha?
              We&apos;d love to hear from you.
            </p>
          </div>
        </Container>
      </ParallaxHero>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#faf8f5]">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <Card key={item.title} variant="elevated" className="text-center">
                <CardContent>
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 text-lg">{item.title}</h3>
                  {item.details.map((detail, index) => (
                    <p key={index} className="text-slate-700 font-medium">{detail}</p>
                  ))}
                  <p className="text-slate-500 text-sm mt-2">{item.description}</p>
                  {item.action && (
                    <a
                      href={item.action.href}
                      className="inline-flex items-center mt-4 text-sky-600 font-medium hover:text-sky-700"
                    >
                      {item.action.label}
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Map Section with Parallax Background */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1559070169-a3077159ee16?q=80&w=2070)',
          }}
        />
        <div className="absolute inset-0 bg-sky-900/80" />
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Visit Our Spa</h2>
              <p className="text-xl text-sky-100 mb-6">
                We&apos;re located in the heart of Honolulu, easily accessible with free parking available.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Easy to Find</h3>
                    <p className="text-sky-200">Just minutes from Waikiki Beach and major hotels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Car className="w-6 h-6 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Free Parking</h3>
                    <p className="text-sky-200">Complimentary parking available for all guests.</p>
                  </div>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=123+Kalakaua+Ave+Honolulu+HI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8"
              >
                <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100">
                  <MapPin className="w-5 h-5 mr-2" />
                  Open in Google Maps
                </Button>
              </a>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl">
              <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-sky-600" />
                  <p className="font-semibold text-lg text-slate-700">123 Kalakaua Ave</p>
                  <p className="text-slate-500">Honolulu, HI 96815</p>
                  <a
                    href="https://maps.google.com/?q=123+Kalakaua+Ave+Honolulu+HI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline mt-2 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Info */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Have a question or special request? Fill out the form and we&apos;ll get back to you within 24 hours.
              </p>

              {/* Personal Note */}
              <div className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl p-8">
                <p className="text-slate-600 italic text-lg leading-relaxed">
                  &quot;When you arrive, you&apos;ll instantly feel the comfort of Aloha. Our welcoming
                  lobby sets the tone for your relaxing experience. We can&apos;t wait to see you!&quot;
                </p>
                <p className="mt-4 text-sky-600 font-medium">— The Aloha Massage Spa Team</p>
              </div>

              <div
                className="mt-8 aspect-video rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800)',
                }}
              />
            </div>

            {/* Right Side - Form */}
            <div>
              <Card variant="elevated">
                <CardContent>
                  <form className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        placeholder="Your first name"
                        required
                      />
                      <Input
                        label="Last Name"
                        placeholder="Your last name"
                        required
                      />
                    </div>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                    <Input
                      label="Phone (Optional)"
                      type="tel"
                      placeholder="(808) 123-4567"
                    />
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        What can we help you with?
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-sky-500 bg-white">
                        <option value="">Select a topic</option>
                        <option value="booking">I&apos;d like to book an appointment</option>
                        <option value="services">Question about services</option>
                        <option value="gift">Gift cards inquiry</option>
                        <option value="feedback">Share feedback</option>
                        <option value="other">Something else</option>
                      </select>
                    </div>
                    <Textarea
                      label="Your Message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      required
                    />
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                    <p className="text-center text-sm text-slate-500">
                      We typically respond within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Quick Book CTA */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sky-700/90 to-sky-600/80" />
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Book Your &quot;Me Time&quot;?</h2>
            <p className="text-xl text-sky-100 mb-10">
              Skip the form and book your appointment directly. Your relaxation is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100 w-full sm:w-auto text-lg">
                  Book Online Now
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
