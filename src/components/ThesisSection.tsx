export default function ThesisSection() {
  return (
    <section id="thesis" className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Visual support */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Structured diagram */}
              <svg
                viewBox="0 0 400 500"
                fill="none"
                className="w-full max-w-[400px]"
              >
                {/* Vertical axis */}
                <line
                  x1="200"
                  y1="40"
                  x2="200"
                  y2="460"
                  stroke="#4a6fa5"
                  strokeWidth="0.5"
                  opacity="0.3"
                />

                {/* Domain layers */}
                {/* Orbital layer */}
                <rect
                  x="60"
                  y="60"
                  width="280"
                  height="100"
                  fill="none"
                  stroke="#4a6fa5"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <text
                  x="80"
                  y="85"
                  fill="#4a6fa5"
                  fontSize="10"
                  fontFamily="Inter, sans-serif"
                  opacity="0.6"
                >
                  ORBITAL INFRASTRUCTURE
                </text>
                <circle cx="150" cy="120" r="4" fill="#4a6fa5" opacity="0.5" />
                <circle cx="220" cy="110" r="3" fill="#4a6fa5" opacity="0.4" />
                <circle cx="280" cy="130" r="3" fill="#4a6fa5" opacity="0.3" />
                <line
                  x1="150"
                  y1="120"
                  x2="220"
                  y2="110"
                  stroke="#4a6fa5"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
                <line
                  x1="220"
                  y1="110"
                  x2="280"
                  y2="130"
                  stroke="#4a6fa5"
                  strokeWidth="0.5"
                  opacity="0.3"
                />

                {/* Nuclear layer */}
                <rect
                  x="60"
                  y="200"
                  width="280"
                  height="100"
                  fill="none"
                  stroke="#6b8fc0"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <text
                  x="80"
                  y="225"
                  fill="#6b8fc0"
                  fontSize="10"
                  fontFamily="Inter, sans-serif"
                  opacity="0.6"
                >
                  NUCLEAR INFRASTRUCTURE
                </text>
                <circle cx="130" cy="260" r="5" fill="#6b8fc0" opacity="0.5" />
                <circle cx="240" cy="250" r="4" fill="#6b8fc0" opacity="0.4" />
                <circle cx="300" cy="270" r="3" fill="#6b8fc0" opacity="0.3" />

                {/* Cyber layer */}
                <rect
                  x="60"
                  y="340"
                  width="280"
                  height="100"
                  fill="none"
                  stroke="#d4a843"
                  strokeWidth="0.5"
                  opacity="0.2"
                />
                <text
                  x="80"
                  y="365"
                  fill="#d4a843"
                  fontSize="10"
                  fontFamily="Inter, sans-serif"
                  opacity="0.6"
                >
                  CYBER OPERATIONS
                </text>
                <circle cx="160" cy="400" r="4" fill="#d4a843" opacity="0.4" />
                <circle cx="250" cy="390" r="3" fill="#d4a843" opacity="0.3" />
                <circle cx="190" cy="410" r="3" fill="#d4a843" opacity="0.3" />

                {/* Cross-domain escalation paths */}
                <path
                  d="M150 124 C160 160 120 190 130 255"
                  stroke="#8eb0d8"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.4"
                  strokeDasharray="4 4"
                />
                <path
                  d="M240 254 C250 300 200 330 160 396"
                  stroke="#d4a843"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                  strokeDasharray="4 4"
                />
                <path
                  d="M280 134 C300 200 310 300 250 386"
                  stroke="#b8922f"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.25"
                  strokeDasharray="3 5"
                />

                {/* Faultline label at intersection */}
                <circle cx="200" cy="250" r="8" fill="none" stroke="#8eb0d8" strokeWidth="1" opacity="0.5" />
                <text
                  x="215"
                  y="254"
                  fill="#8eb0d8"
                  fontSize="8"
                  fontFamily="Inter, sans-serif"
                  opacity="0.5"
                >
                  FAULT LINE
                </text>
              </svg>
            </div>
          </div>

          {/* Right: Text */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
                Cross-Domain Thesis
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-lg">
                Why Siloed Analysis Is No Longer Sufficient
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-200">
                Strategic risk no longer remains neatly bounded by sector.
                Technical dependencies, political signaling, institutional
                fragmentation, and infrastructural coupling allow disruption to
                travel across domains.
              </p>

              <p className="text-base leading-relaxed text-steel-400">
                A disruption in orbital systems can degrade nuclear
                command-and-control. A cyber operation against energy grids can
                alter nuclear posture calculations. Misperception in one domain
                can trigger escalation in another. To understand these dynamics,
                separate maps are not enough.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  {
                    title: "Infrastructure interdependence creates risk spillover",
                    text: "Systems designed independently now share physical links, data pathways, and supply chains that transmit disruption.",
                  },
                  {
                    title: "Escalation travels through technical and political coupling",
                    text: "A failure or attack in one domain can reshape calculations and responses in others, often through indirect and poorly understood channels.",
                  },
                  {
                    title: "Governance institutions remain fragmented by sector",
                    text: "Regulatory and diplomatic frameworks still operate within domain silos, leaving cross-domain risks unaddressed.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="pl-4 border-l border-steel-500/30"
                  >
                    <p className="text-white text-sm font-medium mb-1">
                      {item.title}
                    </p>
                    <p className="text-steel-400 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
