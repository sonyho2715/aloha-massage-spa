import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Heart, ArrowRight, Car } from 'lucide-react';
import { Container, Card, CardContent, Input, Textarea, Button, Badge } from '@/components/ui';

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
    description: 'Late appointments available upon request',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="info" className="mb-4">
              <Heart className="w-3 h-3 mr-1" />
              We're Here for You
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 mb-4">
              Have a question? Want to book an appointment? Or just want to say aloha?
              We'd love to hear from you.
            </p>
            <p className="text-lg text-slate-500">
              Our friendly team is here to help you find the relaxation you deserve.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <Card key={item.title} variant="elevated" className="text-center">
                <CardContent>
                  <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-sky-600" />
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

      {/* Map & Form Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Location Details */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Visit Our Spa</h2>

              {/* Map Placeholder */}
              <div className="aspect-video bg-slate-200 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                <div className="text-center text-slate-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">123 Kalakaua Ave, Honolulu</p>
                  <a
                    href="https://maps.google.com/?q=123+Kalakaua+Ave+Honolulu+HI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 hover:underline text-sm"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Parking & Directions */}
              <Card variant="outlined">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Car className="w-5 h-5 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Parking & Access</h3>
                      <p className="text-slate-600 text-sm">
                        Free parking is available in our lot. We're located in a safe,
                        convenient area with easy access from major roads. Look for our
                        welcoming lobby as soon as you enter the building.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Personal Note */}
              <div className="mt-6 bg-white rounded-xl p-6 border border-slate-200">
                <p className="text-slate-600 italic">
                  "When you arrive, you'll instantly feel the comfort of Aloha. Our welcoming
                  lobby sets the tone for your relaxing experience. We can't wait to see you!"
                </p>
                <p className="mt-3 text-sky-600 font-medium">— The Aloha Massage Spa Team</p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card variant="elevated">
                <CardContent>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
                  <p className="text-slate-600 mb-6">
                    Have a question or special request? We'd love to hear from you.
                  </p>
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
                        <option value="booking">I'd like to book an appointment</option>
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
      <section className="py-16 bg-gradient-to-br from-sky-600 to-sky-700">
        <Container>
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Book Your "Me Time"?</h2>
            <p className="text-xl text-sky-100 mb-8">
              Skip the form and book your appointment directly. Your relaxation is just a click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg" className="bg-white text-sky-700 hover:bg-slate-100 w-full sm:w-auto">
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
