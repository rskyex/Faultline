"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M1 6h10M7 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
      <path d="M4 1h6v6M10 1L4.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const domains = [
  {
    slug: "orbital",
    label: "Orbital",
    title: "Orbital Risk Tracker",
    description: "Mapping satellite constellations, orbital debris fields, and the strategic vulnerabilities of space-based infrastructure. Policy-grade interface for space security intelligence.",
    image: "/images/orbital-og.jpg",
    externalUrl: "https://orbitalrisktracker.vercel.app/",
    detailUrl: "/platform/orbital",
    dotClass: "bg-orbital-500",
    labelClass: "text-orbital-400",
    glowClass: "card-glow",
    btnBg: "bg-orbital-500/10 border-orbital-500/25 text-orbital-400 hover:bg-orbital-500/20",
    btnOutline: "border-orbital-500/15 text-orbital-400/70 hover:border-orbital-500/30 hover:text-orbital-400",
  },
  {
    slug: "nuclear",
    label: "Nuclear",
    title: "Global Nuclear Infrastructure Atlas",
    description: "A geospatial atlas of global nuclear facilities, enrichment sites, reactor networks, and strategic posture across civilian and dual-use infrastructure.",
    image: "/images/nuclear-og.png",
    externalUrl: "https://globalnuclearinfrastructureatlas.vercel.app/",
    detailUrl: "/platform/nuclear",
    dotClass: "bg-nuclear-500",
    labelClass: "text-nuclear-400",
    glowClass: "card-glow-nuclear",
    btnBg: "bg-nuclear-500/10 border-nuclear-500/25 text-nuclear-400 hover:bg-nuclear-500/20",
    btnOutline: "border-nuclear-500/15 text-nuclear-400/70 hover:border-nuclear-500/30 hover:text-nuclear-400",
  },
  {
    slug: "space",
    label: "Space Governance",
    title: "Space Mandate Atlas",
    description: "Mapping authority structures in contested lunar governance. Framework analysis across all spacefaring states\u2014who writes the rules, who interprets them, and who decides who participates.",
    image: "/images/govern-og.png",
    externalUrl: "https://space-mandate-atlas.vercel.app/",
    detailUrl: "/platform/space",
    dotClass: "bg-space-500",
    labelClass: "text-space-400",
    glowClass: "card-glow-space",
    btnBg: "bg-space-500/10 border-space-500/25 text-space-400 hover:bg-space-500/20",
    btnOutline: "border-space-500/15 text-space-400/70 hover:border-space-500/30 hover:text-space-400",
  },
  {
    slug: "cyber",
    label: "Cyber",
    title: "Cyber Escalation Atlas",
    description: "Charting cyber operations, escalation dynamics, and the pathways through which digital disruption cascades into strategic consequence.",
    image: "/images/cyber-og.jpg",
    externalUrl: "https://cyber-escalation-atlas.vercel.app/",
    detailUrl: "/platform/cyber",
    dotClass: "bg-cyber-500",
    labelClass: "text-cyber-400",
    glowClass: "card-glow-cyber",
    btnBg: "bg-cyber-500/10 border-cyber-500/25 text-cyber-400 hover:bg-cyber-500/20",
    btnOutline: "border-cyber-500/15 text-cyber-400/70 hover:border-cyber-500/30 hover:text-cyber-400",
  },
];

export default function DomainsSection() {
  return (
    <section id="domains" className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-deep" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(56,189,248,0.02) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="mb-12">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3 text-orbital-500">
              Four Connected Domains
            </p>
            <h2 className="wordmark text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight max-w-xl">
              Enter the Strategic Layers
            </h2>
            <p className="mt-5 text-text-secondary text-sm max-w-2xl leading-relaxed">
              Each platform maps one domain of critical infrastructure in depth.
              Together, they form the analytical foundation upon which Faultline
              reveals cross-domain dependencies and systemic risk.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {domains.map((d, i) => (
            <ScrollReveal key={d.slug} delay={i * 80}>
              <div
                className={`group relative flex flex-col h-full bg-elevated border border-white/6 hover:border-white/12 overflow-hidden ${d.glowClass}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={d.image}
                    alt={`${d.title} platform`}
                    width={640}
                    height={360}
                    className="w-full h-auto opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-elevated via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${d.dotClass} opacity-70`} />
                    <p className={`text-[10px] font-medium tracking-[0.2em] uppercase ${d.labelClass}`}>
                      {d.label}
                    </p>
                  </div>
                  <h3 className="text-base font-semibold text-text-primary mb-2 leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-[13px] text-text-secondary leading-[1.7] mb-5 flex-1">
                    {d.description}
                  </p>

                  {/* Dual buttons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={d.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 border text-[11px] font-medium tracking-[0.06em] uppercase transition-all duration-300 ${d.btnBg}`}
                    >
                      Enter Platform <ExternalIcon />
                    </a>
                    <a
                      href={d.detailUrl}
                      className={`inline-flex items-center gap-2 px-4 py-2 border text-[11px] font-medium tracking-[0.06em] uppercase transition-all duration-300 ${d.btnOutline}`}
                    >
                      Details <ArrowIcon />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
