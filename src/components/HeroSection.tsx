"use client";

import FaultlineLogo from "./FaultlineLogo";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-7">
            {/* Logo + brand */}
            <div className="flex items-center gap-5 animate-fade-in-up">
              <FaultlineLogo size={64} />
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-white leading-none text-premium">
                Faultline
              </h1>
            </div>

            {/* Descriptor */}
            <p className="text-steel-400 text-sm md:text-base font-normal tracking-[0.25em] uppercase animate-fade-in-up animate-delay-100">
              Cross-Domain Strategic Infrastructure Mapping
            </p>

            {/* Divider */}
            <div className="w-20 h-px bg-gradient-to-r from-steel-500/60 to-transparent animate-line-grow animate-delay-200" />

            {/* Thesis */}
            <p className="text-xl md:text-2xl leading-[1.6] text-slate-200/90 max-w-2xl font-serif-accent font-normal animate-fade-in-up animate-delay-300">
              Orbital, nuclear, and cyber systems do not fail in isolation.
              Faultline maps the dependencies, escalation pathways, and
              governance fractures that emerge across them.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up animate-delay-400">
              <a
                href="#domains"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-steel-500/15 border border-steel-500/30 text-white text-sm font-medium tracking-[0.05em] hover:bg-steel-500/25 hover:border-steel-400/50 transition-all duration-300"
              >
                Explore the Domains
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
              >
                <defs>
                  <radialGradient id="hero-glow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#4a6fa5" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="hero-center" cx="0.5" cy="0.5" r="0.12">
                    <stop offset="0%" stopColor="#8eb0d8" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Background glow */}
                <circle cx="250" cy="250" r="230" fill="url(#hero-glow)" />
                <circle cx="250" cy="250" r="80" fill="url(#hero-center)" />

                {/* Topographic contours */}
                {[180, 150, 120, 90, 60].map((r, i) => (
                  <ellipse
                    key={`topo-${i}`}
                    cx={250}
                    cy={250}
                    rx={r}
                    ry={r * 0.65}
                    stroke="#4a6fa5"
                    strokeWidth="0.4"
                    fill="none"
                    opacity={0.08 + i * 0.03}
                    transform={`rotate(${-12 + i * 4} 250 250)`}
                  />
                ))}

                {/* Orbital ellipses */}
                <ellipse
                  cx="250" cy="250" rx="200" ry="70"
                  stroke="#4a6fa5" strokeWidth="0.6" fill="none" opacity="0.35"
                  transform="rotate(-22 250 250)"
                />
                <ellipse
                  cx="250" cy="250" rx="170" ry="55"
                  stroke="#4a6fa5" strokeWidth="0.35" fill="none" opacity="0.2"
                  transform="rotate(-22 250 250)"
                />
                <ellipse
                  cx="250" cy="250" rx="200" ry="70"
                  stroke="#6b8fc0" strokeWidth="0.4" fill="none" opacity="0.15"
                  transform="rotate(35 250 250)"
                />

                {/* Nuclear concentric rings */}
                {[100, 70, 40, 18].map((r, i) => (
                  <circle
                    key={`nuc-${i}`}
                    cx="250" cy="250" r={r}
                    stroke="#6b8fc0"
                    strokeWidth={0.4 + i * 0.15}
                    fill="none"
                    opacity={0.15 + i * 0.08}
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
                  <line
                    key={`net-${i}`}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="#d4a843" strokeWidth="0.35" opacity="0.18"
                    strokeDasharray="4 8"
                  />
                ))}

                {/* Primary faultline fracture */}
                <path
                  d="M150 60 L190 150 L220 210 L240 240 L250 250 L260 280 L280 330 L310 400 L350 470"
                  stroke="#8eb0d8" strokeWidth="2" fill="none" opacity="0.55"
                  strokeLinecap="round" strokeLinejoin="round"
                />
                {/* Shadow fracture */}
                <path
                  d="M155 68 L195 158 L225 218 L245 248 L255 258 L265 288 L285 338 L315 408"
                  stroke="#d4a843" strokeWidth="0.5" fill="none" opacity="0.2"
                  strokeDasharray="3 6"
                />

                {/* Secondary cross-fracture */}
                <path
                  d="M80 280 L160 270 L220 260 L250 250 L300 235 L380 210 L440 195"
                  stroke="#4a6fa5" strokeWidth="1" fill="none" opacity="0.25"
                  strokeLinecap="round"
                />

                {/* Domain indicator nodes */}
                {/* Orbital — top */}
                <circle cx="170" cy="120" r="7" fill="#4a6fa5" opacity="0.6" />
                <circle cx="170" cy="120" r="12" fill="none" stroke="#4a6fa5" strokeWidth="0.5" opacity="0.3" />
                <text x="188" y="124" fill="#8eb0d8" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.55" letterSpacing="0.08em">
                  ORBITAL
                </text>

                {/* Nuclear — center */}
                <circle cx="250" cy="250" r="7" fill="#6b8fc0" opacity="0.7" />
                <circle cx="250" cy="250" r="14" fill="none" stroke="#8eb0d8" strokeWidth="0.6" opacity="0.4" />

                {/* Cyber — bottom-right */}
                <circle cx="340" cy="380" r="7" fill="#d4a843" opacity="0.5" />
                <circle cx="340" cy="380" r="12" fill="none" stroke="#d4a843" strokeWidth="0.5" opacity="0.25" />
                <text x="310" y="408" fill="#d4a843" fontSize="10" fontFamily="Inter, sans-serif" opacity="0.45" letterSpacing="0.08em">
                  CYBER
                </text>

                {/* Scatter nodes — infrastructure points */}
                {[
                  [120, 200, 2.5, "#4a6fa5", 0.3],
                  [200, 170, 2, "#6b8fc0", 0.25],
                  [310, 180, 2, "#4a6fa5", 0.2],
                  [370, 260, 2.5, "#d4a843", 0.25],
                  [300, 310, 2, "#6b8fc0", 0.3],
                  [180, 320, 2, "#d4a843", 0.2],
                  [400, 330, 1.5, "#d4a843", 0.15],
                  [140, 280, 1.5, "#6b8fc0", 0.2],
                ].map(([cx, cy, r, fill, opacity], i) => (
                  <circle key={`scat-${i}`} cx={cx as number} cy={cy as number} r={r as number} fill={fill as string} opacity={opacity as number} />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/25 to-transparent" />
    </section>
  );
}
