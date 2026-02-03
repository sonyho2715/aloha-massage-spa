'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Container, Button } from './ui';

interface NavProps {
  user?: {
    name: string;
    role: string;
  } | null;
}

export function Navigation({ user }: NavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100">
      <Container>
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-semibold text-stone-900">Aloha</span>
              <span className="text-xl text-teal-600 ml-1">Massage Spa</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-600 hover:text-teal-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+18081234567"
              className="flex items-center gap-2 text-stone-600 hover:text-teal-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(808) 123-4567</span>
            </a>
            {user ? (
              <div className="flex items-center gap-3">
                <Link href={user.role === 'ADMIN' ? '/admin' : '/dashboard'}>
                  <Button variant="ghost" size="sm">
                    {user.role === 'ADMIN' ? 'Admin' : 'My Account'}
                  </Button>
                </Link>
              </div>
            ) : (
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
            <Link href="/book">
              <Button>Book Now</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-stone-600 hover:text-stone-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-stone-600 hover:bg-stone-50 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="my-2 border-stone-100" />
              <a
                href="tel:+18081234567"
                className="px-4 py-3 text-stone-600 hover:bg-stone-50 rounded-lg font-medium flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                (808) 123-4567
              </a>
              {user ? (
                <Link
                  href={user.role === 'ADMIN' ? '/admin' : '/dashboard'}
                  className="px-4 py-3 text-stone-600 hover:bg-stone-50 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {user.role === 'ADMIN' ? 'Admin Dashboard' : 'My Account'}
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="px-4 py-3 text-stone-600 hover:bg-stone-50 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
              <div className="px-4 pt-2">
                <Link href="/book" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full">Book Now</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
