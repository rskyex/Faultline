export default function RevealsSection() {
  const reveals = [
    {
      number: "01",
      title: "Cross-Domain Dependencies",
      text: "Orbital communication links underpin nuclear command-and-control. Cyber networks enable satellite operations. Energy grids sustain all three. Faultline maps these dependencies to show where disruption in one domain degrades capacity in another.",
      accent: "#4a6fa5",
    },
    {
      number: "02",
      title: "Escalation Transfer",
      text: "A cyber intrusion into early-warning systems can trigger nuclear miscalculation. Anti-satellite operations can sever the communications that prevent escalation. These are not hypotheticals — they are structural features of interconnected systems.",
      accent: "#6b8fc0",
    },
    {
      number: "03",
      title: "Shared Pressure Points",
      text: "Certain nodes — undersea cables, ground stations, enrichment facilities, critical data centers — sit at the intersection of multiple domains. Their compromise generates cascading effects that single-domain analysis cannot anticipate.",
      accent: "#8eb0d8",
    },
    {
      number: "04",
      title: "Governance Fragmentation",
      text: "Space governance, nuclear diplomacy, and cyber norms operate in separate institutional tracks. This fragmentation leaves cross-domain risks — the most dangerous kind — systematically under-governed and poorly understood.",
      accent: "#d4a843",
    },
  ];

  return (
    <section className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20">
          <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Analytical Framework
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-lg">
            What the Platform Reveals
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {reveals.map((item) => (
            <div key={item.number} className="group">
              {/* Number + line */}
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="text-xs font-medium tracking-wider"
                  style={{ color: item.accent }}
                >
                  {item.number}
                </span>
                <div
                  className="flex-1 h-px"
                  style={{ backgroundColor: item.accent, opacity: 0.2 }}
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-steel-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
