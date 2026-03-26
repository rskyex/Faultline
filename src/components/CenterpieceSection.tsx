"use client";

export default function CenterpieceSection() {
  return (
    <section className="relative py-28 lg:py-40 bg-navy-900/30 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="cp-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#6b8fc0"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cp-grid)" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Systems Convergence
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            Mapping the Fault Lines
          </h2>
          <p className="mt-4 text-steel-400 text-base max-w-xl mx-auto">
            Where orbital, nuclear, and cyber infrastructures intersect,
            strategic vulnerabilities accumulate.
          </p>
        </div>

        {/* Central visual */}
        <div className="relative flex justify-center">
          <svg
            viewBox="0 0 900 600"
            fill="none"
            className="w-full max-w-[900px]"
          >
            <defs>
              <radialGradient id="cp-glow" cx="0.5" cy="0.5" r="0.45">
                <stop offset="0%" stopColor="#4a6fa5" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="cp-center" cx="0.5" cy="0.5" r="0.15">
                <stop offset="0%" stopColor="#8eb0d8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0a0e1a" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background glow */}
            <circle cx="450" cy="300" r="280" fill="url(#cp-glow)" />
            <circle cx="450" cy="300" r="100" fill="url(#cp-center)" />

            {/* Concentric pressure rings */}
            {[240, 200, 160, 120, 80, 40].map((r, i) => (
              <circle
                key={`ring-${i}`}
                cx="450"
                cy="300"
                r={r}
                stroke="#4a6fa5"
                strokeWidth={i < 2 ? "0.3" : "0.5"}
                fill="none"
                opacity={0.1 + i * 0.04}
                strokeDasharray={i % 2 === 0 ? "none" : "4 6"}
              />
            ))}

            {/* Domain zones — three triangulated regions */}
            {/* Orbital zone — top */}
            <path
              d="M450 60 L350 200 L550 200 Z"
              stroke="#4a6fa5"
              strokeWidth="0.6"
              fill="#4a6fa5"
              fillOpacity="0.03"
            />
            <text
              x="450"
              y="110"
              textAnchor="middle"
              fill="#4a6fa5"
              fontSize="11"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.1em"
              opacity="0.6"
            >
              ORBITAL
            </text>

            {/* Nuclear zone — bottom left */}
            <path
              d="M200 500 L300 360 L150 340 Z"
              stroke="#6b8fc0"
              strokeWidth="0.6"
              fill="#6b8fc0"
              fillOpacity="0.03"
            />
            <text
              x="210"
              y="480"
              textAnchor="middle"
              fill="#6b8fc0"
              fontSize="11"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.1em"
              opacity="0.6"
            >
              NUCLEAR
            </text>

            {/* Cyber zone — bottom right */}
            <path
              d="M700 500 L600 360 L750 340 Z"
              stroke="#d4a843"
              strokeWidth="0.6"
              fill="#d4a843"
              fillOpacity="0.03"
            />
            <text
              x="690"
              y="480"
              textAnchor="middle"
              fill="#d4a843"
              fontSize="11"
              fontFamily="Inter, sans-serif"
              letterSpacing="0.1em"
              opacity="0.6"
            >
              CYBER
            </text>

            {/* Convergence lines — toward center */}
            {/* From orbital */}
            <line x1="450" y1="130" x2="450" y2="280" stroke="#4a6fa5" strokeWidth="1" opacity="0.3" />
            {/* From nuclear */}
            <line x1="230" y1="450" x2="420" y2="310" stroke="#6b8fc0" strokeWidth="1" opacity="0.3" />
            {/* From cyber */}
            <line x1="680" y1="450" x2="480" y2="310" stroke="#d4a843" strokeWidth="1" opacity="0.3" />

            {/* Cross-domain dependency arcs */}
            <path
              d="M360 190 Q280 280 250 380"
              stroke="#8eb0d8"
              strokeWidth="0.8"
              fill="none"
              opacity="0.25"
              strokeDasharray="6 4"
            />
            <path
              d="M540 190 Q620 280 650 380"
              stroke="#e0be6a"
              strokeWidth="0.8"
              fill="none"
              opacity="0.2"
              strokeDasharray="6 4"
            />
            <path
              d="M280 440 Q450 420 630 440"
              stroke="#6b8fc0"
              strokeWidth="0.8"
              fill="none"
              opacity="0.2"
              strokeDasharray="6 4"
            />

            {/* Faultline fractures */}
            <path
              d="M320 100 L370 180 L400 240 L430 280 L450 300 L470 330 L500 380 L540 460 L580 540"
              stroke="#8eb0d8"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
              strokeLinecap="round"
            />
            <path
              d="M325 105 L375 185 L405 245 L435 285 L455 305 L475 335 L505 385 L545 465"
              stroke="#d4a843"
              strokeWidth="0.6"
              fill="none"
              opacity="0.2"
              strokeDasharray="3 5"
            />

            {/* Secondary fracture */}
            <path
              d="M150 250 L250 270 L350 290 L450 300 L550 290 L650 270 L750 250"
              stroke="#4a6fa5"
              strokeWidth="1"
              fill="none"
              opacity="0.2"
              strokeLinecap="round"
            />

            {/* Node clusters */}
            {/* Orbital nodes */}
            {[
              [410, 150, 4],
              [490, 160, 3],
              [440, 180, 3],
              [470, 140, 2],
            ].map(([cx, cy, r], i) => (
              <circle
                key={`on-${i}`}
                cx={cx}
                cy={cy}
                r={r}
                fill="#4a6fa5"
                opacity={0.5 - i * 0.1}
              />
            ))}

            {/* Nuclear nodes */}
            {[
              [260, 400, 4],
              [220, 370, 3],
              [300, 380, 3],
              [250, 420, 2],
            ].map(([cx, cy, r], i) => (
              <circle
                key={`nn-${i}`}
                cx={cx}
                cy={cy}
                r={r}
                fill="#6b8fc0"
                opacity={0.5 - i * 0.1}
              />
            ))}

            {/* Cyber nodes */}
            {[
              [640, 400, 4],
              [680, 370, 3],
              [610, 380, 3],
              [660, 420, 2],
            ].map(([cx, cy, r], i) => (
              <circle
                key={`cn-${i}`}
                cx={cx}
                cy={cy}
                r={r}
                fill="#d4a843"
                opacity={0.4 - i * 0.08}
              />
            ))}

            {/* Central convergence node */}
            <circle
              cx="450"
              cy="300"
              r="12"
              fill="none"
              stroke="#8eb0d8"
              strokeWidth="1.5"
              opacity="0.6"
            />
            <circle cx="450" cy="300" r="4" fill="#8eb0d8" opacity="0.7" />

            {/* Labels along fault lines */}
            <text
              x="370"
              y="260"
              fill="#8eb0d8"
              fontSize="8"
              fontFamily="Inter, sans-serif"
              opacity="0.45"
              transform="rotate(-50 370 260)"
            >
              ESCALATION PATHWAY
            </text>
            <text
              x="340"
              y="340"
              fill="#6b8fc0"
              fontSize="8"
              fontFamily="Inter, sans-serif"
              opacity="0.4"
            >
              DEPENDENCIES
            </text>
            <text
              x="500"
              y="340"
              fill="#d4a843"
              fontSize="8"
              fontFamily="Inter, sans-serif"
              opacity="0.35"
            >
              GOVERNANCE GAPS
            </text>
            <text
              x="410"
              y="395"
              fill="#8eb0d8"
              fontSize="8"
              fontFamily="Inter, sans-serif"
              opacity="0.35"
            >
              INFRASTRUCTURAL COUPLING
            </text>

            {/* Topographic contour hints */}
            {[0, 1, 2, 3, 4].map((i) => (
              <ellipse
                key={`topo-${i}`}
                cx={450}
                cy={300}
                rx={60 + i * 40}
                ry={20 + i * 15}
                stroke="#4a6fa5"
                strokeWidth="0.3"
                fill="none"
                opacity={0.08 - i * 0.01}
                transform={`rotate(${-15 + i * 5} 450 300)`}
              />
            ))}
          </svg>
        </div>

        {/* Caption */}
        <p className="text-center text-steel-400/60 text-xs mt-8 tracking-wide">
          Schematic representation of cross-domain convergence zones and
          structural fault lines
        </p>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
