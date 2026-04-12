"use client";

import Image from "next/image";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-20 lg:py-32">
        <div className="max-w-4xl space-y-8">
          {/* Logo + Title */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6 animate-fade-in-up">
            <Image
              src="/images/logo.png"
              alt="Faultline"
              width={72}
              height={72}
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px] opacity-80"
              priority
            />
            <h1 className="wordmark text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-text-primary leading-none">
              Faultline
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-text-secondary text-[11px] sm:text-[13px] md:text-[14px] font-medium tracking-[0.25em] uppercase animate-fade-in-up animate-delay-100">
            Cross-Domain Strategic Infrastructure Mapping
          </p>

          {/* Accent line */}
          <div className="flex items-center gap-3 animate-line-grow animate-delay-200">
            <div className="w-16 h-px bg-orbital-500/40" />
            <div className="w-2 h-px bg-nuclear-500/40" />
            <div className="w-2 h-px bg-space-500/40" />
            <div className="w-2 h-px bg-cyber-500/40" />
          </div>

          {/* Subtitle */}
          <p className="text-text-secondary text-sm md:text-base max-w-2xl leading-relaxed animate-fade-in-up animate-delay-200">
            Mapping the dependencies, escalation pathways, and governance fractures
            across orbital, nuclear, space governance, and cyber systems.
          </p>

          {/* Domain indicators */}
          <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up animate-delay-300">
            <span className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-orbital-500/70" />Orbital
            </span>
            <span className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-nuclear-500/70" />Nuclear
            </span>
            <span className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-space-500/70" />Space Governance
            </span>
            <span className="flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-500/70" />Cyber
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-4 animate-fade-in-up animate-delay-400">
            <a
              href="#domains"
              className="inline-flex items-center gap-3 px-6 py-3 bg-orbital-500/10 border border-orbital-500/25 text-orbital-400 text-[12px] font-medium tracking-[0.08em] uppercase hover:bg-orbital-500/15 hover:border-orbital-500/40 transition-all duration-300"
            >
              Explore the Domains
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#thesis"
              className="inline-flex items-center gap-2 px-6 py-3 text-text-secondary text-[12px] font-medium tracking-[0.08em] uppercase border border-white/8 hover:border-white/15 hover:text-text-primary transition-all duration-300"
            >
              Why Cross-Domain Analysis
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep to-transparent z-10" />
    </section>
  );
}
