"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Aloha Massage Spa</h3>
            <p className="text-white/80 mb-4">
              {t.footerAbout}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span>f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span>Y</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                <span>in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  {t.about}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  {t.services}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/80 hover:text-white transition-colors">
                  {t.gallery}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  {t.contact}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-white/80 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.footerServices}</h3>
            <ul className="space-y-2 text-white/80">
              <li>{t.acneTreatment}</li>
              <li>{t.malasmaTreatment}</li>
              <li>{t.hairRemoval}</li>
              <li>{t.skinRejuvenation}</li>
              <li>{t.fatReduction}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t.contactInfo}</h3>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{t.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>{t.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>✉</span>
                <span>{t.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>{t.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2025 Aloha Massage Spa. {t.allRightsReserved}.</p>
        </div>
      </div>
    </footer>
  );
}
