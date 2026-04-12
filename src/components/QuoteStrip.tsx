"use client";

import ScrollReveal from "./ScrollReveal";

export default function QuoteStrip() {
  return (
    <section className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      {/* Subtle accent glows */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 80% at 20% 50%, rgba(56,189,248,0.03) 0%, transparent 70%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 80% at 80% 50%, rgba(167,139,250,0.02) 0%, transparent 70%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-lg md:text-xl lg:text-[1.4rem] leading-[1.7] text-text-primary/70 italic">
              &ldquo;To understand escalation today, separate maps are not enough.
              Risk travels across orbital, nuclear, space governance, and cyber domains
              through pathways that no single framework can trace alone.&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-6 h-px bg-orbital-500/20" />
              <span className="text-text-secondary text-[10px] tracking-[0.2em] uppercase font-medium">
                Cross-Domain Imperative
              </span>
              <div className="w-6 h-px bg-orbital-500/20" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
