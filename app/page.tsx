import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import Promotions from "@/components/Promotions";
import Articles from "@/components/Articles";
import Videos from "@/components/Videos";
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
      <BeforeAfter />
      <Promotions />
      <Articles />
      <Videos />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
