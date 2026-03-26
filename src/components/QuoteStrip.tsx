"use client";

import ScrollReveal from "./ScrollReveal";

export default function QuoteStrip() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background visual accent — diagonal stress field */}
      <div className="absolute inset-0" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" preserveAspectRatio="none" viewBox="0 0 1600 400">
          {/* Tectonic stress lines */}
          {Array.from({ length: 20 }, (_, i) => (
            <line
              key={i}
              x1={i * 90 - 100}
              y1="0"
              x2={i * 90 + 200}
              y2="400"
              stroke="#4a6fa5"
              strokeWidth={i % 3 === 0 ? "1" : "0.4"}
            />
          ))}
        </svg>

        {/* Central glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]"
          style={{
            background: "radial-gradient(ellipse, rgba(74,111,165,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6" aria-hidden="true">
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <path d="M0 10 L14 2 L14 18 Z" fill="#4a6fa5" opacity="0.2" />
                <path d="M32 10 L18 2 L18 18 Z" fill="#d4a843" opacity="0.15" />
              </svg>
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-[1.7rem] leading-[1.65] text-slate-200/90 font-serif-accent text-balance">
              To understand escalation today, separate maps are not enough.
              Risk travels across orbital, nuclear, and cyber domains
              through pathways that no single framework can trace alone.
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-steel-500/30" />
              <span className="text-steel-400/50 text-xs tracking-[0.15em] uppercase">
                Cross-Domain Imperative
              </span>
              <div className="w-8 h-px bg-steel-500/30" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
