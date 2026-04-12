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
    accent: "#38bdf8",
    accentDim: "rgba(56,189,248,0.15)",
    accentBorder: "rgba(56,189,248,0.25)",
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
      "Orbital systems underpin nuclear command-and-control, enable cyber operations through satellite communications, shape the infrastructure upon which lunar governance depends, and create dependencies that cascade across all strategic domains when disrupted.",
  },
  nuclear: {
    name: "Global Nuclear Infrastructure Atlas",
    slug: "nuclear",
    url: "https://globalnuclearinfrastructureatlas.vercel.app/",
    ogImage: "/images/nuclear-og.png",
    accent: "#2dd4bf",
    accentDim: "rgba(45,212,191,0.15)",
    accentBorder: "rgba(45,212,191,0.25)",
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
      "Nuclear command-and-control depends on orbital communication links and is increasingly vulnerable to cyber intrusion. Contested space governance frameworks shape nuclear posture calculations. Disruptions in any domain can alter escalation dynamics.",
  },
  space: {
    name: "Space Mandate Atlas",
    slug: "space",
    url: "https://space-mandate-atlas.vercel.app/",
    ogImage: "/images/govern-og.png",
    accent: "#a78bfa",
    accentDim: "rgba(167,139,250,0.15)",
    accentBorder: "rgba(167,139,250,0.25)",
    tagline: "Lunar Governance Authority Tracker",
    description:
      "Mapping authority structures in contested lunar governance. Framework analysis across all spacefaring states\u2014who writes the rules, who interprets them, and who decides who participates. Tracking 42 governance documents across 30+ nations.",
    capabilities: [
      "Governance document authority mapping",
      "Discretion point registry and analysis",
      "Artemis Accords vs ILRS coalition comparison",
      "Non-aligned state positioning tracking",
      "Cross-framework mandate analysis",
    ],
    crossDomain:
      "Space governance frameworks shape the institutional architecture within which orbital, nuclear, and cyber systems operate. Concentrated interpretive authority in governance documents creates structural vulnerabilities that cascade across all strategic domains.",
  },
  cyber: {
    name: "Cyber Escalation Atlas",
    slug: "cyber",
    url: "https://cyber-escalation-atlas.vercel.app/",
    ogImage: "/images/cyber-og.jpg",
    accent: "#f59e0b",
    accentDim: "rgba(245,158,11,0.15)",
    accentBorder: "rgba(245,158,11,0.25)",
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
      "Cyber operations can target satellite ground stations, disrupt nuclear early-warning systems, undermine space governance communications, and create misperception cascades that travel across orbital, nuclear, and governance domains. Digital disruption is rarely contained to cyberspace alone.",
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
    title: `${platform.name} \u2014 Faultline`,
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
      <main id="main-content" className="pt-14">
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-void" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 60% 50% at 30% 50%, ${platform.accentDim.replace('0.15', '0.04')} 0%, transparent 70%)`,
            }}
          />

          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Text */}
              <div className="lg:col-span-7 space-y-5">
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-text-muted text-[11px] tracking-[0.08em] hover:text-text-secondary transition-colors mb-3"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M8 2L3 6l5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Back to Faultline
                </a>

                <p
                  className="text-[11px] font-medium tracking-[0.25em] uppercase"
                  style={{ color: platform.accent }}
                >
                  {platform.tagline}
                </p>

                <h1 className="wordmark text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
                  {platform.name}
                </h1>

                <div className="w-12 h-px" style={{ backgroundColor: platform.accent, opacity: 0.3 }} />

                <p className="text-sm md:text-base leading-[1.75] text-text-secondary max-w-2xl">
                  {platform.description}
                </p>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-2.5 border text-text-primary text-[12px] font-medium tracking-[0.08em] uppercase transition-all duration-300 mt-2 hover:bg-white/5"
                  style={{
                    borderColor: platform.accentBorder,
                    backgroundColor: platform.accentDim.replace('0.15', '0.05'),
                  }}
                >
                  Enter Platform
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* OG Image */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden border border-white/8">
                  <Image
                    src={platform.ogImage}
                    alt={`${platform.name} platform screenshot`}
                    width={640}
                    height={360}
                    className="w-full h-auto opacity-85"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="relative py-16 lg:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="absolute inset-0 bg-deep" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <p
                  className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3"
                  style={{ color: platform.accent }}
                >
                  Capabilities
                </p>
                <h2 className="wordmark text-2xl md:text-3xl text-text-primary">
                  What This Platform Maps
                </h2>
              </div>

              <div className="lg:col-span-8">
                <ul className="space-y-3">
                  {platform.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-secondary text-[13px] leading-relaxed">
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full shrink-0"
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

        {/* Cross-domain */}
        <section className="relative py-16 lg:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="absolute inset-0 bg-surface" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-3xl">
              <p className="text-orbital-500 text-[11px] font-medium tracking-[0.25em] uppercase mb-3">
                Cross-Domain Significance
              </p>
              <h2 className="wordmark text-2xl md:text-3xl text-text-primary mb-5">
                Why This Domain Cannot Be Analyzed in Isolation
              </h2>
              <p className="text-sm leading-[1.75] text-text-secondary">
                {platform.crossDomain}
              </p>
            </div>
          </div>
        </section>

        {/* CTA — other platforms */}
        <section className="relative py-16 lg:py-24" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="absolute inset-0 bg-deep" />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
            <Image src="/images/logo.png" alt="Faultline" width={32} height={32} className="mx-auto mb-6 w-8 h-8 opacity-50" />
            <p className="text-text-muted text-[12px] mb-5 tracking-[0.08em]">
              Explore the other strategic layers
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.values(platforms)
                .filter((p) => p.slug !== platform.slug)
                .map((p) => (
                  <a
                    key={p.slug}
                    href={`/platform/${p.slug}`}
                    className="px-5 py-2.5 border border-white/8 text-text-secondary text-[12px] font-medium tracking-[0.05em] hover:border-white/15 hover:text-text-primary transition-all duration-300"
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
