"use client";

import ScrollReveal from "./ScrollReveal";

const reveals = [
  {
    num: "01",
    numColor: "text-orbital-500",
    title: "Cross-Domain Dependencies",
    text: "Do orbital communication links, cyber networks and energy grids depend on one another closely enough that disruption in one domain degrades capacity in another? The four datasets each record one domain; the cross-domain layer maps where their records name the same incident, intrusion set, state or infrastructure category.",
    borderColor: "border-orbital-500/20",
  },
  {
    num: "02",
    numColor: "text-nuclear-500",
    title: "Escalation Transfer",
    text: "Could a cyber intrusion into early-warning systems, or an anti-satellite strike on the communications that prevent escalation, push a crisis towards nuclear miscalculation? This is an argument from how the systems are coupled, not a finding from the data: the datasets have no field that records escalation passing from one domain to another.",
    borderColor: "border-nuclear-500/20",
  },
  {
    num: "03",
    numColor: "text-space-500",
    title: "Governance Authority Concentration",
    text: "The Lunar Governance Tracker argues that the competing frameworks, the Artemis Accords and the ILRS, use universalist language while concentrating interpretive power, and it codes the discretion points in their documents where that power sits. Whether those discretion points shape strategic posture is the question it puts to the record.",
    borderColor: "border-space-500/20",
  },
  {
    num: "04",
    numColor: "text-cyber-500",
    title: "Shared Pressure Points",
    text: "Which nodes sit at the intersection of several domains? Undersea cables, ground stations, enrichment facilities and data centres are candidates, and single-domain analysis would miss cascading effects through them. None of the four datasets records them as shared nodes yet, so this is a question for future coding, not something the layer can show.",
    borderColor: "border-cyber-500/20",
  },
];

export default function RevealsSection() {
  return (
    <section id="framework" className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3 text-orbital-500">
              Analytical Framework
            </p>
            <h2 className="wordmark text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
              Questions the Platform Asks
            </h2>
            <div className="mt-5 w-12 h-px bg-white/8" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reveals.map((r, i) => (
            <ScrollReveal key={r.num} delay={i * 80}>
              <div className={`bg-elevated border border-white/6 p-6 lg:p-8 h-full`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`font-mono-data font-medium ${r.numColor}`}>{r.num}</span>
                  <div className={`flex-1 h-px ${r.borderColor}`} />
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-3">{r.title}</h3>
                <p className="text-[13px] text-text-secondary leading-[1.75]">{r.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
