import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Container, Card, CardContent, Input, Textarea, Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Aloha Massage Spa. Find our location, hours, and send us a message.',
};

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    details: ['123 Kalakaua Ave', 'Honolulu, HI 96815'],
    action: {
      label: 'Get Directions',
      href: 'https://maps.google.com',
    },
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['(808) 123-4567'],
    action: {
      label: 'Call Now',
      href: 'tel:+18081234567',
    },
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['aloha@massagespa.com'],
    action: {
      label: 'Send Email',
      href: 'mailto:aloha@massagespa.com',
    },
  },
  {
    icon: Clock,
    title: 'Hours',
    details: ['Mon - Sat: 9am - 8pm', 'Sunday: 10am - 6pm'],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-stone-50 to-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-stone-600">
              We&apos;d love to hear from you. Reach out with questions, feedback,
              or to book your next appointment.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Get in Touch</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((item) => (
                  <Card key={item.title} variant="outlined">
                    <CardContent>
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                      {item.details.map((detail, index) => (
                        <p key={index} className="text-stone-600">{detail}</p>
                      ))}
                      {item.action && (
                        <a
                          href={item.action.href}
                          className="inline-block mt-3 text-teal-600 font-medium hover:text-teal-700"
                        >
                          {item.action.label} →
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="aspect-video bg-stone-200 rounded-xl flex items-center justify-center">
                  <div className="text-center text-stone-500">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p>Map would be embedded here</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card variant="elevated">
                <CardContent>
                  <h2 className="text-2xl font-bold text-stone-900 mb-6">Send a Message</h2>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input
                        label="First Name"
                        placeholder="John"
                        required
                      />
                      <Input
                        label="Last Name"
                        placeholder="Doe"
                        required
                      />
                    </div>
                    <Input
                      label="Email"
                      type="email"
                      placeholder="john@example.com"
                      required
                    />
                    <Input
                      label="Phone"
                      type="tel"
                      placeholder="(808) 123-4567"
                    />
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">
                        Subject
                      </label>
                      <select className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-500">
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Inquiry</option>
                        <option value="services">Services Question</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <Textarea
                      label="Message"
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                    <Button type="submit" className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
