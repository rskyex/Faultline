import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DomainsSection from "@/components/DomainsSection";
import AboutSection from "@/components/AboutSection";
import QuoteStrip from "@/components/QuoteStrip";
import ThesisSection from "@/components/ThesisSection";
import CenterpieceSection from "@/components/CenterpieceSection";
import RevealsSection from "@/components/RevealsSection";
import CreatorSection from "@/components/CreatorSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Faultline",
  description:
    "Cross-domain strategic infrastructure mapping platform. Maps dependencies, escalation pathways, and governance fractures across orbital, nuclear, space governance, and cyber systems.",
  applicationCategory: "Research Platform",
  url: "https://faultline-nqmm.vercel.app",
  creator: {
    "@type": "Person",
    name: "Risa Koyanagi",
    url: "https://risakoyanagi.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <SectionDivider />
        <DomainsSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ThesisSection />
        <SectionDivider />
        <QuoteStrip />
        <SectionDivider />
        <CenterpieceSection />
        <SectionDivider />
        <RevealsSection />
        <SectionDivider />
        <CreatorSection />
      </main>
      <Footer />
    </>
  );
}
