"use client";

import ScrollReveal from "./ScrollReveal";

export default function RevealsSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Topo background */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/topo-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      />
      <div className="absolute inset-0 bg-navy-950/75" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="mb-16 max-w-2xl">
            <p className="text-gold-300 text-xs font-medium tracking-[0.2em] uppercase mb-4">
              Analytical Framework
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-[-0.01em]">
              What the Platform Reveals
            </h2>
            <div className="mt-6 w-16 h-px bg-white/25" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal delay={0}>
            <div className="bg-white rounded-sm p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-steel-500 text-xs font-semibold tracking-[0.1em]">01</span>
                <div className="flex-1 h-px bg-navy-800/10" />
              </div>
              <h3 className="text-lg font-semibold text-navy-950 mb-3 tracking-[-0.01em]">
                Cross-Domain Dependencies
              </h3>
              <p className="text-sm text-navy-600 leading-[1.75]">
                Orbital communication links underpin nuclear command-and-control.
                Cyber networks enable satellite operations. Energy grids sustain
                all three. Faultline maps these dependencies to show where
                disruption in one domain degrades capacity in another.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="bg-white rounded-sm p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-steel-400 text-xs font-semibold tracking-[0.1em]">02</span>
                <div className="flex-1 h-px bg-navy-800/10" />
              </div>
              <h3 className="text-lg font-semibold text-navy-950 mb-3 tracking-[-0.01em]">
                Escalation Transfer
              </h3>
              <p className="text-sm text-navy-600 leading-[1.75]">
                A cyber intrusion into early-warning systems can trigger nuclear
                miscalculation. Anti-satellite operations can sever the
                communications that prevent escalation. These are not
                hypotheticals&mdash;they are structural features of interconnected
                systems.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="bg-white rounded-sm p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-steel-300 text-xs font-semibold tracking-[0.1em]">03</span>
                <div className="flex-1 h-px bg-navy-800/10" />
              </div>
              <h3 className="text-lg font-semibold text-navy-950 mb-3 tracking-[-0.01em]">
                Shared Pressure Points
              </h3>
              <p className="text-sm text-navy-600 leading-[1.75]">
                Certain nodes&mdash;undersea cables, ground stations, enrichment
                facilities, critical data centers&mdash;sit at the intersection of
                multiple domains. Their compromise generates cascading effects that
                single-domain analysis cannot anticipate.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="bg-white rounded-sm p-8 lg:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="text-gold-500 text-xs font-semibold tracking-[0.1em]">04</span>
                <div className="flex-1 h-px bg-navy-800/10" />
              </div>
              <h3 className="text-lg font-semibold text-navy-950 mb-3 tracking-[-0.01em]">
                Governance Fragmentation
              </h3>
              <p className="text-sm text-navy-600 leading-[1.75]">
                Space governance, nuclear diplomacy, and cyber norms operate in
                separate institutional tracks. This fragmentation leaves
                cross-domain risks&mdash;the most dangerous kind&mdash;systematically
                under-governed and poorly understood.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
