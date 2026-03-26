"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <p className="text-xs font-medium tracking-[0.2em] uppercase mb-4" style={{ color: C.gold[500] }}>
                  About the Platform
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight tracking-[-0.01em]">
                  What Faultline Is
                </h2>
                <div className="mt-6 w-16 h-px bg-navy-800/20" />
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="hidden lg:block mt-12">
                  <svg viewBox="0 0 280 240" fill="none" className="w-72" aria-hidden="true">
                    {/* Background */}
                    <rect x="10" y="10" width="260" height="220" rx="4" fill={C.navy[950]} fillOpacity="0.04" />

                    {/* Domain nodes — larger, filled */}
                    <circle cx="140" cy="40" r="14" fill={C.steel[500]} fillOpacity="0.12" stroke={C.steel[500]} strokeWidth="1.5" />
                    <circle cx="50" cy="195" r="14" fill={C.steel[400]} fillOpacity="0.12" stroke={C.steel[400]} strokeWidth="1.5" />
                    <circle cx="230" cy="195" r="14" fill={C.gold[400]} fillOpacity="0.12" stroke={C.gold[400]} strokeWidth="1.5" />

                    {/* Inner dots */}
                    <circle cx="140" cy="40" r="4" fill={C.steel[500]} />
                    <circle cx="50" cy="195" r="4" fill={C.steel[400]} />
                    <circle cx="230" cy="195" r="4" fill={C.gold[400]} />

                    {/* Connecting lines */}
                    <line x1="140" y1="54" x2="50" y2="181" stroke={C.steel[500]} strokeWidth="1.5" opacity="0.35" strokeDasharray="6 4" />
                    <line x1="140" y1="54" x2="230" y2="181" stroke={C.steel[400]} strokeWidth="1.5" opacity="0.35" strokeDasharray="6 4" />
                    <line x1="64" y1="195" x2="216" y2="195" stroke={C.gold[400]} strokeWidth="1.5" opacity="0.3" strokeDasharray="6 4" />

                    {/* Center convergence */}
                    <circle cx="140" cy="135" r="10" fill="none" stroke={C.navy[700]} strokeWidth="1.5" opacity="0.4" />
                    <circle cx="140" cy="135" r="4" fill={C.navy[700]} opacity="0.5" />

                    {/* Labels */}
                    <text x="140" y="18" textAnchor="middle" fill={C.navy[800]} fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.1em">ORBITAL</text>
                    <text x="50" y="222" textAnchor="middle" fill={C.navy[800]} fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.1em">NUCLEAR</text>
                    <text x="230" y="222" textAnchor="middle" fill={C.navy[800]} fontSize="11" fontFamily="DM Sans, sans-serif" fontWeight="600" letterSpacing="0.1em">CYBER</text>
                  </svg>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-xl leading-[1.7] text-navy-900 font-serif-accent">
                Faultline is a connective research interface linking three
                domain-specific platforms: orbital infrastructure, nuclear
                infrastructure, and cyber escalation. Its purpose is not only to
                display separate systems, but to reveal the structural fault lines
                that form between them.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-base leading-relaxed text-navy-700">
                Each platform maps one domain in depth. Faultline provides the
                connective layer&mdash;identifying where dependencies accumulate,
                where escalation pathways cross boundaries, and where governance
                structures remain fragmented across sectors that are increasingly
                coupled in practice.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
                <div className="border-t-2 border-navy-800/15 pt-5">
                  <p className="text-navy-800 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">Orbital</p>
                  <p className="text-sm text-navy-600 leading-relaxed">Space systems, satellite infrastructure, and orbital risk dynamics</p>
                </div>
                <div className="border-t-2 border-navy-800/15 pt-5">
                  <p className="text-navy-800 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">Nuclear</p>
                  <p className="text-sm text-navy-600 leading-relaxed">Global nuclear infrastructure, facilities, and strategic posture</p>
                </div>
                <div className="border-t-2 border-gold-500/30 pt-5">
                  <p className="text-xs font-medium tracking-[0.15em] uppercase mb-2.5" style={{ color: C.gold[500] }}>Cyber</p>
                  <p className="text-sm text-navy-600 leading-relaxed">Cyber operations, escalation patterns, and attack surface mapping</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
