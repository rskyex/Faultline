"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function ThesisSection() {
  return (
    <section id="thesis" className="relative py-28 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left: Diagram */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ScrollReveal delay={200}>
              <div className="relative lg:sticky lg:top-28">
                <svg
                  viewBox="0 0 420 540"
                  fill="none"
                  className="w-full max-w-[420px]"
                  role="img"
                  aria-label="Layered diagram showing escalation and spillover pathways between orbital, nuclear, and cyber infrastructure layers"
                >
                  <defs>
                    <pattern id="thesis-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                      <path d="M 30 0 L 0 0 0 30" fill="none" stroke={C.steel[500]} strokeWidth="0.3" opacity="0.15" />
                    </pattern>
                  </defs>
                  <rect x="40" y="40" width="340" height="460" fill="url(#thesis-grid)" opacity="0.3" />
                  <line x1="210" y1="50" x2="210" y2="490" stroke={C.steel[500]} strokeWidth="0.4" opacity="0.2" />

                  {/* Orbital layer */}
                  <rect x="60" y="60" width="300" height="110" fill={C.steel[500]} fillOpacity="0.03" stroke={C.steel[500]} strokeWidth="0.5" opacity="0.3" />
                  <text x="76" y="82" fill={C.steel[500]} fontSize="9" fontFamily="Inter, sans-serif" opacity="0.55" letterSpacing="0.12em">ORBITAL INFRASTRUCTURE</text>
                  <circle cx="130" cy="120" r="5" fill={C.steel[500]} opacity="0.45" />
                  <circle cx="210" cy="110" r="4" fill={C.steel[500]} opacity="0.35" />
                  <circle cx="290" cy="125" r="3.5" fill={C.steel[500]} opacity="0.3" />
                  <circle cx="170" cy="140" r="2.5" fill={C.steel[300]} opacity="0.25" />
                  <line x1="130" y1="120" x2="210" y2="110" stroke={C.steel[500]} strokeWidth="0.5" opacity="0.25" />
                  <line x1="210" y1="110" x2="290" y2="125" stroke={C.steel[500]} strokeWidth="0.5" opacity="0.25" />

                  {/* Nuclear layer */}
                  <rect x="60" y="210" width="300" height="110" fill={C.steel[400]} fillOpacity="0.03" stroke={C.steel[400]} strokeWidth="0.5" opacity="0.3" />
                  <text x="76" y="232" fill={C.steel[400]} fontSize="9" fontFamily="Inter, sans-serif" opacity="0.55" letterSpacing="0.12em">NUCLEAR INFRASTRUCTURE</text>
                  <circle cx="140" cy="270" r="5.5" fill={C.steel[400]} opacity="0.4" />
                  <circle cx="250" cy="260" r="4.5" fill={C.steel[400]} opacity="0.35" />
                  <circle cx="310" cy="280" r="3.5" fill={C.steel[400]} opacity="0.25" />
                  <circle cx="180" cy="290" r="2.5" fill={C.steel[300]} opacity="0.2" />

                  {/* Cyber layer */}
                  <rect x="60" y="360" width="300" height="110" fill={C.gold[400]} fillOpacity="0.02" stroke={C.gold[400]} strokeWidth="0.5" opacity="0.25" />
                  <text x="76" y="382" fill={C.gold[400]} fontSize="9" fontFamily="Inter, sans-serif" opacity="0.5" letterSpacing="0.12em">CYBER OPERATIONS</text>
                  <circle cx="170" cy="420" r="4.5" fill={C.gold[400]} opacity="0.35" />
                  <circle cx="260" cy="410" r="3.5" fill={C.gold[400]} opacity="0.3" />
                  <circle cx="200" cy="440" r="3" fill={C.gold[300]} opacity="0.2" />
                  <circle cx="300" cy="430" r="2.5" fill={C.gold[400]} opacity="0.2" />

                  {/* Cross-domain paths */}
                  <path d="M130 125 C145 165 115 200 140 265" stroke={C.steel[300]} strokeWidth="1.2" fill="none" opacity="0.35" strokeDasharray="5 5" />
                  <path d="M250 264 C260 310 210 345 170 416" stroke={C.gold[400]} strokeWidth="1.2" fill="none" opacity="0.25" strokeDasharray="5 5" />
                  <path d="M290 129 C310 210 315 320 260 406" stroke={C.gold[500]} strokeWidth="0.8" fill="none" opacity="0.18" strokeDasharray="4 6" />

                  <text x="95" y="192" fill={C.steel[300]} fontSize="7" fontFamily="Inter, sans-serif" opacity="0.4" letterSpacing="0.05em">ESCALATION</text>
                  <text x="220" y="342" fill={C.gold[400]} fontSize="7" fontFamily="Inter, sans-serif" opacity="0.35" letterSpacing="0.05em">SPILLOVER</text>

                  <circle cx="210" cy="265" r="10" fill="none" stroke={C.steel[300]} strokeWidth="1" opacity="0.4" />
                  <circle cx="210" cy="265" r="3" fill={C.steel[300]} opacity="0.5" />
                  <text x="226" y="269" fill={C.steel[300]} fontSize="7.5" fontFamily="Inter, sans-serif" opacity="0.45" letterSpacing="0.08em">FAULT LINE</text>
                </svg>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <ScrollReveal>
              <div>
                <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">Cross-Domain Thesis</p>
                <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-lg tracking-[-0.01em]">
                  Why Siloed Analysis Is No Longer Sufficient
                </h2>
              </div>
            </ScrollReveal>

            <div className="w-16 h-px bg-gradient-to-r from-steel-500/50 to-transparent" />

            <ScrollReveal delay={100}>
              <p className="text-lg leading-[1.7] text-slate-200 font-serif-accent">
                Strategic risk no longer remains neatly bounded by sector.
                Technical dependencies, political signaling, institutional
                fragmentation, and infrastructural coupling allow disruption to
                travel across domains.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-base leading-[1.7] text-steel-400">
                A disruption in orbital systems can degrade nuclear
                command-and-control. A cyber operation against energy grids can
                alter nuclear posture calculations. Misperception in one domain
                can trigger escalation in another. To understand these dynamics,
                separate maps are not enough.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="space-y-5 pt-6">
                <div className="pl-5 border-l-2 border-steel-500/25">
                  <p className="text-white text-sm font-medium mb-1.5">Infrastructure interdependence creates risk spillover</p>
                  <p className="text-steel-400 text-sm leading-[1.7]">Systems designed independently now share physical links, data pathways, and supply chains that transmit disruption across boundaries.</p>
                </div>
                <div className="pl-5 border-l-2 border-steel-400/25">
                  <p className="text-white text-sm font-medium mb-1.5">Escalation travels through technical and political coupling</p>
                  <p className="text-steel-400 text-sm leading-[1.7]">A failure or attack in one domain can reshape calculations and responses in others, often through indirect and poorly understood channels.</p>
                </div>
                <div className="pl-5 border-l-2 border-gold-400/25">
                  <p className="text-white text-sm font-medium mb-1.5">Governance institutions remain fragmented by sector</p>
                  <p className="text-steel-400 text-sm leading-[1.7]">Regulatory and diplomatic frameworks still operate within domain silos, leaving cross-domain risks systematically under-governed.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
