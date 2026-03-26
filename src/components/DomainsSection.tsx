"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DomainsSection() {
  return (
    <section id="domains" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/govern-og.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4 text-navy-600">Three Connected Domains</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight max-w-xl tracking-[-0.01em]">Enter the Strategic Layers</h2>
            <p className="mt-6 text-navy-700 text-lg max-w-2xl leading-relaxed">
              Each platform maps one domain of critical infrastructure in depth.
              Together, they form the analytical foundation upon which Faultline
              reveals cross-domain dependencies and systemic risk.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Orbital */}
          <ScrollReveal delay={0}>
            <a href="/platform/orbital" className="group relative bg-white rounded-sm shadow-sm border border-navy-800/8 flex flex-col h-full hover-lift overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/orbital-og.jpg"
                  alt="Orbital Risk Tracker platform"
                  width={640}
                  height={360}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <p className="text-navy-600 text-xs font-medium tracking-[0.2em] uppercase mb-2">Orbital</p>
                <h3 className="text-lg font-semibold text-navy-950 mb-3 leading-snug group-hover:text-steel-500 transition-colors duration-300">Orbital Risk Tracker</h3>
                <p className="text-sm text-navy-600 leading-[1.7] mb-6 flex-1">
                  Mapping satellite constellations, orbital debris fields, and the strategic vulnerabilities of space-based infrastructure.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 group-hover:text-steel-500 transition-all duration-300 group-hover:gap-3">
                  Enter Platform <ArrowIcon />
                </span>
              </div>
            </a>
          </ScrollReveal>

          {/* Nuclear */}
          <ScrollReveal delay={120}>
            <a href="/platform/nuclear" className="group relative bg-white rounded-sm shadow-sm border border-navy-800/8 flex flex-col h-full hover-lift overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/nuclear-og.png"
                  alt="Global Nuclear Infrastructure Atlas platform"
                  width={640}
                  height={360}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <p className="text-navy-600 text-xs font-medium tracking-[0.2em] uppercase mb-2">Nuclear</p>
                <h3 className="text-lg font-semibold text-navy-950 mb-3 leading-snug group-hover:text-steel-500 transition-colors duration-300">Global Nuclear Infrastructure Atlas</h3>
                <p className="text-sm text-navy-600 leading-[1.7] mb-6 flex-1">
                  A geospatial atlas of global nuclear facilities, enrichment sites, reactor networks, and strategic posture.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 group-hover:text-steel-500 transition-all duration-300 group-hover:gap-3">
                  Enter Platform <ArrowIcon />
                </span>
              </div>
            </a>
          </ScrollReveal>

          {/* Cyber */}
          <ScrollReveal delay={240}>
            <a href="/platform/cyber" className="group relative bg-white rounded-sm shadow-sm border border-navy-800/8 flex flex-col h-full hover-lift overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src="/images/cyber-og.jpg"
                  alt="Cyber Escalation Atlas platform"
                  width={640}
                  height={360}
                  className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-7 lg:p-8 flex flex-col flex-1">
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-2" style={{ color: "#8a6d20" }}>Cyber</p>
                <h3 className="text-lg font-semibold text-navy-950 mb-3 leading-snug group-hover:text-steel-500 transition-colors duration-300">Cyber Escalation Atlas</h3>
                <p className="text-sm text-navy-600 leading-[1.7] mb-6 flex-1">
                  Charting cyber operations, escalation dynamics, and the pathways through which digital disruption cascades into strategic consequence.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-navy-700 group-hover:text-steel-500 transition-all duration-300 group-hover:gap-3">
                  Enter Platform <ArrowIcon />
                </span>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
