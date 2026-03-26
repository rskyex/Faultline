"use client";

import ScrollReveal from "./ScrollReveal";

export default function DomainsSection() {
  return (
    <section id="domains" className="relative py-28 lg:py-36 bg-navy-900/40">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="domain-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6b8fc0" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#domain-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-20">
            <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Three Connected Domains
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl tracking-[-0.01em]">
              Enter the Strategic Layers
            </h2>
            <p className="mt-6 text-steel-400 text-base max-w-2xl leading-relaxed">
              Each platform maps one domain of critical infrastructure in depth.
              Together, they form the analytical foundation upon which Faultline
              reveals cross-domain dependencies and systemic risk.
            </p>
          </div>
        </ScrollReveal>

        {/* Domain panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-steel-500/10">
          {/* Orbital */}
          <ScrollReveal delay={0}>
            <a
              href="https://orbitalrisktracker.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-navy-950 p-8 lg:p-10 flex flex-col h-full hover-lift"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-steel-500/30 group-hover:bg-steel-400/50 transition-colors duration-500" />

              <div className="mb-8">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <ellipse cx="28" cy="28" rx="24" ry="9" stroke="#4a6fa5" strokeWidth="0.8" transform="rotate(-25 28 28)" />
                  <ellipse cx="28" cy="28" rx="22" ry="8" stroke="#6b8fc0" strokeWidth="0.4" transform="rotate(30 28 28)" />
                  <ellipse cx="28" cy="28" rx="18" ry="7" stroke="#4a6fa5" strokeWidth="0.3" transform="rotate(-50 28 28)" opacity="0.5" />
                  <circle cx="28" cy="28" r="3.5" fill="#8eb0d8" opacity="0.8" />
                  <circle cx="28" cy="28" r="6" stroke="#4a6fa5" strokeWidth="0.4" strokeDasharray="2 3" opacity="0.4" />
                  <circle cx="48" cy="22" r="1.5" fill="#4a6fa5" opacity="0.6" />
                  <circle cx="12" cy="20" r="1" fill="#8eb0d8" opacity="0.4" />
                </svg>
              </div>

              <p className="text-steel-300 text-xs font-medium tracking-[0.2em] uppercase mb-3">
                Orbital
              </p>
              <h3 className="text-xl font-semibold text-white mb-4 leading-snug group-hover:text-steel-300 transition-colors duration-300">
                Orbital Risk Tracker
              </h3>
              <p className="text-sm text-steel-400 leading-[1.7] mb-8 flex-1">
                Mapping satellite constellations, orbital debris fields, and the
                strategic vulnerabilities of space-based infrastructure. Tracks
                risks from congestion, weaponization, and governance gaps in the
                orbital commons.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-steel-300/70 group-hover:text-white transition-all duration-300 group-hover:gap-3">
                Enter Platform
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </ScrollReveal>

          {/* Nuclear */}
          <ScrollReveal delay={120}>
            <a
              href="https://globalnuclearinfrastructureatlas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-navy-950 p-8 lg:p-10 flex flex-col h-full hover-lift"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-steel-400/30 group-hover:bg-steel-300/50 transition-colors duration-500" />

              <div className="mb-8">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="28" r="22" stroke="#6b8fc0" strokeWidth="0.4" opacity="0.4" />
                  <circle cx="28" cy="28" r="16" stroke="#6b8fc0" strokeWidth="0.6" opacity="0.5" />
                  <circle cx="28" cy="28" r="10" stroke="#8eb0d8" strokeWidth="0.8" opacity="0.6" />
                  <circle cx="28" cy="28" r="4" stroke="#c8d6e5" strokeWidth="1" opacity="0.7" />
                  <circle cx="28" cy="28" r="1.5" fill="#c8d6e5" opacity="0.8" />
                  <line x1="28" y1="6" x2="28" y2="16" stroke="#6b8fc0" strokeWidth="0.5" opacity="0.4" />
                  <line x1="28" y1="40" x2="28" y2="50" stroke="#6b8fc0" strokeWidth="0.5" opacity="0.4" />
                  <line x1="8" y1="18" x2="17" y2="23" stroke="#6b8fc0" strokeWidth="0.5" opacity="0.3" />
                  <line x1="39" y1="33" x2="48" y2="38" stroke="#6b8fc0" strokeWidth="0.5" opacity="0.3" />
                </svg>
              </div>

              <p className="text-steel-300 text-xs font-medium tracking-[0.2em] uppercase mb-3">
                Nuclear
              </p>
              <h3 className="text-xl font-semibold text-white mb-4 leading-snug group-hover:text-steel-300 transition-colors duration-300">
                Global Nuclear Infrastructure Atlas
              </h3>
              <p className="text-sm text-steel-400 leading-[1.7] mb-8 flex-1">
                A geospatial atlas of global nuclear facilities, enrichment sites,
                reactor networks, and strategic posture. Visualizes the physical
                and political topology of nuclear infrastructure worldwide.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-steel-300/70 group-hover:text-white transition-all duration-300 group-hover:gap-3">
                Enter Platform
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </ScrollReveal>

          {/* Cyber */}
          <ScrollReveal delay={240}>
            <a
              href="https://cyber-escalation-atlas-5yp5.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-navy-950 p-8 lg:p-10 flex flex-col h-full hover-lift"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gold-400/25 group-hover:bg-gold-400/45 transition-colors duration-500" />

              <div className="mb-8">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="10" r="3" fill="#d4a843" opacity="0.7" />
                  <circle cx="12" cy="36" r="3" fill="#d4a843" opacity="0.5" />
                  <circle cx="44" cy="36" r="3" fill="#d4a843" opacity="0.5" />
                  <circle cx="28" cy="46" r="2" fill="#e0be6a" opacity="0.35" />
                  <circle cx="16" cy="20" r="1.5" fill="#e0be6a" opacity="0.3" />
                  <circle cx="40" cy="20" r="1.5" fill="#e0be6a" opacity="0.3" />
                  <circle cx="28" cy="28" r="2" fill="#d4a843" opacity="0.4" />
                  <line x1="28" y1="13" x2="12" y2="33" stroke="#d4a843" strokeWidth="0.5" opacity="0.4" />
                  <line x1="28" y1="13" x2="44" y2="33" stroke="#d4a843" strokeWidth="0.5" opacity="0.4" />
                  <line x1="12" y1="36" x2="44" y2="36" stroke="#d4a843" strokeWidth="0.5" opacity="0.35" />
                  <line x1="28" y1="10" x2="28" y2="28" stroke="#e0be6a" strokeWidth="0.3" opacity="0.25" strokeDasharray="2 2" />
                  <line x1="28" y1="28" x2="12" y2="36" stroke="#e0be6a" strokeWidth="0.3" opacity="0.25" strokeDasharray="2 2" />
                  <line x1="28" y1="28" x2="44" y2="36" stroke="#e0be6a" strokeWidth="0.3" opacity="0.25" strokeDasharray="2 2" />
                </svg>
              </div>

              <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-3">
                Cyber
              </p>
              <h3 className="text-xl font-semibold text-white mb-4 leading-snug group-hover:text-gold-300 transition-colors duration-300">
                Cyber Escalation Atlas
              </h3>
              <p className="text-sm text-steel-400 leading-[1.7] mb-8 flex-1">
                Charting cyber operations, escalation dynamics, and the evolving
                attack surfaces of critical infrastructure. Maps the pathways
                through which digital disruption cascades into strategic
                consequence.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-400/60 group-hover:text-white transition-all duration-300 group-hover:gap-3">
                Enter Platform
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </ScrollReveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
