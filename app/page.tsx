import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import MassageRecommender from "@/components/MassageRecommender";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <MassageRecommender />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
