"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function CenterpieceSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Top: Image background header */}
      <div className="relative py-20 lg:py-28">
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: "url(/images/topo-dark.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />

        <div className="absolute inset-0 bg-navy-950/50" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-gold-300 text-xs font-medium tracking-[0.2em] uppercase mb-4">Systems Convergence</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-[-0.02em]">Mapping the Fault Lines</h2>
              <p className="mt-5 text-white/70 text-base max-w-lg mx-auto leading-relaxed">
                Where orbital, nuclear, and cyber infrastructures intersect, strategic vulnerabilities accumulate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom: White background diagram */}
      <div className="relative py-16 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <ScrollReveal delay={150} distance={16}>
            {/* Mobile */}
            <div className="block md:hidden">
              <svg viewBox="0 0 400 360" fill="none" className="w-full max-w-[400px] mx-auto" role="img" aria-label="Simplified cross-domain convergence diagram">
                <circle cx="200" cy="60" r="8" fill={C.steel[500]} opacity="0.6" />
                <text x="200" y="40" textAnchor="middle" fill={C.navy[700]} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em">ORBITAL</text>
                <circle cx="90" cy="280" r="8" fill={C.steel[400]} opacity="0.6" />
                <text x="90" y="310" textAnchor="middle" fill={C.navy[700]} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em">NUCLEAR</text>
                <circle cx="310" cy="280" r="8" fill={C.gold[400]} opacity="0.55" />
                <text x="310" y="310" textAnchor="middle" fill={C.navy[700]} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.12em">CYBER</text>
                <line x1="200" y1="68" x2="90" y2="272" stroke={C.steel[500]} strokeWidth="1" opacity="0.3" strokeDasharray="4 5" />
                <line x1="200" y1="68" x2="310" y2="272" stroke={C.steel[400]} strokeWidth="1" opacity="0.3" strokeDasharray="4 5" />
                <line x1="98" y1="280" x2="302" y2="280" stroke={C.gold[400]} strokeWidth="1" opacity="0.25" strokeDasharray="4 5" />
                <circle cx="200" cy="180" r="12" fill="none" stroke={C.steel[500]} strokeWidth="1.5" opacity="0.5" />
                <circle cx="200" cy="180" r="4" fill={C.steel[500]} opacity="0.6" />
                <path d="M150 40 L175 110 L190 160 L200 180 L210 210 L230 270 L250 330" stroke={C.steel[500]} strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
                <text x="220" y="175" fill={C.navy[700]} fontSize="7.5" fontFamily="DM Sans, sans-serif" fontWeight="600" opacity="0.6">FAULT LINE</text>
              </svg>
            </div>

            {/* Desktop */}
            <div className="hidden md:block">
              <svg viewBox="0 0 1000 650" fill="none" className="w-full max-w-[1000px] mx-auto" role="img" aria-label="Cross-domain systems convergence map">
                <defs>
                  <radialGradient id="cp-glow" cx="0.5" cy="0.48" r="0.42">
                    <stop offset="0%" stopColor={C.steel[500]} stopOpacity="0.06" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                  </radialGradient>
                  <filter id="cp-blur"><feGaussianBlur in="SourceGraphic" stdDeviation="1.5" /></filter>
                </defs>

                <ellipse cx="500" cy="310" rx="380" ry="260" fill="url(#cp-glow)" />

                {Array.from({ length: 8 }, (_, i) => (
                  <ellipse key={`topo-${i}`} cx={500} cy={310} rx={70 + i * 45} ry={30 + i * 22}
                    stroke={C.steel[500]} strokeWidth={i < 3 ? "0.6" : "0.35"} fill="none"
                    opacity={0.08 + (7 - i) * 0.015} transform={`rotate(${-10 + i * 3} 500 310)`} />
                ))}

                {[280, 220, 160, 100, 50].map((r, i) => (
                  <circle key={`ring-${i}`} cx="500" cy="310" r={r} stroke={C.steel[500]}
                    strokeWidth={i > 2 ? "0.6" : "0.3"} fill="none" opacity={0.06 + i * 0.03}
                    strokeDasharray={i % 2 === 0 ? "none" : "5 8"} />
                ))}

                {/* Orbital */}
                <path d="M500 70 L380 210 L620 210 Z" stroke={C.steel[500]} strokeWidth="1.5" fill={C.steel[500]} fillOpacity="0.06" />
                <text x="500" y="118" textAnchor="middle" fill={C.navy[800]} fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.15em">ORBITAL</text>
                {[[460,160,6],[540,150,5],[500,175,4.5],[520,130,3.5]].map(([cx,cy,r],i)=>(
                  <circle key={`on-${i}`} cx={cx} cy={cy} r={r} fill={C.steel[500]} opacity={0.6-i*0.1}/>
                ))}

                {/* Nuclear */}
                <path d="M200 540 L320 380 L140 360 Z" stroke={C.steel[400]} strokeWidth="1.5" fill={C.steel[400]} fillOpacity="0.06" />
                <text x="210" y="518" textAnchor="middle" fill={C.navy[800]} fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.15em">NUCLEAR</text>
                {[[260,420,6.5],[220,400,5],[300,410,4.5],[240,460,3.5]].map(([cx,cy,r],i)=>(
                  <circle key={`nn-${i}`} cx={cx} cy={cy} r={r} fill={C.steel[400]} opacity={0.55-i*0.08}/>
                ))}

                {/* Cyber */}
                <path d="M800 540 L680 380 L860 360 Z" stroke={C.gold[400]} strokeWidth="1.5" fill={C.gold[400]} fillOpacity="0.05" />
                <text x="790" y="518" textAnchor="middle" fill={C.navy[800]} fontSize="12" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.15em">CYBER</text>
                {[[740,420,6],[780,400,5],[710,410,4.5],[760,460,3.5]].map(([cx,cy,r],i)=>(
                  <circle key={`cn-${i}`} cx={cx} cy={cy} r={r} fill={C.gold[400]} opacity={0.5-i*0.08}/>
                ))}

                {/* Lines */}
                <line x1="500" y1="145" x2="500" y2="290" stroke={C.steel[500]} strokeWidth="1.2" opacity="0.25" />
                <line x1="240" y1="470" x2="470" y2="325" stroke={C.steel[400]} strokeWidth="1.2" opacity="0.25" />
                <line x1="770" y1="470" x2="530" y2="325" stroke={C.gold[400]} strokeWidth="1.2" opacity="0.2" />

                <path d="M400 195 Q280 290 255 400" stroke={C.steel[500]} strokeWidth="0.9" fill="none" opacity="0.2" strokeDasharray="6 5" />
                <path d="M600 195 Q720 290 745 400" stroke={C.gold[400]} strokeWidth="0.9" fill="none" opacity="0.18" strokeDasharray="6 5" />
                <path d="M290 480 Q500 460 720 480" stroke={C.steel[400]} strokeWidth="0.9" fill="none" opacity="0.18" strokeDasharray="6 5" />

                {/* Fault line */}
                <path d="M350 80 L400 180 L440 250 L480 290 L500 310 L520 345 L560 410 L610 500 L650 580"
                  stroke={C.navy[700]} strokeWidth="3" fill="none" opacity="0.2" strokeLinecap="round" strokeLinejoin="round" filter="url(#cp-blur)" />
                <path d="M350 80 L400 180 L440 250 L480 290 L500 310 L520 345 L560 410 L610 500 L650 580"
                  stroke={C.navy[700]} strokeWidth="2" fill="none" opacity="0.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M356 88 L406 188 L446 258 L486 298 L506 318 L526 353 L566 418 L616 508"
                  stroke={C.gold[500]} strokeWidth="0.8" fill="none" opacity="0.3" strokeDasharray="3 6" />

                <path d="M120 280 L250 290 L380 300 L500 310 L620 300 L750 285 L880 270"
                  stroke={C.navy[700]} strokeWidth="1.2" fill="none" opacity="0.2" strokeLinecap="round" />

                {/* Center */}
                <circle cx="500" cy="310" r="18" fill="none" stroke={C.navy[700]} strokeWidth="2" opacity="0.5" />
                <circle cx="500" cy="310" r="9" fill="none" stroke={C.navy[700]} strokeWidth="0.8" opacity="0.4" />
                <circle cx="500" cy="310" r="5" fill={C.navy[700]} opacity="0.7" className="animate-gentle-pulse" style={{ transformOrigin: '500px 310px' }} />

                {/* Labels */}
                <text x="405" y="268" fill={C.navy[800]} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" opacity="0.7" transform="rotate(-48 405 268)" letterSpacing="0.08em">ESCALATION PATHWAY</text>
                <text x="350" y="365" fill={C.navy[800]} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" opacity="0.6" letterSpacing="0.08em">DEPENDENCIES</text>
                <text x="565" y="360" fill={C.navy[800]} fontSize="9" fontFamily="DM Sans, sans-serif" fontWeight="600" opacity="0.55" letterSpacing="0.08em">GOVERNANCE GAPS</text>
                <text x="445" y="425" fill={C.navy[700]} fontSize="8.5" fontFamily="DM Sans, sans-serif" fontWeight="600" opacity="0.5" letterSpacing="0.06em">INFRASTRUCTURAL COUPLING</text>
              </svg>
            </div>

            <p className="text-center text-navy-600/50 text-xs mt-8 tracking-[0.05em]">
              Structural convergence of cross-domain risk pathways and governance fault lines
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
