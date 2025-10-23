import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Playfair_Display, Lora } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aloha Massage Spa - Authentic Hawaiian Healing in Honolulu | Licensed Therapists",
  description: "Feel the true spirit of aloha. Licensed therapists Angela, Tony & Andy provide authentic Hawaiian massage therapy with organic oils. McCully Shopping Center, Honolulu. Open daily 10 AM-11 PM. Walk-ins welcome. 4.7★ from 750+ reviews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className={lora.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
