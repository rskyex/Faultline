"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative py-14 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Pull quote */}
        <ScrollReveal>
          <div className="mb-20 text-center">
            <blockquote className="text-lg md:text-xl leading-[1.7] text-text-secondary max-w-3xl mx-auto italic">
              &ldquo;Orbital, nuclear, space governance, and cyber systems do not fail
              in isolation. Faultline maps the dependencies, escalation pathways, and
              governance fractures that emerge across them.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-6 h-px bg-orbital-500/30" />
              <div className="w-1 h-1 rounded-full bg-orbital-500/40" />
              <div className="w-6 h-px bg-orbital-500/30" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <ScrollReveal>
                <p className="text-[11px] font-medium tracking-[0.25em] uppercase mb-3 text-orbital-500">
                  About the Platform
                </p>
                <h2 className="wordmark text-3xl md:text-4xl lg:text-5xl text-text-primary leading-tight">
                  What Faultline Is
                </h2>
                <div className="mt-5 w-12 h-px bg-white/10" />
              </ScrollReveal>

              {/* Diagram */}
              <ScrollReveal delay={200}>
                <div className="hidden lg:block mt-10">
                  <svg viewBox="0 0 280 280" fill="none" className="w-64" aria-hidden="true">
                    {/* Domain nodes */}
                    <circle cx="140" cy="40" r="12" fill={C.orbital[500]} fillOpacity="0.08" stroke={C.orbital[500]} strokeWidth="1" />
                    <circle cx="140" cy="40" r="3.5" fill={C.orbital[500]} fillOpacity="0.7" />

                    <circle cx="40" cy="170" r="12" fill={C.nuclear[500]} fillOpacity="0.08" stroke={C.nuclear[500]} strokeWidth="1" />
                    <circle cx="40" cy="170" r="3.5" fill={C.nuclear[500]} fillOpacity="0.7" />

                    <circle cx="240" cy="170" r="12" fill={C.cyber[500]} fillOpacity="0.08" stroke={C.cyber[500]} strokeWidth="1" />
                    <circle cx="240" cy="170" r="3.5" fill={C.cyber[500]} fillOpacity="0.7" />

                    <circle cx="140" cy="240" r="12" fill={C.space[500]} fillOpacity="0.08" stroke={C.space[500]} strokeWidth="1" />
                    <circle cx="140" cy="240" r="3.5" fill={C.space[500]} fillOpacity="0.7" />

                    {/* Connecting lines */}
                    <line x1="140" y1="52" x2="40" y2="158" stroke={C.orbital[500]} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4" />
                    <line x1="140" y1="52" x2="240" y2="158" stroke={C.orbital[500]} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4" />
                    <line x1="52" y1="170" x2="228" y2="170" stroke={C.nuclear[500]} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
                    <line x1="40" y1="182" x2="128" y2="240" stroke={C.space[500]} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
                    <line x1="240" y1="182" x2="152" y2="240" stroke={C.space[500]} strokeWidth="0.8" opacity="0.15" strokeDasharray="4 4" />
                    <line x1="140" y1="52" x2="140" y2="228" stroke={C.text.muted} strokeWidth="0.5" opacity="0.15" strokeDasharray="3 5" />

                    {/* Center convergence */}
                    <circle cx="140" cy="140" r="16" fill="none" stroke={C.text.muted} strokeWidth="0.8" opacity="0.2" />
                    <circle cx="140" cy="140" r="4" fill={C.text.secondary} fillOpacity="0.4" />

                    {/* Labels */}
                    <text x="140" y="18" textAnchor="middle" fill={C.orbital[500]} fontSize="9" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.15em" opacity="0.8">ORBITAL</text>
                    <text x="40" y="198" textAnchor="middle" fill={C.nuclear[500]} fontSize="9" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.15em" opacity="0.8">NUCLEAR</text>
                    <text x="240" y="198" textAnchor="middle" fill={C.cyber[500]} fontSize="9" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.15em" opacity="0.8">CYBER</text>
                    <text x="140" y="268" textAnchor="middle" fill={C.space[500]} fontSize="9" fontFamily="Barlow Condensed, sans-serif" fontWeight="600" letterSpacing="0.15em" opacity="0.8">SPACE GOV</text>
                  </svg>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8 space-y-6">
            <ScrollReveal delay={100}>
              <p className="text-base md:text-lg leading-[1.75] text-text-secondary">
                Faultline is a connective research interface linking four
                domain-specific platforms: orbital infrastructure, nuclear
                infrastructure, space governance, and cyber escalation. Its purpose is not only to
                display separate systems, but to reveal the structural fault lines
                that form between them.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-sm leading-[1.75] text-text-muted">
                Each platform maps one domain in depth. Faultline provides the
                connective layer&mdash;identifying where dependencies accumulate,
                where escalation pathways cross boundaries, and where governance
                structures remain fragmented across sectors that are increasingly
                coupled in practice.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                <div className="p-4 border border-white/6 bg-elevated/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orbital-500/70" />
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-orbital-400">Orbital</p>
                  </div>
                  <p className="text-[13px] text-text-muted leading-relaxed">Space systems, satellite infrastructure, and orbital risk dynamics</p>
                </div>
                <div className="p-4 border border-white/6 bg-elevated/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-nuclear-500/70" />
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-nuclear-400">Nuclear</p>
                  </div>
                  <p className="text-[13px] text-text-muted leading-relaxed">Global nuclear infrastructure, facilities, and strategic posture</p>
                </div>
                <div className="p-4 border border-white/6 bg-elevated/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-space-500/70" />
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-space-400">Space Governance</p>
                  </div>
                  <p className="text-[13px] text-text-muted leading-relaxed">Lunar governance authority mapping, mandate analysis, and treaty framework comparison</p>
                </div>
                <div className="p-4 border border-white/6 bg-elevated/50">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-500/70" />
                    <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-cyber-400">Cyber</p>
                  </div>
                  <p className="text-[13px] text-text-muted leading-relaxed">Cyber operations, escalation patterns, and attack surface mapping</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
