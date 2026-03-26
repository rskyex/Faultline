"use client";

import FaultlineLogo from "./FaultlineLogo";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="relative py-32 lg:py-44 bg-navy-900/30 overflow-hidden">
      {/* Background stress lines */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1600 600">
          <line x1="0" y1="300" x2="1600" y2="280" stroke="#4a6fa5" strokeWidth="0.8" />
          <line x1="300" y1="0" x2="700" y2="600" stroke="#8eb0d8" strokeWidth="0.5" />
          <line x1="900" y1="0" x2="1100" y2="600" stroke="#d4a843" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <ScrollReveal>
          <FaultlineLogo size={52} className="mx-auto mb-10" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight tracking-[-0.02em] mb-6">
            Enter the Domains
          </h2>

          <p className="text-lg text-steel-400 max-w-md mx-auto mb-4 leading-relaxed font-serif-accent">
            Trace the connections. Read the fault lines.
          </p>
          <p className="text-sm text-steel-400/60 max-w-lg mx-auto mb-16">
            From mapped systems to cross-domain strategic clarity.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <a
              href="https://orbitalrisktracker.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 px-8 py-7 border border-steel-500/15 hover:border-steel-500/35 bg-navy-950/60 transition-all duration-400 hover-lift"
            >
              <span className="absolute top-0 left-0 right-0 h-px bg-steel-500/30 group-hover:bg-steel-400/60 transition-all duration-500" />
              <span className="text-steel-300 text-xs font-medium tracking-[0.2em] uppercase">Orbital</span>
              <span className="text-white text-sm font-medium">Orbital Risk Tracker</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 opacity-30 group-hover:opacity-70 transition-opacity duration-300">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://globalnuclearinfrastructureatlas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 px-8 py-7 border border-steel-500/15 hover:border-steel-400/35 bg-navy-950/60 transition-all duration-400 hover-lift"
            >
              <span className="absolute top-0 left-0 right-0 h-px bg-steel-400/30 group-hover:bg-steel-300/60 transition-all duration-500" />
              <span className="text-steel-300 text-xs font-medium tracking-[0.2em] uppercase">Nuclear</span>
              <span className="text-white text-sm font-medium">Nuclear Infrastructure Atlas</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 opacity-30 group-hover:opacity-70 transition-opacity duration-300">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="https://cyber-escalation-atlas-5yp5.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-3 px-8 py-7 border border-gold-400/12 hover:border-gold-400/30 bg-navy-950/60 transition-all duration-400 hover-lift"
            >
              <span className="absolute top-0 left-0 right-0 h-px bg-gold-400/25 group-hover:bg-gold-400/50 transition-all duration-500" />
              <span className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase">Cyber</span>
              <span className="text-white text-sm font-medium">Cyber Escalation Atlas</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-1 opacity-30 group-hover:opacity-70 transition-opacity duration-300">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
