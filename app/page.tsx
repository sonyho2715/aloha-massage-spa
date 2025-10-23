import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import TherapistProfiles from "@/components/TherapistProfiles";
import LuxurySection from "@/components/LuxurySection";
import MassageRecommender from "@/components/MassageRecommender";
import Testimonials from "@/components/Testimonials";
import LotteryPromo from "@/components/LotteryPromo";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FloatingBookButton from "@/components/FloatingBookButton";
import FreeGiftModal from "@/components/FreeGiftModal";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <TherapistProfiles />
      <LuxurySection />
      <MassageRecommender />
      <Testimonials />
      <LotteryPromo />
      <Newsletter />
      <Footer />
      <FloatingBookButton />
      <FreeGiftModal />
    </main>
  );
}
