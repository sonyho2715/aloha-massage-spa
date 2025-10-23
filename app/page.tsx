import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import PricingComparison from "@/components/PricingComparison";
import TherapistProfiles from "@/components/TherapistProfiles";
import LuxurySection from "@/components/LuxurySection";
import CustomerReviews from "@/components/CustomerReviews";
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
      <TrustBadges />
      <Benefits />
      <Services />
      <PricingComparison />
      <TherapistProfiles />
      <LuxurySection />
      <CustomerReviews />
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
