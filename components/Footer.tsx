import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { Container } from './ui';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <span className="text-xl font-semibold text-white">Aloha</span>
                  <span className="text-xl text-teal-400 ml-1">Massage Spa</span>
                </div>
              </div>
              <p className="text-stone-400 mb-4">
                Experience the true spirit of Aloha with authentic Hawaiian healing and relaxation.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="hover:text-teal-400 transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/book" className="hover:text-teal-400 transition-colors">
                    Book Appointment
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-teal-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-teal-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services#massage" className="hover:text-teal-400 transition-colors">
                    Massage Therapy
                  </Link>
                </li>
                <li>
                  <Link href="/services#facial" className="hover:text-teal-400 transition-colors">
                    Facials
                  </Link>
                </li>
                <li>
                  <Link href="/services#body" className="hover:text-teal-400 transition-colors">
                    Body Treatments
                  </Link>
                </li>
                <li>
                  <Link href="/services#packages" className="hover:text-teal-400 transition-colors">
                    Packages
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>123 Kalakaua Ave<br />Honolulu, HI 96815</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <a href="tel:+18081234567" className="hover:text-teal-400 transition-colors">
                    (808) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <a href="mailto:aloha@massagespa.com" className="hover:text-teal-400 transition-colors">
                    aloha@massagespa.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Mon - Sat: 9am - 8pm<br />
                    Sun: 10am - 6pm
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p>&copy; {new Date().getFullYear()} Aloha Massage Spa. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-stone-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-stone-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
