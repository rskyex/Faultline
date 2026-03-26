export default function RevealsSection() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
            Analytical Framework
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-[-0.01em]">
            What the Platform Reveals
          </h2>
          <div className="mt-6 w-16 h-px bg-gradient-to-r from-steel-500/50 to-transparent" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {/* 01 */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-steel-500 text-xs font-medium tracking-[0.1em]">
                01
              </span>
              <div className="flex-1 h-px bg-steel-500/15" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-[-0.01em]">
              Cross-Domain Dependencies
            </h3>
            <p className="text-sm text-steel-400 leading-[1.75]">
              Orbital communication links underpin nuclear command-and-control.
              Cyber networks enable satellite operations. Energy grids sustain
              all three. Faultline maps these dependencies to show where
              disruption in one domain degrades capacity in another.
            </p>
          </div>

          {/* 02 */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-steel-400 text-xs font-medium tracking-[0.1em]">
                02
              </span>
              <div className="flex-1 h-px bg-steel-400/15" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-[-0.01em]">
              Escalation Transfer
            </h3>
            <p className="text-sm text-steel-400 leading-[1.75]">
              A cyber intrusion into early-warning systems can trigger nuclear
              miscalculation. Anti-satellite operations can sever the
              communications that prevent escalation. These are not
              hypotheticals&mdash;they are structural features of interconnected
              systems.
            </p>
          </div>

          {/* 03 */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-steel-300 text-xs font-medium tracking-[0.1em]">
                03
              </span>
              <div className="flex-1 h-px bg-steel-300/15" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-[-0.01em]">
              Shared Pressure Points
            </h3>
            <p className="text-sm text-steel-400 leading-[1.75]">
              Certain nodes&mdash;undersea cables, ground stations, enrichment
              facilities, critical data centers&mdash;sit at the intersection of
              multiple domains. Their compromise generates cascading effects that
              single-domain analysis cannot anticipate.
            </p>
          </div>

          {/* 04 */}
          <div>
            <div className="flex items-center gap-4 mb-5">
              <span className="text-gold-400 text-xs font-medium tracking-[0.1em]">
                04
              </span>
              <div className="flex-1 h-px bg-gold-400/15" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 tracking-[-0.01em]">
              Governance Fragmentation
            </h3>
            <p className="text-sm text-steel-400 leading-[1.75]">
              Space governance, nuclear diplomacy, and cyber norms operate in
              separate institutional tracks. This fragmentation leaves
              cross-domain risks&mdash;the most dangerous kind&mdash;systematically
              under-governed and poorly understood.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
