"use client";

import Image from "next/image";
import HeroBackground from "./HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-20 lg:py-32">
        <div className="max-w-3xl space-y-7">
          <div className="flex items-center gap-5 animate-fade-in-up">
            <Image
              src="/images/logo.png"
              alt="Faultline"
              width={72}
              height={72}
              className="w-[72px] h-[72px]"
              priority
            />
            <h1 className="wordmark text-5xl md:text-6xl lg:text-8xl text-white leading-none drop-shadow-lg">
              Faultline
            </h1>
          </div>

          <p className="text-white text-lg md:text-xl font-medium tracking-[0.15em] uppercase animate-fade-in-up animate-delay-100">
            Cross-Domain Strategic Infrastructure Mapping
          </p>

          <div className="w-24 h-[2px] bg-white/50 animate-line-grow animate-delay-200" />

          <p className="text-xl md:text-2xl leading-[1.6] text-white/90 max-w-2xl font-serif-accent font-normal animate-fade-in-up animate-delay-300 drop-shadow-sm">
            Orbital, nuclear, and cyber systems do not fail in isolation.
            Faultline maps the dependencies, escalation pathways, and
            governance fractures that emerge across them.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up animate-delay-400">
            <a
              href="#domains"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-950 text-sm font-semibold tracking-[0.03em] hover:bg-white/90 transition-all duration-300 shadow-lg"
            >
              Explore the Domains
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#thesis"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-sm font-semibold tracking-[0.03em] border-2 border-white/40 hover:border-white/70 hover:bg-white/10 transition-all duration-300"
            >
              Why Cross-Domain Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
