"use client";

import Image from "next/image";
import { C } from "@/lib/colors";
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
              width={64}
              height={64}
              className="w-16 h-16"
              priority
            />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] text-white leading-none drop-shadow-lg">
              Faultline
            </h1>
          </div>

          <p className="text-white/80 text-sm md:text-base font-normal tracking-[0.25em] uppercase animate-fade-in-up animate-delay-100">
            Cross-Domain Strategic Infrastructure Mapping
          </p>

          <div className="w-20 h-px bg-white/30 animate-line-grow animate-delay-200" />

          <p className="text-xl md:text-2xl leading-[1.6] text-white/90 max-w-2xl font-serif-accent font-normal animate-fade-in-up animate-delay-300 drop-shadow-sm">
            Orbital, nuclear, and cyber systems do not fail in isolation.
            Faultline maps the dependencies, escalation pathways, and
            governance fractures that emerge across them.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up animate-delay-400">
            <a
              href="#domains"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/25 text-white text-sm font-medium tracking-[0.05em] hover:bg-white/20 hover:border-white/40 transition-all duration-300"
            >
              Explore the Domains
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#thesis"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white/70 text-sm font-medium tracking-[0.05em] hover:text-white transition-colors duration-300"
            >
              Why Cross-Domain Analysis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
