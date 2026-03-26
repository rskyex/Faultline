import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DomainsSection from "@/components/DomainsSection";
import QuoteStrip from "@/components/QuoteStrip";
import ThesisSection from "@/components/ThesisSection";
import CenterpieceSection from "@/components/CenterpieceSection";
import RevealsSection from "@/components/RevealsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <DomainsSection />
        <SectionDivider variant="wide" />
        <QuoteStrip />
        <SectionDivider variant="accent" />
        <ThesisSection />
        <CenterpieceSection />
        <RevealsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
