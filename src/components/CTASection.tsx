"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/systems-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      />
      <div className="absolute inset-0 bg-navy-950/65" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <ScrollReveal>
          <Image
            src="/images/logo.png"
            alt="Faultline"
            width={52}
            height={52}
            className="mx-auto mb-10 w-13 h-13"
          />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-[-0.02em] mb-6">
            Enter the Domains
          </h2>

          <p className="text-lg text-white/80 max-w-md mx-auto mb-4 leading-relaxed font-serif-accent">
            Trace the connections. Read the fault lines.
          </p>
          <p className="text-sm text-white/50 max-w-lg mx-auto mb-16">
            From mapped systems to cross-domain strategic clarity.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <a
              href="https://orbitalrisktracker.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 px-8 py-7 border border-white/15 hover:border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover-lift"
            >
              <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">Orbital</span>
              <span className="text-white text-sm font-medium">Orbital Risk Tracker</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://globalnuclearinfrastructureatlas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 px-8 py-7 border border-white/15 hover:border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover-lift"
            >
              <span className="text-white/70 text-xs font-medium tracking-[0.2em] uppercase">Nuclear</span>
              <span className="text-white text-sm font-medium">Nuclear Infrastructure Atlas</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://cyber-escalation-atlas-5yp5.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 px-8 py-7 border border-white/15 hover:border-white/30 bg-white/5 backdrop-blur-sm transition-all duration-300 hover-lift"
            >
              <span className="text-gold-300/80 text-xs font-medium tracking-[0.2em] uppercase">Cyber</span>
              <span className="text-white text-sm font-medium">Cyber Escalation Atlas</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="mt-1 opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
