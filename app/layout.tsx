import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Aloha Massage Spa | Hawaiian Healing & Relaxation',
    template: '%s | Aloha Massage Spa',
  },
  description: 'Experience authentic Hawaiian healing and relaxation at Aloha Massage Spa. Professional massage therapy, facials, and body treatments in Honolulu.',
  keywords: ['massage', 'spa', 'hawaii', 'honolulu', 'relaxation', 'wellness', 'lomi lomi', 'facial'],
  authors: [{ name: 'Aloha Massage Spa' }],
  openGraph: {
    title: 'Aloha Massage Spa | Hawaiian Healing & Relaxation',
    description: 'Experience authentic Hawaiian healing and relaxation at Aloha Massage Spa.',
    url: 'https://aloha-massage-spa.vercel.app',
    siteName: 'Aloha Massage Spa',
    locale: 'en_US',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Navigation user={user} />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
