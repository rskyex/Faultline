"use client";

import ScrollReveal from "./ScrollReveal";

const reveals = [
  {
    num: "01",
    numColor: "text-orbital-500",
    title: "Cross-Domain Dependencies",
    text: "Orbital communication links underpin nuclear command-and-control. Cyber networks enable satellite operations. Energy grids sustain all four. Faultline maps these dependencies to show where disruption in one domain degrades capacity in another.",
    borderColor: "border-orbital-500/20",
  },
  {
    num: "02",
    numColor: "text-nuclear-500",
    title: "Escalation Transfer",
    text: "A cyber intrusion into early-warning systems can trigger nuclear miscalculation. Anti-satellite operations can sever the communications that prevent escalation. These are not hypotheticals\u2014they are structural features of interconnected systems.",
    borderColor: "border-nuclear-500/20",
  },
  {
    num: "03",
    numColor: "text-space-500",
    title: "Governance Authority Concentration",
    text: "Competing lunar governance frameworks\u2014the Artemis Accords and the ILRS\u2014deploy universalist language while concentrating interpretive power. Discretion points in governance documents create authority vacuums that shape strategic posture.",
    borderColor: "border-space-500/20",
  },
  {
    num: "04",
    numColor: "text-cyber-500",
    title: "Shared Pressure Points",
    text: "Certain nodes\u2014undersea cables, ground stations, enrichment facilities, critical data centers\u2014sit at the intersection of multiple domains. Their compromise generates cascading effects that single-domain analysis cannot anticipate.",
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
              What the Platform Reveals
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
                <p className="text-[13px] text-text-muted leading-[1.75]">{r.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
