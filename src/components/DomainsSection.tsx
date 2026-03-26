export default function DomainsSection() {
  const domains = [
    {
      name: "Orbital Risk Tracker",
      slug: "Orbital",
      url: "https://orbitalrisktracker.vercel.app/",
      description:
        "Mapping satellite constellations, orbital debris fields, and the strategic vulnerabilities of space-based infrastructure. Tracks risks from congestion, weaponization, and governance gaps in the orbital commons.",
      accent: "#4a6fa5",
      accentLight: "#8eb0d8",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
          <ellipse
            cx="24"
            cy="24"
            rx="20"
            ry="8"
            stroke="#4a6fa5"
            strokeWidth="1"
            transform="rotate(-25 24 24)"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="20"
            ry="8"
            stroke="#6b8fc0"
            strokeWidth="0.5"
            transform="rotate(25 24 24)"
          />
          <circle cx="24" cy="24" r="3" fill="#8eb0d8" />
          <circle
            cx="24"
            cy="24"
            r="10"
            stroke="#4a6fa5"
            strokeWidth="0.5"
            strokeDasharray="2 3"
          />
        </svg>
      ),
    },
    {
      name: "Global Nuclear Infrastructure Atlas",
      slug: "Nuclear",
      url: "https://globalnuclearinfrastructureatlas.vercel.app/",
      description:
        "A geospatial atlas of global nuclear facilities, enrichment sites, reactor networks, and strategic posture. Visualizes the physical and political topology of nuclear infrastructure worldwide.",
      accent: "#6b8fc0",
      accentLight: "#c8d6e5",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="#6b8fc0"
            strokeWidth="0.5"
          />
          <circle
            cx="24"
            cy="24"
            r="12"
            stroke="#8eb0d8"
            strokeWidth="0.8"
          />
          <circle
            cx="24"
            cy="24"
            r="6"
            stroke="#c8d6e5"
            strokeWidth="1"
          />
          <circle cx="24" cy="24" r="2" fill="#c8d6e5" />
          {/* Radiation-style lines */}
          <line
            x1="24"
            y1="6"
            x2="24"
            y2="18"
            stroke="#6b8fc0"
            strokeWidth="0.5"
          />
          <line
            x1="24"
            y1="30"
            x2="24"
            y2="42"
            stroke="#6b8fc0"
            strokeWidth="0.5"
          />
          <line
            x1="8"
            y1="16"
            x2="18"
            y2="22"
            stroke="#6b8fc0"
            strokeWidth="0.5"
          />
          <line
            x1="30"
            y1="26"
            x2="40"
            y2="32"
            stroke="#6b8fc0"
            strokeWidth="0.5"
          />
        </svg>
      ),
    },
    {
      name: "Cyber Escalation Atlas",
      slug: "Cyber",
      url: "https://cyber-escalation-atlas-5yp5.vercel.app/",
      description:
        "Charting cyber operations, escalation dynamics, and the evolving attack surfaces of critical infrastructure. Maps the pathways through which digital disruption cascades into strategic consequence.",
      accent: "#d4a843",
      accentLight: "#e0be6a",
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
          {/* Network nodes */}
          <circle cx="24" cy="12" r="3" fill="#d4a843" opacity="0.8" />
          <circle cx="10" cy="32" r="3" fill="#d4a843" opacity="0.6" />
          <circle cx="38" cy="32" r="3" fill="#d4a843" opacity="0.6" />
          <circle cx="24" cy="38" r="2" fill="#e0be6a" opacity="0.4" />
          <circle cx="14" cy="18" r="2" fill="#e0be6a" opacity="0.4" />
          <circle cx="34" cy="18" r="2" fill="#e0be6a" opacity="0.4" />
          {/* Connecting lines */}
          <line
            x1="24"
            y1="12"
            x2="10"
            y2="32"
            stroke="#d4a843"
            strokeWidth="0.6"
            opacity="0.5"
          />
          <line
            x1="24"
            y1="12"
            x2="38"
            y2="32"
            stroke="#d4a843"
            strokeWidth="0.6"
            opacity="0.5"
          />
          <line
            x1="10"
            y1="32"
            x2="38"
            y2="32"
            stroke="#d4a843"
            strokeWidth="0.6"
            opacity="0.5"
          />
          <line
            x1="14"
            y1="18"
            x2="34"
            y2="18"
            stroke="#e0be6a"
            strokeWidth="0.4"
            opacity="0.3"
            strokeDasharray="2 2"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="domains" className="relative py-28 lg:py-36 bg-navy-900/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20">
          <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Three Connected Domains
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-xl">
            Enter the Strategic Layers
          </h2>
          <p className="mt-6 text-steel-400 text-base max-w-2xl leading-relaxed">
            Each platform maps one domain of critical infrastructure in depth.
            Together, they form the analytical foundation upon which Faultline
            reveals cross-domain dependencies and systemic risk.
          </p>
        </div>

        {/* Domain panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-steel-500/10">
          {domains.map((domain) => (
            <div
              key={domain.slug}
              className="group relative bg-navy-950 p-8 lg:p-10 flex flex-col"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ backgroundColor: domain.accent, opacity: 0.3 }}
              />

              {/* Icon */}
              <div className="mb-6">{domain.icon}</div>

              {/* Domain label */}
              <p
                className="text-xs font-medium tracking-[0.15em] uppercase mb-2"
                style={{ color: domain.accentLight }}
              >
                {domain.slug}
              </p>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white mb-4 leading-snug">
                {domain.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-steel-400 leading-relaxed mb-8 flex-1">
                {domain.description}
              </p>

              {/* Link */}
              <a
                href={domain.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 group-hover:translate-x-1 transform transition-transform"
                style={{ color: domain.accentLight }}
              >
                Enter Platform
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 7h12M8 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
