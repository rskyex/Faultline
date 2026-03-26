import FaultlineLogo from "./FaultlineLogo";

export default function CTASection() {
  const platforms = [
    {
      name: "Orbital Risk Tracker",
      url: "https://orbitalrisktracker.vercel.app/",
      label: "Orbital",
      accent: "#4a6fa5",
    },
    {
      name: "Global Nuclear Infrastructure Atlas",
      url: "https://globalnuclearinfrastructureatlas.vercel.app/",
      label: "Nuclear",
      accent: "#6b8fc0",
    },
    {
      name: "Cyber Escalation Atlas",
      url: "https://cyber-escalation-atlas-5yp5.vercel.app/",
      label: "Cyber",
      accent: "#d4a843",
    },
  ];

  return (
    <section className="relative py-28 lg:py-40 bg-navy-900/30 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="cta-grid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#6b8fc0"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <FaultlineLogo size={48} className="mx-auto mb-8" />

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight mb-6">
          Enter the Domains
        </h2>
        <p className="text-lg text-steel-400 max-w-xl mx-auto mb-16 leading-relaxed">
          Trace the connections. Read the fault lines. From mapped systems to
          cross-domain strategic clarity.
        </p>

        {/* Platform links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {platforms.map((p) => (
            <a
              key={p.label}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 px-8 py-6 border border-steel-500/20 hover:border-steel-500/40 bg-navy-950/50 transition-all duration-300"
            >
              <span
                className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300 opacity-40 group-hover:opacity-70"
                style={{ backgroundColor: p.accent }}
              />
              <span
                className="text-xs font-medium tracking-[0.15em] uppercase"
                style={{ color: p.accent }}
              >
                {p.label}
              </span>
              <span className="text-white text-sm font-medium">{p.name}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="mt-1 opacity-40 group-hover:opacity-80 transition-opacity"
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
          ))}
        </div>
      </div>
    </section>
  );
}
