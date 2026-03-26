"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function QuoteStrip() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Systems-dark background image */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/systems-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      {/* Darkening overlay for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${C.navy[950]}dd 0%, ${C.navy[950]}aa 50%, ${C.navy[950]}dd 100%)`,
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6" aria-hidden="true">
              <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                <path d="M0 10 L14 2 L14 18 Z" fill={C.steel[500]} opacity="0.3" />
                <path d="M32 10 L18 2 L18 18 Z" fill={C.gold[400]} opacity="0.2" />
              </svg>
            </div>

            <blockquote className="text-xl md:text-2xl lg:text-[1.7rem] leading-[1.65] text-white/90 font-serif-accent text-balance">
              To understand escalation today, separate maps are not enough.
              Risk travels across orbital, nuclear, and cyber domains
              through pathways that no single framework can trace alone.
            </blockquote>

            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-8 h-px bg-steel-400/40" />
              <span className="text-steel-300/60 text-xs tracking-[0.15em] uppercase">
                Cross-Domain Imperative
              </span>
              <div className="w-8 h-px bg-steel-400/40" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
