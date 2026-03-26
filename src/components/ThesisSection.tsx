"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function ThesisSection() {
  return (
    <section id="thesis" className="relative py-28 lg:py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left: Diagram */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal delay={200}>
              <div className="relative lg:sticky lg:top-28">
                <svg
                  viewBox="0 0 420 540"
                  fill="none"
                  className="w-full"
                  role="img"
                  aria-label="Layered diagram showing escalation and spillover pathways between orbital, nuclear, and cyber infrastructure layers"
                >
                  {/* Orbital layer */}
                  <rect x="30" y="40" width="360" height="120" fill={C.steel[500]} fillOpacity="0.06" stroke={C.steel[500]} strokeWidth="2" rx="4" />
                  <text x="50" y="66" fill={C.navy[800]} fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.1em">ORBITAL INFRASTRUCTURE</text>
                  <circle cx="120" cy="110" r="8" fill={C.steel[500]} opacity="0.25" stroke={C.steel[500]} strokeWidth="1" />
                  <circle cx="120" cy="110" r="3" fill={C.steel[500]} />
                  <circle cx="210" cy="100" r="6" fill={C.steel[500]} opacity="0.2" stroke={C.steel[500]} strokeWidth="0.8" />
                  <circle cx="210" cy="100" r="2.5" fill={C.steel[500]} />
                  <circle cx="300" cy="115" r="5" fill={C.steel[500]} opacity="0.15" stroke={C.steel[500]} strokeWidth="0.8" />
                  <circle cx="300" cy="115" r="2" fill={C.steel[500]} />
                  <line x1="128" y1="110" x2="204" y2="100" stroke={C.steel[500]} strokeWidth="1.2" opacity="0.4" />
                  <line x1="216" y1="100" x2="295" y2="115" stroke={C.steel[500]} strokeWidth="1.2" opacity="0.4" />

                  {/* Nuclear layer */}
                  <rect x="30" y="210" width="360" height="120" fill={C.steel[400]} fillOpacity="0.06" stroke={C.steel[400]} strokeWidth="2" rx="4" />
                  <text x="50" y="236" fill={C.navy[800]} fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.1em">NUCLEAR INFRASTRUCTURE</text>
                  <circle cx="140" cy="280" r="8" fill={C.steel[400]} opacity="0.25" stroke={C.steel[400]} strokeWidth="1" />
                  <circle cx="140" cy="280" r="3" fill={C.steel[400]} />
                  <circle cx="250" cy="270" r="7" fill={C.steel[400]} opacity="0.2" stroke={C.steel[400]} strokeWidth="0.8" />
                  <circle cx="250" cy="270" r="2.5" fill={C.steel[400]} />
                  <circle cx="320" cy="290" r="5" fill={C.steel[400]} opacity="0.15" stroke={C.steel[400]} strokeWidth="0.8" />
                  <circle cx="320" cy="290" r="2" fill={C.steel[400]} />

                  {/* Cyber layer */}
                  <rect x="30" y="380" width="360" height="120" fill={C.gold[400]} fillOpacity="0.06" stroke={C.gold[400]} strokeWidth="2" rx="4" />
                  <text x="50" y="406" fill={C.navy[800]} fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.1em">CYBER OPERATIONS</text>
                  <circle cx="170" cy="450" r="7" fill={C.gold[400]} opacity="0.25" stroke={C.gold[400]} strokeWidth="1" />
                  <circle cx="170" cy="450" r="3" fill={C.gold[400]} />
                  <circle cx="270" cy="440" r="6" fill={C.gold[400]} opacity="0.2" stroke={C.gold[400]} strokeWidth="0.8" />
                  <circle cx="270" cy="440" r="2.5" fill={C.gold[400]} />

                  {/* Cross-domain escalation paths */}
                  <path d="M120 118 C135 165 100 200 140 272" stroke={C.steel[500]} strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="6 5" />
                  <path d="M250 277 C260 330 210 370 170 443" stroke={C.gold[400]} strokeWidth="2" fill="none" opacity="0.4" strokeDasharray="6 5" />
                  <path d="M300 123 C325 230 330 340 270 433" stroke={C.gold[500]} strokeWidth="1.5" fill="none" opacity="0.3" strokeDasharray="5 6" />

                  {/* Escalation labels */}
                  <rect x="72" y="180" width="90" height="20" rx="3" fill="white" stroke={C.steel[500]} strokeWidth="0.8" opacity="0.8" />
                  <text x="117" y="194" textAnchor="middle" fill={C.navy[800]} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.06em">ESCALATION</text>

                  <rect x="215" y="350" width="80" height="20" rx="3" fill="white" stroke={C.gold[400]} strokeWidth="0.8" opacity="0.8" />
                  <text x="255" y="364" textAnchor="middle" fill={C.navy[800]} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.06em">SPILLOVER</text>

                  {/* Fault line convergence */}
                  <circle cx="210" cy="275" r="14" fill="white" stroke={C.navy[700]} strokeWidth="1.5" />
                  <circle cx="210" cy="275" r="5" fill={C.navy[700]} />
                  <rect x="230" y="266" width="90" height="20" rx="3" fill={C.navy[800]} />
                  <text x="275" y="280" textAnchor="middle" fill="white" fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.08em">FAULT LINE</text>
                </svg>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <ScrollReveal>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: C.gold[500] }}>Cross-Domain Thesis</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight max-w-lg tracking-[-0.01em]">
                  Why Siloed Analysis Is No Longer Sufficient
                </h2>
              </div>
            </ScrollReveal>

            <div className="w-16 h-px bg-navy-800/15" />

            <ScrollReveal delay={100}>
              <p className="text-lg leading-[1.7] text-navy-900 font-serif-accent">
                Strategic risk no longer remains neatly bounded by sector.
                Technical dependencies, political signaling, institutional
                fragmentation, and infrastructural coupling allow disruption to
                travel across domains.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-base leading-[1.7] text-navy-700">
                A disruption in orbital systems can degrade nuclear
                command-and-control. A cyber operation against energy grids can
                alter nuclear posture calculations. Misperception in one domain
                can trigger escalation in another. To understand these dynamics,
                separate maps are not enough.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="space-y-5 pt-6">
                <div className="pl-5 border-l-2 border-navy-800/20">
                  <p className="text-navy-950 text-sm font-medium mb-1.5">Infrastructure interdependence creates risk spillover</p>
                  <p className="text-navy-600 text-sm leading-[1.7]">Systems designed independently now share physical links, data pathways, and supply chains that transmit disruption across boundaries.</p>
                </div>
                <div className="pl-5 border-l-2 border-navy-800/15">
                  <p className="text-navy-950 text-sm font-medium mb-1.5">Escalation travels through technical and political coupling</p>
                  <p className="text-navy-600 text-sm leading-[1.7]">A failure or attack in one domain can reshape calculations and responses in others, often through indirect and poorly understood channels.</p>
                </div>
                <div className="pl-5 border-l-2 border-gold-500/30">
                  <p className="text-navy-950 text-sm font-medium mb-1.5">Governance institutions remain fragmented by sector</p>
                  <p className="text-navy-600 text-sm leading-[1.7]">Regulatory and diplomatic frameworks still operate within domain silos, leaving cross-domain risks systematically under-governed.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
