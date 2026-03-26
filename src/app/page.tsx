import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DomainsSection from "@/components/DomainsSection";
import ThesisSection from "@/components/ThesisSection";
import CenterpieceSection from "@/components/CenterpieceSection";
import RevealsSection from "@/components/RevealsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DomainsSection />
        <ThesisSection />
        <CenterpieceSection />
        <RevealsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
