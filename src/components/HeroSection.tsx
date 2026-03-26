"use client";

import { C } from "@/lib/colors";
import Image from "next/image";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-7">
            <div className="flex items-center gap-5 animate-fade-in-up">
              <Image
                src="/images/logo.png"
                alt="Faultline"
                width={64}
                height={64}
                className="w-16 h-16"
                priority
              />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-white leading-none text-premium">
                Faultline
              </h1>
            </div>

            <p className="text-steel-400 text-sm md:text-base font-normal tracking-[0.25em] uppercase animate-fade-in-up animate-delay-100">
              Cross-Domain Strategic Infrastructure Mapping
            </p>

            <div className="w-20 h-px bg-gradient-to-r from-steel-500/60 to-transparent animate-line-grow animate-delay-200" />

            <p className="text-xl md:text-2xl leading-[1.6] text-slate-200/90 max-w-2xl font-serif-accent font-normal animate-fade-in-up animate-delay-300">
              Orbital, nuclear, and cyber systems do not fail in isolation.
              Faultline maps the dependencies, escalation pathways, and
              governance fractures that emerge across them.
            </p>

            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up animate-delay-400">
              <a
                href="#domains"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-steel-500/15 border border-steel-500/30 text-white text-sm font-medium tracking-[0.05em] hover:bg-steel-500/25 hover:border-steel-400/50 transition-all duration-300"
              >
                Explore the Domains
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#thesis"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-steel-300/80 text-sm font-medium tracking-[0.05em] hover:text-white transition-colors duration-300 border border-transparent hover:border-steel-500/20"
              >
                Why Cross-Domain Analysis
              </a>
            </div>
          </div>

          {/* Right: Convergence diagram */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center animate-fade-in animate-delay-500">
            <div className="relative w-full aspect-square max-w-[500px]">
              <svg
                viewBox="0 0 500 500"
                fill="none"
                className="w-full h-full"
                role="img"
                aria-label="Cross-domain convergence diagram showing orbital, nuclear, and cyber systems intersecting along structural fault lines"
              >
                <defs>
                  <radialGradient id="hero-glow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor={C.steel[500]} stopOpacity="0.12" />
                    <stop offset="100%" stopColor={C.navy[950]} stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="hero-center" cx="0.5" cy="0.5" r="0.12">
                    <stop offset="0%" stopColor={C.steel[300]} stopOpacity="0.15" />
                    <stop offset="100%" stopColor={C.navy[950]} stopOpacity="0" />
                  </radialGradient>
                </defs>

                <circle cx="250" cy="250" r="230" fill="url(#hero-glow)" />
                <circle cx="250" cy="250" r="80" fill="url(#hero-center)" />

                {/* Topographic contours */}
                {[180, 150, 120, 90, 60].map((r, i) => (
                  <ellipse
                    key={`topo-${i}`}
                    cx={250} cy={250} rx={r} ry={r * 0.65}
                    stroke={C.steel[500]} strokeWidth="0.4" fill="none"
                    opacity={0.08 + i * 0.03}
                    transform={`rotate(${-12 + i * 4} 250 250)`}
                  />
                ))}

                {/* Orbital ellipses — animated */}
                <g className="animate-slow-rotate" style={{ transformOrigin: '250px 250px' }}>
                  <ellipse cx="250" cy="250" rx="200" ry="70" stroke={C.steel[500]} strokeWidth="0.6" fill="none" opacity="0.35" transform="rotate(-22 250 250)" />
                  <ellipse cx="250" cy="250" rx="170" ry="55" stroke={C.steel[500]} strokeWidth="0.35" fill="none" opacity="0.2" transform="rotate(-22 250 250)" />
                </g>
                <g className="animate-slow-rotate-reverse" style={{ transformOrigin: '250px 250px' }}>
                  <ellipse cx="250" cy="250" rx="200" ry="70" stroke={C.steel[400]} strokeWidth="0.4" fill="none" opacity="0.15" transform="rotate(35 250 250)" />
                </g>

                {/* Nuclear concentric rings */}
                {[100, 70, 40, 18].map((r, i) => (
                  <circle
                    key={`nuc-${i}`}
                    cx="250" cy="250" r={r}
                    stroke={C.steel[400]} strokeWidth={0.4 + i * 0.15}
                    fill="none" opacity={0.15 + i * 0.08}
                    strokeDasharray={i > 1 ? "none" : "3 5"}
                  />
                ))}

                {/* Cyber network rays */}
                {[
                  [250, 250, 80, 90], [250, 250, 420, 140],
                  [250, 250, 120, 400], [250, 250, 400, 380],
                  [250, 250, 220, 50], [250, 250, 440, 270],
                  [250, 250, 60, 280], [250, 250, 350, 50],
                ].map(([x1, y1, x2, y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.gold[400]} strokeWidth="0.35" opacity="0.18" strokeDasharray="4 8" />
                ))}

                {/* Primary faultline fracture */}
                <path d="M150 60 L190 150 L220 210 L240 240 L250 250 L260 280 L280 330 L310 400 L350 470" stroke={C.steel[300]} strokeWidth="2" fill="none" opacity="0.55" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M155 68 L195 158 L225 218 L245 248 L255 258 L265 288 L285 338 L315 408" stroke={C.gold[400]} strokeWidth="0.5" fill="none" opacity="0.2" strokeDasharray="3 6" />

                {/* Secondary cross-fracture */}
                <path d="M80 280 L160 270 L220 260 L250 250 L300 235 L380 210 L440 195" stroke={C.steel[500]} strokeWidth="1" fill="none" opacity="0.25" strokeLinecap="round" />

                {/* Domain nodes */}
                <circle cx="170" cy="120" r="7" fill={C.steel[500]} opacity="0.6" />
                <circle cx="170" cy="120" r="12" fill="none" stroke={C.steel[500]} strokeWidth="0.5" opacity="0.3" />
                <text x="188" y="124" fill={C.steel[300]} fontSize="10" fontFamily="Inter, sans-serif" opacity="0.55" letterSpacing="0.08em">ORBITAL</text>

                <circle cx="250" cy="250" r="7" fill={C.steel[400]} opacity="0.7" className="animate-gentle-pulse" style={{ transformOrigin: '250px 250px' }} />
                <circle cx="250" cy="250" r="14" fill="none" stroke={C.steel[300]} strokeWidth="0.6" opacity="0.4" />

                <circle cx="340" cy="380" r="7" fill={C.gold[400]} opacity="0.5" />
                <circle cx="340" cy="380" r="12" fill="none" stroke={C.gold[400]} strokeWidth="0.5" opacity="0.25" />
                <text x="310" y="408" fill={C.gold[400]} fontSize="10" fontFamily="Inter, sans-serif" opacity="0.45" letterSpacing="0.08em">CYBER</text>

                {/* Scatter nodes */}
                {([
                  { cx: 120, cy: 200, r: 2.5, fill: C.steel[500], opacity: 0.3 },
                  { cx: 200, cy: 170, r: 2, fill: C.steel[400], opacity: 0.25 },
                  { cx: 310, cy: 180, r: 2, fill: C.steel[500], opacity: 0.2 },
                  { cx: 370, cy: 260, r: 2.5, fill: C.gold[400], opacity: 0.25 },
                  { cx: 300, cy: 310, r: 2, fill: C.steel[400], opacity: 0.3 },
                  { cx: 180, cy: 320, r: 2, fill: C.gold[400], opacity: 0.2 },
                  { cx: 400, cy: 330, r: 1.5, fill: C.gold[400], opacity: 0.15 },
                  { cx: 140, cy: 280, r: 1.5, fill: C.steel[400], opacity: 0.2 },
                ] as const).map((n, i) => (
                  <circle key={i} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} opacity={n.opacity} />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/25 to-transparent" />
    </section>
  );
}
