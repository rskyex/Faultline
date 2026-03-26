"use client";

import FaultlineLogo from "./FaultlineLogo";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7 space-y-8">
            {/* Logo + brand */}
            <div className="flex items-center gap-4">
              <FaultlineLogo size={56} />
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-none">
                  Faultline
                </h1>
              </div>
            </div>

            {/* Descriptor */}
            <p className="text-steel-400 text-lg md:text-xl font-light tracking-wide uppercase">
              Cross-Domain Strategic Infrastructure Mapping
            </p>

            {/* Thesis */}
            <p className="text-xl md:text-2xl leading-relaxed text-slate-200 max-w-2xl text-balance">
              Orbital, nuclear, and cyber systems do not fail in isolation.
              Faultline maps the dependencies, escalation pathways, and
              governance fractures that emerge across them.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#domains"
                className="inline-flex items-center gap-2 px-6 py-3 bg-steel-500/20 border border-steel-500/40 text-white text-sm font-medium tracking-wide hover:bg-steel-500/30 hover:border-steel-400/60 transition-all duration-300"
              >
                Explore the Domains
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#thesis"
                className="inline-flex items-center gap-2 px-6 py-3 text-steel-300 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300"
              >
                Why Cross-Domain Analysis
              </a>
            </div>
          </div>

          {/* Right: Visual composition hint */}
          <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[480px]">
              {/* Convergence visual */}
              <svg
                viewBox="0 0 400 400"
                fill="none"
                className="w-full h-full"
              >
                <defs>
                  <radialGradient id="hero-glow" cx="0.5" cy="0.5" r="0.5">
                    <stop offset="0%" stopColor="#4a6fa5" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="180" fill="url(#hero-glow)" />

                {/* Orbital ring */}
                <ellipse
                  cx="200"
                  cy="200"
                  rx="160"
                  ry="60"
                  stroke="#4a6fa5"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.5"
                  transform="rotate(-20 200 200)"
                />
                <ellipse
                  cx="200"
                  cy="200"
                  rx="140"
                  ry="50"
                  stroke="#4a6fa5"
                  strokeWidth="0.3"
                  fill="none"
                  opacity="0.3"
                  transform="rotate(-20 200 200)"
                />

                {/* Nuclear concentric */}
                <circle
                  cx="200"
                  cy="200"
                  r="80"
                  stroke="#6b8fc0"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.3"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="50"
                  stroke="#6b8fc0"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.4"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="20"
                  stroke="#8eb0d8"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.5"
                />

                {/* Cyber network lines */}
                {[
                  [200, 200, 60, 80],
                  [200, 200, 340, 120],
                  [200, 200, 100, 320],
                  [200, 200, 320, 300],
                  [200, 200, 180, 40],
                  [200, 200, 360, 220],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#d4a843"
                    strokeWidth="0.4"
                    opacity="0.25"
                    strokeDasharray="4 6"
                  />
                ))}

                {/* Faultline fracture */}
                <path
                  d="M120 60 L160 140 L180 180 L200 200 L220 240 L250 300 L280 360"
                  stroke="#8eb0d8"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.6"
                  strokeLinecap="round"
                />
                <path
                  d="M130 70 L165 145 L185 185 L205 205 L225 245 L255 305"
                  stroke="#d4a843"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.3"
                  strokeDasharray="2 4"
                />

                {/* Domain nodes */}
                {/* Orbital */}
                <circle
                  cx="140"
                  cy="100"
                  r="6"
                  fill="#4a6fa5"
                  opacity="0.7"
                />
                <text
                  x="155"
                  y="104"
                  fill="#8eb0d8"
                  fontSize="9"
                  fontFamily="Inter, sans-serif"
                  opacity="0.6"
                >
                  ORBITAL
                </text>

                {/* Nuclear */}
                <circle
                  cx="200"
                  cy="200"
                  r="6"
                  fill="#6b8fc0"
                  opacity="0.8"
                />

                {/* Cyber */}
                <circle
                  cx="270"
                  cy="310"
                  r="6"
                  fill="#d4a843"
                  opacity="0.6"
                />
                <text
                  x="240"
                  y="335"
                  fill="#d4a843"
                  fontSize="9"
                  fontFamily="Inter, sans-serif"
                  opacity="0.5"
                >
                  CYBER
                </text>

                {/* Topo contour hints */}
                <path
                  d="M60 200 Q130 170 200 200 Q270 230 340 200"
                  stroke="#4a6fa5"
                  strokeWidth="0.3"
                  fill="none"
                  opacity="0.2"
                />
                <path
                  d="M80 230 Q150 200 220 230 Q290 260 360 230"
                  stroke="#4a6fa5"
                  strokeWidth="0.3"
                  fill="none"
                  opacity="0.15"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/30 to-transparent" />
    </section>
  );
}
