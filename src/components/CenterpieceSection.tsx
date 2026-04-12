"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function CenterpieceSection() {
  return (
    <section className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-deep" />
      <div className="absolute inset-0 grid-pattern opacity-25" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3 text-orbital-500">Systems Convergence</p>
            <h2 className="wordmark text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">Mapping the Fault Lines</h2>
            <p className="mt-4 text-text-primary/70 text-sm max-w-lg mx-auto leading-relaxed">
              Where orbital, nuclear, lunar governance, and cyber infrastructures intersect, strategic vulnerabilities accumulate.
            </p>
          </div>
        </ScrollReveal>

        {/* Diagram */}
        <ScrollReveal delay={150} distance={16}>
          {/* Mobile */}
          <div className="block md:hidden">
            <svg viewBox="0 0 400 400" fill="none" className="w-full max-w-[360px] mx-auto" role="img" aria-label="Cross-domain convergence diagram">
              {/* Domain nodes */}
              <circle cx="200" cy="50" r="6" fill={C.orbital[500]} opacity="0.6" />
              <text x="200" y="32" textAnchor="middle" fill={C.orbital[500]} fontSize="9" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.15em" opacity="0.7">ORBITAL</text>

              <circle cx="60" cy="230" r="6" fill={C.nuclear[500]} opacity="0.6" />
              <text x="60" y="255" textAnchor="middle" fill={C.nuclear[500]} fontSize="9" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.15em" opacity="0.7">NUCLEAR</text>

              <circle cx="340" cy="230" r="6" fill={C.cyber[500]} opacity="0.55" />
              <text x="340" y="255" textAnchor="middle" fill={C.cyber[500]} fontSize="9" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.15em" opacity="0.7">CYBER</text>

              <circle cx="200" cy="360" r="6" fill={C.space[500]} opacity="0.5" />
              <text x="200" y="385" textAnchor="middle" fill={C.space[500]} fontSize="9" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.15em" opacity="0.7">LUNAR GOV</text>

              {/* Connecting lines */}
              <line x1="200" y1="56" x2="60" y2="224" stroke={C.orbital[500]} strokeWidth="0.6" opacity="0.15" strokeDasharray="3 4" />
              <line x1="200" y1="56" x2="340" y2="224" stroke={C.orbital[500]} strokeWidth="0.6" opacity="0.15" strokeDasharray="3 4" />
              <line x1="66" y1="230" x2="334" y2="230" stroke={C.nuclear[500]} strokeWidth="0.6" opacity="0.12" strokeDasharray="3 4" />
              <line x1="60" y1="236" x2="194" y2="354" stroke={C.space[500]} strokeWidth="0.6" opacity="0.12" strokeDasharray="3 4" />
              <line x1="340" y1="236" x2="206" y2="354" stroke={C.space[500]} strokeWidth="0.6" opacity="0.12" strokeDasharray="3 4" />
              <line x1="200" y1="56" x2="200" y2="354" stroke={C.text.muted} strokeWidth="0.4" opacity="0.1" strokeDasharray="2 4" />

              {/* Center */}
              <circle cx="200" cy="200" r="10" fill="none" stroke={C.text.muted} strokeWidth="0.8" opacity="0.2" />
              <circle cx="200" cy="200" r="3" fill={C.text.secondary} fillOpacity="0.5" />
              <text x="218" y="195" fill={C.text.muted} fontSize="7" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" opacity="0.5" letterSpacing="0.1em">FAULT LINE</text>
            </svg>
          </div>

          {/* Desktop */}
          <div className="hidden md:block">
            <svg viewBox="0 0 1000 600" fill="none" className="w-full max-w-[1000px] mx-auto" role="img" aria-label="Cross-domain systems convergence map">
              <defs>
                <radialGradient id="cp-glow" cx="0.5" cy="0.5" r="0.45">
                  <stop offset="0%" stopColor={C.orbital[500]} stopOpacity="0.03" />
                  <stop offset="100%" stopColor={C.deep} stopOpacity="0" />
                </radialGradient>
              </defs>

              <ellipse cx="500" cy="300" rx="380" ry="250" fill="url(#cp-glow)" />

              {/* Topo rings */}
              {[240, 190, 140, 95, 55].map((r, i) => (
                <circle key={`ring-${i}`} cx="500" cy="300" r={r} stroke={C.orbital[500]}
                  strokeWidth={i > 2 ? "0.5" : "0.3"} fill="none" opacity={0.04 + i * 0.015}
                  strokeDasharray={i % 2 === 0 ? "none" : "4 6"} />
              ))}

              {/* Orbital — top */}
              <path d="M500 60 L400 180 L600 180 Z" stroke={C.orbital[500]} strokeWidth="1" fill={C.orbital[500]} fillOpacity="0.03" />
              <text x="500" y="105" textAnchor="middle" fill={C.orbital[500]} fontSize="11" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.2em" opacity="0.7">ORBITAL</text>
              {[[470,145,4],[530,140,3.5],[500,158,3]].map(([cx,cy,r],i)=>(
                <circle key={`on-${i}`} cx={cx} cy={cy} r={r} fill={C.orbital[500]} opacity={0.5-i*0.1}/>
              ))}

              {/* Nuclear — bottom-left */}
              <path d="M200 520 L300 380 L140 380 Z" stroke={C.nuclear[500]} strokeWidth="1" fill={C.nuclear[500]} fillOpacity="0.03" />
              <text x="210" y="502" textAnchor="middle" fill={C.nuclear[500]} fontSize="11" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.2em" opacity="0.7">NUCLEAR</text>
              {[[240,420,4.5],[210,405,3.5],[270,412,3]].map(([cx,cy,r],i)=>(
                <circle key={`nn-${i}`} cx={cx} cy={cy} r={r} fill={C.nuclear[500]} opacity={0.45-i*0.08}/>
              ))}

              {/* Cyber — bottom-right */}
              <path d="M800 520 L700 380 L860 380 Z" stroke={C.cyber[500]} strokeWidth="1" fill={C.cyber[500]} fillOpacity="0.03" />
              <text x="790" y="502" textAnchor="middle" fill={C.cyber[500]} fontSize="11" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.2em" opacity="0.7">CYBER</text>
              {[[750,420,4],[780,405,3.5],[730,412,3]].map(([cx,cy,r],i)=>(
                <circle key={`cn-${i}`} cx={cx} cy={cy} r={r} fill={C.cyber[500]} opacity={0.4-i*0.08}/>
              ))}

              {/* Lunar Governance — bottom-center */}
              <path d="M500 560 L420 440 L580 440 Z" stroke={C.space[500]} strokeWidth="1" fill={C.space[500]} fillOpacity="0.03" />
              <text x="500" y="542" textAnchor="middle" fill={C.space[500]} fontSize="11" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.2em" opacity="0.7">LUNAR GOV</text>
              {[[480,470,4],[520,465,3.5],[500,480,3]].map(([cx,cy,r],i)=>(
                <circle key={`sn-${i}`} cx={cx} cy={cy} r={r} fill={C.space[500]} opacity={0.4-i*0.08}/>
              ))}

              {/* Connection lines */}
              <line x1="500" y1="140" x2="500" y2="280" stroke={C.orbital[500]} strokeWidth="0.8" opacity="0.12" />
              <line x1="240" y1="440" x2="470" y2="310" stroke={C.nuclear[500]} strokeWidth="0.8" opacity="0.12" />
              <line x1="760" y1="440" x2="530" y2="310" stroke={C.cyber[500]} strokeWidth="0.8" opacity="0.12" />
              <line x1="500" y1="440" x2="500" y2="320" stroke={C.space[500]} strokeWidth="0.8" opacity="0.12" />

              {/* Curved escalation paths */}
              <path d="M420 175 Q280 280 255 400" stroke={C.orbital[500]} strokeWidth="0.6" fill="none" opacity="0.1" strokeDasharray="4 4" />
              <path d="M580 175 Q720 280 745 400" stroke={C.cyber[500]} strokeWidth="0.6" fill="none" opacity="0.1" strokeDasharray="4 4" />
              <path d="M290 460 Q400 480 460 440" stroke={C.nuclear[500]} strokeWidth="0.6" fill="none" opacity="0.1" strokeDasharray="4 4" />
              <path d="M720 460 Q600 480 540 440" stroke={C.cyber[500]} strokeWidth="0.6" fill="none" opacity="0.1" strokeDasharray="4 4" />

              {/* Fault line */}
              <path d="M380 80 L420 170 L460 240 L490 280 L500 300 L510 330 L540 390 L560 440 L580 520"
                stroke={C.text.muted} strokeWidth="2" fill="none" opacity="0.15" strokeLinecap="round" />
              <path d="M380 80 L420 170 L460 240 L490 280 L500 300 L510 330 L540 390 L560 440 L580 520"
                stroke={C.text.secondary} strokeWidth="1" fill="none" opacity="0.3" strokeLinecap="round" />

              {/* Center convergence */}
              <circle cx="500" cy="300" r="16" fill="none" stroke={C.text.muted} strokeWidth="1" opacity="0.2" />
              <circle cx="500" cy="300" r="8" fill="none" stroke={C.text.muted} strokeWidth="0.5" opacity="0.15" />
              <circle cx="500" cy="300" r="4" fill={C.text.secondary} opacity="0.5" className="animate-gentle-pulse" style={{ transformOrigin: '500px 300px' }} />

              {/* Labels */}
              <text x="420" y="258" fill={C.text.muted} fontSize="8" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" opacity="0.4" transform="rotate(-50 420 258)" letterSpacing="0.1em">ESCALATION PATHWAY</text>
              <text x="350" y="350" fill={C.text.muted} fontSize="8" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" opacity="0.35" letterSpacing="0.1em">DEPENDENCIES</text>
              <text x="570" y="350" fill={C.text.muted} fontSize="8" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" opacity="0.3" letterSpacing="0.1em">GOVERNANCE GAPS</text>
              <text x="440" y="400" fill={C.text.muted} fontSize="7.5" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" opacity="0.3" letterSpacing="0.08em">INFRASTRUCTURAL COUPLING</text>
            </svg>
          </div>

          <p className="text-center text-text-secondary text-[11px] mt-6 tracking-[0.08em]">
            Structural convergence of cross-domain risk pathways and governance fault lines
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
