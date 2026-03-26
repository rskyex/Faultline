"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function CenterpieceSection() {
  return (
    <section className="relative py-28 lg:py-44 bg-navy-900/30 overflow-hidden">
      {/* Optional background image — uncomment when /images/systems-dark.png is available */}
      {/* <div
        className="absolute inset-0 opacity-[0.08] mix-blend-screen"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/systems-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 80%)",
        }}
      /> */}

      <div className="absolute inset-0 opacity-[0.025]" aria-hidden="true">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="cp-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={C.steel[400]} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cp-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">Systems Convergence</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-[-0.02em]">Mapping the Fault Lines</h2>
            <p className="mt-5 text-steel-400 text-base max-w-lg mx-auto leading-relaxed">
              Where orbital, nuclear, and cyber infrastructures intersect, strategic vulnerabilities accumulate.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} distance={16}>
          {/* Mobile simplified version */}
          <div className="block md:hidden mb-8">
            <svg viewBox="0 0 400 360" fill="none" className="w-full max-w-[400px] mx-auto" role="img" aria-label="Simplified cross-domain convergence diagram">
              <defs>
                <radialGradient id="cp-m-glow" cx="0.5" cy="0.5" r="0.45">
                  <stop offset="0%" stopColor={C.steel[500]} stopOpacity="0.1" />
                  <stop offset="100%" stopColor={C.navy[950]} stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="180" r="160" fill="url(#cp-m-glow)" />

              {/* Three domain nodes */}
              <circle cx="200" cy="60" r="8" fill={C.steel[500]} opacity="0.5" />
              <text x="200" y="40" textAnchor="middle" fill={C.steel[500]} fontSize="9" fontFamily="Inter, sans-serif" opacity="0.6" letterSpacing="0.12em">ORBITAL</text>

              <circle cx="90" cy="280" r="8" fill={C.steel[400]} opacity="0.5" />
              <text x="90" y="310" textAnchor="middle" fill={C.steel[400]} fontSize="9" fontFamily="Inter, sans-serif" opacity="0.6" letterSpacing="0.12em">NUCLEAR</text>

              <circle cx="310" cy="280" r="8" fill={C.gold[400]} opacity="0.45" />
              <text x="310" y="310" textAnchor="middle" fill={C.gold[400]} fontSize="9" fontFamily="Inter, sans-serif" opacity="0.55" letterSpacing="0.12em">CYBER</text>

              {/* Connecting lines */}
              <line x1="200" y1="68" x2="90" y2="272" stroke={C.steel[500]} strokeWidth="0.8" opacity="0.25" strokeDasharray="4 5" />
              <line x1="200" y1="68" x2="310" y2="272" stroke={C.steel[400]} strokeWidth="0.8" opacity="0.25" strokeDasharray="4 5" />
              <line x1="98" y1="280" x2="302" y2="280" stroke={C.gold[400]} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 5" />

              {/* Center convergence */}
              <circle cx="200" cy="180" r="12" fill="none" stroke={C.steel[300]} strokeWidth="1.2" opacity="0.5" />
              <circle cx="200" cy="180" r="4" fill={C.steel[300]} opacity="0.6" />

              {/* Fault line */}
              <path d="M150 40 L175 110 L190 160 L200 180 L210 210 L230 270 L250 330" stroke={C.steel[300]} strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" />

              {/* Labels */}
              <text x="230" y="170" fill={C.steel[300]} fontSize="7" fontFamily="Inter, sans-serif" opacity="0.35" letterSpacing="0.06em">FAULT LINE</text>
              <text x="120" y="220" fill={C.steel[400]} fontSize="6.5" fontFamily="Inter, sans-serif" opacity="0.3" letterSpacing="0.05em">DEPENDENCIES</text>
              <text x="230" y="240" fill={C.gold[400]} fontSize="6.5" fontFamily="Inter, sans-serif" opacity="0.25" letterSpacing="0.05em">GOVERNANCE GAPS</text>
            </svg>
          </div>

          {/* Desktop full version */}
          <div className="relative hidden md:flex justify-center">
            <svg
              viewBox="0 0 1000 650"
              fill="none"
              className="w-full max-w-[1000px]"
              role="img"
              aria-label="Cross-domain systems convergence map showing orbital, nuclear, and cyber zones connected by escalation pathways, dependency arcs, and structural fault lines meeting at a central convergence node"
            >
              <defs>
                <radialGradient id="cp-glow" cx="0.5" cy="0.48" r="0.42">
                  <stop offset="0%" stopColor={C.steel[500]} stopOpacity="0.1" />
                  <stop offset="100%" stopColor={C.navy[950]} stopOpacity="0" />
                </radialGradient>
                <radialGradient id="cp-core" cx="0.5" cy="0.48" r="0.1">
                  <stop offset="0%" stopColor={C.steel[300]} stopOpacity="0.18" />
                  <stop offset="100%" stopColor={C.navy[950]} stopOpacity="0" />
                </radialGradient>
                <filter id="cp-blur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                </filter>
              </defs>

              <ellipse cx="500" cy="310" rx="380" ry="260" fill="url(#cp-glow)" />
              <circle cx="500" cy="310" r="90" fill="url(#cp-core)" />

              {/* Topographic contour field */}
              {Array.from({ length: 8 }, (_, i) => (
                <ellipse key={`topo-${i}`} cx={500} cy={310} rx={70 + i * 45} ry={30 + i * 22}
                  stroke={C.steel[500]} strokeWidth={i < 3 ? "0.6" : "0.35"} fill="none"
                  opacity={0.06 + (7 - i) * 0.015} transform={`rotate(${-10 + i * 3} 500 310)`} />
              ))}

              {/* Pressure rings */}
              {[280, 220, 160, 100, 50].map((r, i) => (
                <circle key={`ring-${i}`} cx="500" cy="310" r={r} stroke={C.steel[500]}
                  strokeWidth={i > 2 ? "0.6" : "0.3"} fill="none" opacity={0.06 + i * 0.03}
                  strokeDasharray={i % 2 === 0 ? "none" : "5 8"} />
              ))}

              {/* Orbital zone */}
              <path d="M500 70 L380 210 L620 210 Z" stroke={C.steel[500]} strokeWidth="0.7" fill={C.steel[500]} fillOpacity="0.025" />
              <text x="500" y="120" textAnchor="middle" fill={C.steel[500]} fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="0.15em" opacity="0.55">ORBITAL</text>
              {[[460, 160, 4.5], [540, 150, 3.5], [500, 175, 3], [520, 130, 2.5], [480, 195, 2]].map(([cx, cy, r], i) => (
                <circle key={`on-${i}`} cx={cx} cy={cy} r={r} fill={C.steel[500]} opacity={0.45 - i * 0.07} />
              ))}

              {/* Nuclear zone */}
              <path d="M200 540 L320 380 L140 360 Z" stroke={C.steel[400]} strokeWidth="0.7" fill={C.steel[400]} fillOpacity="0.025" />
              <text x="210" y="520" textAnchor="middle" fill={C.steel[400]} fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="0.15em" opacity="0.55">NUCLEAR</text>
              {[[260, 420, 5], [220, 400, 3.5], [300, 410, 3], [240, 460, 2.5], [180, 430, 2]].map(([cx, cy, r], i) => (
                <circle key={`nn-${i}`} cx={cx} cy={cy} r={r} fill={C.steel[400]} opacity={0.4 - i * 0.06} />
              ))}

              {/* Cyber zone */}
              <path d="M800 540 L680 380 L860 360 Z" stroke={C.gold[400]} strokeWidth="0.7" fill={C.gold[400]} fillOpacity="0.02" />
              <text x="790" y="520" textAnchor="middle" fill={C.gold[400]} fontSize="11" fontFamily="Inter, sans-serif" letterSpacing="0.15em" opacity="0.5">CYBER</text>
              {[[740, 420, 4.5], [780, 400, 3.5], [710, 410, 3], [760, 460, 2.5], [820, 430, 2]].map(([cx, cy, r], i) => (
                <circle key={`cn-${i}`} cx={cx} cy={cy} r={r} fill={C.gold[400]} opacity={0.35 - i * 0.05} />
              ))}

              {/* Convergence lines */}
              <line x1="500" y1="145" x2="500" y2="290" stroke={C.steel[500]} strokeWidth="1.2" opacity="0.25" />
              <line x1="240" y1="470" x2="470" y2="325" stroke={C.steel[400]} strokeWidth="1.2" opacity="0.25" />
              <line x1="770" y1="470" x2="530" y2="325" stroke={C.gold[400]} strokeWidth="1.2" opacity="0.2" />

              {/* Cross-domain arcs */}
              <path d="M400 195 Q280 290 255 400" stroke={C.steel[300]} strokeWidth="0.9" fill="none" opacity="0.2" strokeDasharray="6 5" />
              <path d="M600 195 Q720 290 745 400" stroke={C.gold[300]} strokeWidth="0.9" fill="none" opacity="0.15" strokeDasharray="6 5" />
              <path d="M290 480 Q500 460 720 480" stroke={C.steel[400]} strokeWidth="0.9" fill="none" opacity="0.15" strokeDasharray="6 5" />

              {/* Primary fault line */}
              <path d="M350 80 L400 180 L440 250 L480 290 L500 310 L520 345 L560 410 L610 500 L650 580"
                stroke={C.steel[300]} strokeWidth="2.5" fill="none" opacity="0.45"
                strokeLinecap="round" strokeLinejoin="round" filter="url(#cp-blur)" />
              <path d="M350 80 L400 180 L440 250 L480 290 L500 310 L520 345 L560 410 L610 500 L650 580"
                stroke={C.steel[300]} strokeWidth="1.5" fill="none" opacity="0.5"
                strokeLinecap="round" strokeLinejoin="round" />
              <path d="M356 88 L406 188 L446 258 L486 298 L506 318 L526 353 L566 418 L616 508"
                stroke={C.gold[400]} strokeWidth="0.5" fill="none" opacity="0.15" strokeDasharray="3 6" />

              {/* Secondary fracture */}
              <path d="M120 280 L250 290 L380 300 L500 310 L620 300 L750 285 L880 270"
                stroke={C.steel[500]} strokeWidth="1.2" fill="none" opacity="0.18" strokeLinecap="round" />

              {/* Central node */}
              <circle cx="500" cy="310" r="16" fill="none" stroke={C.steel[300]} strokeWidth="1.5" opacity="0.5" />
              <circle cx="500" cy="310" r="8" fill="none" stroke={C.steel[300]} strokeWidth="0.6" opacity="0.35" />
              <circle cx="500" cy="310" r="4" fill={C.steel[300]} opacity="0.65" className="animate-gentle-pulse" style={{ transformOrigin: '500px 310px' }} />
              <circle cx="500" cy="310" r="24" fill="none" stroke={C.steel[300]} strokeWidth="0.3" opacity="0.15" strokeDasharray="3 5" />

              {/* Labels */}
              <text x="405" y="268" fill={C.steel[300]} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.4" transform="rotate(-48 405 268)" letterSpacing="0.08em">ESCALATION PATHWAY</text>
              <text x="350" y="365" fill={C.steel[400]} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.35" letterSpacing="0.08em">DEPENDENCIES</text>
              <text x="565" y="360" fill={C.gold[400]} fontSize="8" fontFamily="Inter, sans-serif" opacity="0.3" letterSpacing="0.08em">GOVERNANCE GAPS</text>
              <text x="445" y="425" fill={C.steel[300]} fontSize="7.5" fontFamily="Inter, sans-serif" opacity="0.3" letterSpacing="0.06em">INFRASTRUCTURAL COUPLING</text>
              <text x="540" y="265" fill={C.steel[500]} fontSize="7.5" fontFamily="Inter, sans-serif" opacity="0.25" letterSpacing="0.06em">CROSS-DOMAIN EXPOSURE</text>
            </svg>
          </div>

          <p className="text-center text-steel-400/50 text-xs mt-10 tracking-[0.05em]">
            Structural convergence of cross-domain risk pathways and governance fault lines
          </p>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
