"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function ThesisSection() {
  return (
    <section id="thesis" className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Diagram */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal delay={200}>
              <div className="relative lg:sticky lg:top-24">
                <svg
                  viewBox="0 0 420 600"
                  fill="none"
                  className="w-full"
                  role="img"
                  aria-label="Layered diagram showing escalation and spillover pathways between four infrastructure layers"
                >
                  {/* Orbital layer */}
                  <rect x="30" y="30" width="360" height="100" fill={C.orbital[500]} fillOpacity="0.04" stroke={C.orbital[500]} strokeWidth="1" rx="2" />
                  <text x="46" y="52" fill={C.orbital[500]} fontSize="10" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.2em" opacity="0.8">ORBITAL INFRASTRUCTURE</text>
                  <circle cx="120" cy="90" r="5" fill={C.orbital[500]} opacity="0.5" />
                  <circle cx="210" cy="85" r="4" fill={C.orbital[500]} opacity="0.4" />
                  <circle cx="300" cy="92" r="3.5" fill={C.orbital[500]} opacity="0.35" />
                  <line x1="125" y1="90" x2="206" y2="85" stroke={C.orbital[500]} strokeWidth="0.8" opacity="0.2" />
                  <line x1="214" y1="85" x2="296" y2="92" stroke={C.orbital[500]} strokeWidth="0.8" opacity="0.2" />

                  {/* Nuclear layer */}
                  <rect x="30" y="170" width="360" height="100" fill={C.nuclear[500]} fillOpacity="0.04" stroke={C.nuclear[500]} strokeWidth="1" rx="2" />
                  <text x="46" y="192" fill={C.nuclear[500]} fontSize="10" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.2em" opacity="0.8">NUCLEAR INFRASTRUCTURE</text>
                  <circle cx="140" cy="230" r="5" fill={C.nuclear[500]} opacity="0.5" />
                  <circle cx="250" cy="225" r="4.5" fill={C.nuclear[500]} opacity="0.4" />
                  <circle cx="320" cy="235" r="3.5" fill={C.nuclear[500]} opacity="0.35" />

                  {/* Lunar Governance layer */}
                  <rect x="30" y="310" width="360" height="100" fill={C.space[500]} fillOpacity="0.04" stroke={C.space[500]} strokeWidth="1" rx="2" />
                  <text x="46" y="332" fill={C.space[500]} fontSize="10" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.2em" opacity="0.8">LUNAR GOVERNANCE</text>
                  <circle cx="160" cy="370" r="5" fill={C.space[500]} opacity="0.45" />
                  <circle cx="260" cy="365" r="4" fill={C.space[500]} opacity="0.35" />

                  {/* Cyber layer */}
                  <rect x="30" y="450" width="360" height="100" fill={C.cyber[500]} fillOpacity="0.04" stroke={C.cyber[500]} strokeWidth="1" rx="2" />
                  <text x="46" y="472" fill={C.cyber[500]} fontSize="10" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.2em" opacity="0.8">CYBER OPERATIONS</text>
                  <circle cx="170" cy="510" r="5" fill={C.cyber[500]} opacity="0.45" />
                  <circle cx="280" cy="505" r="4" fill={C.cyber[500]} opacity="0.35" />

                  {/* Cross-domain escalation paths */}
                  <path d="M120 95 C130 135 110 160 140 225" stroke={C.orbital[500]} strokeWidth="1" fill="none" opacity="0.25" strokeDasharray="4 4" />
                  <path d="M250 230 C255 270 230 300 260 360" stroke={C.nuclear[500]} strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="4 4" />
                  <path d="M160 375 C165 415 150 440 170 505" stroke={C.space[500]} strokeWidth="1" fill="none" opacity="0.2" strokeDasharray="4 4" />
                  <path d="M300 98 C320 250 310 400 280 500" stroke={C.cyber[500]} strokeWidth="0.8" fill="none" opacity="0.15" strokeDasharray="3 5" />

                  {/* Escalation labels */}
                  <rect x="75" y="140" width="76" height="16" rx="2" fill={C.elevated} stroke={C.orbital[500]} strokeWidth="0.5" opacity="0.7" />
                  <text x="113" y="151" textAnchor="middle" fill={C.orbital[400]} fontSize="8" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.1em">ESCALATION</text>

                  <rect x="210" y="280" width="66" height="16" rx="2" fill={C.elevated} stroke={C.nuclear[500]} strokeWidth="0.5" opacity="0.7" />
                  <text x="243" y="291" textAnchor="middle" fill={C.nuclear[400]} fontSize="8" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.1em">SPILLOVER</text>

                  <rect x="120" y="420" width="80" height="16" rx="2" fill={C.elevated} stroke={C.space[500]} strokeWidth="0.5" opacity="0.7" />
                  <text x="160" y="431" textAnchor="middle" fill={C.space[400]} fontSize="8" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.1em">GOVERNANCE</text>

                  {/* Fault line */}
                  <circle cx="210" cy="300" r="10" fill="none" stroke={C.text.muted} strokeWidth="1" opacity="0.3" />
                  <circle cx="210" cy="300" r="3.5" fill={C.text.secondary} fillOpacity="0.5" />
                  <rect x="226" y="293" width="72" height="16" rx="2" fill={C.raised} />
                  <text x="262" y="304" textAnchor="middle" fill={C.text.primary} fontSize="8" fontFamily="Barlow Condensed, sans-serif" fontWeight="700" letterSpacing="0.12em">FAULT LINE</text>
                </svg>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <ScrollReveal>
              <div>
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3 text-orbital-500">Cross-Domain Thesis</p>
                <h2 className="wordmark text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight max-w-lg">
                  Why Siloed Analysis Is No Longer Sufficient
                </h2>
              </div>
            </ScrollReveal>

            <div className="w-12 h-px bg-white/8" />

            <ScrollReveal delay={100}>
              <p className="text-base leading-[1.75] text-text-primary/70">
                Strategic risk no longer remains neatly bounded by sector.
                Technical dependencies, political signaling, institutional
                fragmentation, and infrastructural coupling allow disruption to
                travel across domains.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-sm leading-[1.75] text-text-secondary">
                A disruption in orbital systems can degrade nuclear
                command-and-control. Contested lunar governance frameworks shape
                strategic posture. A cyber operation against energy grids can
                alter nuclear calculations. Misperception in one domain
                can trigger escalation in another. To understand these dynamics,
                separate maps are not enough.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="space-y-3 pt-4">
                <div className="p-4 border-l-2 border-orbital-500/30 bg-elevated/30">
                  <p className="text-text-primary text-sm font-medium mb-1">Infrastructure interdependence creates risk spillover</p>
                  <p className="text-text-secondary text-[13px] leading-[1.7]">Systems designed independently now share physical links, data pathways, and supply chains that transmit disruption across boundaries.</p>
                </div>
                <div className="p-4 border-l-2 border-nuclear-500/30 bg-elevated/30">
                  <p className="text-text-primary text-sm font-medium mb-1">Escalation travels through technical and political coupling</p>
                  <p className="text-text-secondary text-[13px] leading-[1.7]">A failure or attack in one domain can reshape calculations and responses in others, often through indirect and poorly understood channels.</p>
                </div>
                <div className="p-4 border-l-2 border-space-500/30 bg-elevated/30">
                  <p className="text-text-primary text-sm font-medium mb-1">Governance authority concentrates through ambiguous mandates</p>
                  <p className="text-text-secondary text-[13px] leading-[1.7]">Competing lunar governance frameworks deploy universalist language while concentrating interpretive power, leaving cross-domain authority contested.</p>
                </div>
                <div className="p-4 border-l-2 border-cyber-500/30 bg-elevated/30">
                  <p className="text-text-primary text-sm font-medium mb-1">Governance institutions remain fragmented by sector</p>
                  <p className="text-text-secondary text-[13px] leading-[1.7]">Regulatory and diplomatic frameworks still operate within domain silos, leaving cross-domain risks systematically under-governed.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
