"use client";

import Image from "next/image";
import { C } from "@/lib/colors";
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
    <section id="domains" className="relative py-28 lg:py-36 bg-navy-900/40">
      <div className="absolute inset-0 opacity-[0.02]" aria-hidden="true">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="domain-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke={C.steel[400]} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#domain-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">Three Connected Domains</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl tracking-[-0.01em]">Enter the Strategic Layers</h2>
            <p className="mt-6 text-steel-400 text-base max-w-2xl leading-relaxed">
              Each platform maps one domain of critical infrastructure in depth.
              Together, they form the analytical foundation upon which Faultline
              reveals cross-domain dependencies and systemic risk.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-steel-500/10">
          {/* Orbital */}
          <ScrollReveal delay={0}>
            <a href="/platform/orbital" className="group relative bg-navy-950 flex flex-col h-full hover-lift">
              <div className="absolute top-0 left-0 right-0 h-px bg-steel-500/30 group-hover:bg-steel-400/50 transition-colors duration-500" />

              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <Image
                  src="/images/orbital-og.jpg"
                  alt="Orbital Risk Tracker platform"
                  width={640}
                  height={360}
                  className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              </div>

              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <p className="text-steel-300 text-xs font-medium tracking-[0.2em] uppercase mb-3">Orbital</p>
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug group-hover:text-steel-300 transition-colors duration-300">Orbital Risk Tracker</h3>
                <p className="text-sm text-steel-400 leading-[1.7] mb-8 flex-1">
                  Mapping satellite constellations, orbital debris fields, and the strategic vulnerabilities of space-based infrastructure.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-steel-300/70 group-hover:text-white transition-all duration-300 group-hover:gap-3">
                  Enter Platform <ArrowIcon />
                </span>
              </div>
            </a>
          </ScrollReveal>

          {/* Nuclear */}
          <ScrollReveal delay={120}>
            <a href="/platform/nuclear" className="group relative bg-navy-950 flex flex-col h-full hover-lift">
              <div className="absolute top-0 left-0 right-0 h-px bg-steel-400/30 group-hover:bg-steel-300/50 transition-colors duration-500" />

              <div className="relative overflow-hidden">
                <Image
                  src="/images/nuclear-og.png"
                  alt="Global Nuclear Infrastructure Atlas platform"
                  width={640}
                  height={360}
                  className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              </div>

              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <p className="text-steel-300 text-xs font-medium tracking-[0.2em] uppercase mb-3">Nuclear</p>
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug group-hover:text-steel-300 transition-colors duration-300">Global Nuclear Infrastructure Atlas</h3>
                <p className="text-sm text-steel-400 leading-[1.7] mb-8 flex-1">
                  A geospatial atlas of global nuclear facilities, enrichment sites, reactor networks, and strategic posture.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-steel-300/70 group-hover:text-white transition-all duration-300 group-hover:gap-3">
                  Enter Platform <ArrowIcon />
                </span>
              </div>
            </a>
          </ScrollReveal>

          {/* Cyber */}
          <ScrollReveal delay={240}>
            <a href="/platform/cyber" className="group relative bg-navy-950 flex flex-col h-full hover-lift">
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-400/25 group-hover:bg-gold-400/45 transition-colors duration-500" />

              <div className="relative overflow-hidden">
                <Image
                  src="/images/cyber-og.jpg"
                  alt="Cyber Escalation Atlas platform"
                  width={640}
                  height={360}
                  className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
              </div>

              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-3">Cyber</p>
                <h3 className="text-xl font-semibold text-white mb-4 leading-snug group-hover:text-gold-300 transition-colors duration-300">Cyber Escalation Atlas</h3>
                <p className="text-sm text-steel-400 leading-[1.7] mb-8 flex-1">
                  Charting cyber operations, escalation dynamics, and the pathways through which digital disruption cascades into strategic consequence.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-400/60 group-hover:text-white transition-all duration-300 group-hover:gap-3">
                  Enter Platform <ArrowIcon />
                </span>
              </div>
            </a>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
