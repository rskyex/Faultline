import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

const platforms = {
  orbital: {
    name: "Orbital Risk Tracker",
    slug: "orbital",
    url: "https://orbitalrisktracker.vercel.app/",
    ogImage: "/images/orbital-og.jpg",
    accent: "#4a6fa5",
    accentName: "steel-500",
    tagline: "Space Security Intelligence Platform",
    description:
      "Mapping real-world space security incidents across orbit, cyberspace, and the electromagnetic spectrum. The Orbital Risk Tracker provides a policy-grade interface for understanding the strategic vulnerabilities of space-based infrastructure.",
    capabilities: [
      "Satellite constellation risk mapping",
      "Orbital debris field tracking",
      "Space security incident database",
      "Electromagnetic spectrum analysis",
      "Governance gap identification",
    ],
    crossDomain:
      "Orbital systems underpin nuclear command-and-control, enable cyber operations through satellite communications, and create dependencies that cascade across all strategic domains when disrupted.",
  },
  nuclear: {
    name: "Global Nuclear Infrastructure Atlas",
    slug: "nuclear",
    url: "https://globalnuclearinfrastructureatlas.vercel.app/",
    ogImage: "/images/nuclear-og.png",
    accent: "#6b8fc0",
    accentName: "steel-400",
    tagline: "Global Nuclear Facility Mapping",
    description:
      "A geospatial atlas of global nuclear facilities, enrichment sites, reactor networks, and strategic posture. Visualizes the physical and political topology of nuclear infrastructure worldwide, from civilian reactors to dual-use enrichment facilities.",
    capabilities: [
      "Global reactor network visualization",
      "Enrichment facility mapping",
      "Strategic posture analysis",
      "Nuclear governance frameworks",
      "Dual-use infrastructure identification",
    ],
    crossDomain:
      "Nuclear command-and-control depends on orbital communication links and is increasingly vulnerable to cyber intrusion. Disruptions in either domain can alter nuclear posture calculations and escalation dynamics.",
  },
  cyber: {
    name: "Cyber Escalation Atlas",
    slug: "cyber",
    url: "https://cyber-escalation-atlas-5yp5.vercel.app/",
    ogImage: "/images/cyber-og.jpg",
    accent: "#d4a843",
    accentName: "gold-400",
    tagline: "Strategic Cyber Operations Mapping",
    description:
      "A policy-grade reference mapping how state-linked cyber operations unfold, escalate, and reshape international governance. Charts escalation dynamics, attack techniques, and the pathways through which digital disruption cascades into strategic consequence.",
    capabilities: [
      "State-linked cyber operation case studies",
      "Escalation lens analysis",
      "Attack technique cataloguing",
      "Cross-domain impact tracing",
      "Governance response mapping",
    ],
    crossDomain:
      "Cyber operations can target satellite ground stations, disrupt nuclear early-warning systems, and create misperception cascades that travel across orbital and nuclear domains. Digital disruption is rarely contained to cyberspace alone.",
  },
} as const;

type PlatformKey = keyof typeof platforms;

export function generateStaticParams() {
  return Object.keys(platforms).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const platform = platforms[slug as PlatformKey];
  if (!platform) return {};
  return {
    title: `${platform.name} — Faultline`,
    description: platform.description,
  };
}

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const platform = platforms[slug as PlatformKey];
  if (!platform) notFound();

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-navy-950" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            aria-hidden="true"
            style={{
              backgroundImage: "url(/images/topo-dark.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Text */}
              <div className="lg:col-span-7 space-y-6">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-steel-400/60 text-xs tracking-[0.05em] hover:text-steel-300 transition-colors mb-4"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back to Faultline
                </a>

                <p
                  className="text-xs font-medium tracking-[0.2em] uppercase"
                  style={{ color: platform.accent }}
                >
                  {platform.tagline}
                </p>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.02em] leading-tight">
                  {platform.name}
                </h1>

                <div className="w-16 h-px" style={{ backgroundColor: platform.accent, opacity: 0.4 }} />

                <p className="text-lg leading-[1.7] text-slate-200/90 font-serif-accent max-w-2xl">
                  {platform.description}
                </p>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-3.5 border text-white text-sm font-medium tracking-[0.05em] transition-all duration-300 mt-4"
                  style={{
                    borderColor: `${platform.accent}50`,
                    backgroundColor: `${platform.accent}15`,
                  }}
                >
                  Enter Platform
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* OG Image */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden border border-steel-500/15">
                  <Image
                    src={platform.ogImage}
                    alt={`${platform.name} platform screenshot`}
                    width={640}
                    height={360}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="absolute inset-0 border border-steel-500/10 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="relative py-20 lg:py-28 border-t border-steel-500/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <p
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                  style={{ color: platform.accent }}
                >
                  Capabilities
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em]">
                  What This Platform Maps
                </h2>
              </div>

              <div className="lg:col-span-7">
                <ul className="space-y-4">
                  {platform.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-4 text-steel-400 text-sm leading-relaxed">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: platform.accent, opacity: 0.6 }}
                      />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cross-domain connection */}
        <section className="relative py-20 lg:py-28 bg-navy-900/40 border-t border-steel-500/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Cross-Domain Significance
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-[-0.01em] mb-6">
                Why This Domain Cannot Be Analyzed in Isolation
              </h2>
              <p className="text-base leading-[1.7] text-steel-400">
                {platform.crossDomain}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 lg:py-28 border-t border-steel-500/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <Image src="/images/logo-black.png" alt="Faultline" width={40} height={40} className="mx-auto mb-8 w-10 h-10" />
            <p className="text-steel-400 text-sm mb-6">
              Explore the other strategic layers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.values(platforms)
                .filter((p) => p.slug !== platform.slug)
                .map((p) => (
                  <a
                    key={p.slug}
                    href={`/platform/${p.slug}`}
                    className="px-6 py-3 border border-steel-500/20 text-white text-sm font-medium hover:border-steel-400/40 transition-all duration-300"
                  >
                    {p.name}
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
