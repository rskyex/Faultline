"use client";

import ScrollReveal from "./ScrollReveal";

export default function QuoteStrip() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Systems-dark background */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/topo-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl md:text-2xl lg:text-[1.7rem] leading-[1.65] text-white font-serif-accent text-balance">
              To understand escalation today, separate maps are not enough.
              Risk travels across orbital, nuclear, and cyber domains
              through pathways that no single framework can trace alone.
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-white/50 text-xs tracking-[0.15em] uppercase">
                Cross-Domain Imperative
              </span>
              <div className="w-8 h-px bg-white/30" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
