"use client";

import { C } from "@/lib/colors";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <p className="text-gold-400 text-xs font-medium tracking-[0.2em] uppercase mb-4">
                  About the Platform
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight tracking-[-0.01em]">
                  What Faultline Is
                </h2>
                <div className="mt-6 w-16 h-px bg-gradient-to-r from-steel-500/50 to-transparent" />
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="hidden lg:block mt-12">
                  <svg viewBox="0 0 200 160" fill="none" className="w-48 opacity-60" aria-hidden="true">
                    <circle cx="100" cy="20" r="6" stroke={C.steel[500]} strokeWidth="0.8" fill={C.steel[500]} fillOpacity="0.15" />
                    <circle cx="40" cy="130" r="6" stroke={C.steel[400]} strokeWidth="0.8" fill={C.steel[400]} fillOpacity="0.15" />
                    <circle cx="160" cy="130" r="6" stroke={C.gold[400]} strokeWidth="0.8" fill={C.gold[400]} fillOpacity="0.15" />
                    <line x1="100" y1="26" x2="40" y2="124" stroke={C.steel[500]} strokeWidth="0.5" opacity="0.4" strokeDasharray="3 4" />
                    <line x1="100" y1="26" x2="160" y2="124" stroke={C.steel[400]} strokeWidth="0.5" opacity="0.4" strokeDasharray="3 4" />
                    <line x1="46" y1="130" x2="154" y2="130" stroke={C.gold[400]} strokeWidth="0.5" opacity="0.3" strokeDasharray="3 4" />
                    <circle cx="100" cy="90" r="3" fill={C.steel[300]} opacity="0.4" />
                    <text x="100" y="10" textAnchor="middle" fill={C.steel[500]} fontSize="7" fontFamily="Inter, sans-serif" opacity="0.5">ORB</text>
                    <text x="22" y="145" fill={C.steel[400]} fontSize="7" fontFamily="Inter, sans-serif" opacity="0.5">NUC</text>
                    <text x="160" y="145" textAnchor="middle" fill={C.gold[400]} fontSize="7" fontFamily="Inter, sans-serif" opacity="0.5">CYB</text>
                  </svg>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-xl leading-[1.7] text-slate-200 font-serif-accent">
                Faultline is a connective research interface linking three
                domain-specific platforms: orbital infrastructure, nuclear
                infrastructure, and cyber escalation. Its purpose is not only to
                display separate systems, but to reveal the structural fault lines
                that form between them.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-base leading-relaxed text-steel-400">
                Each platform maps one domain in depth. Faultline provides the
                connective layer&mdash;identifying where dependencies accumulate,
                where escalation pathways cross boundaries, and where governance
                structures remain fragmented across sectors that are increasingly
                coupled in practice.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
                <div className="border-t border-steel-500/25 pt-5">
                  <p className="text-steel-300 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">Orbital</p>
                  <p className="text-sm text-steel-400 leading-relaxed">Space systems, satellite infrastructure, and orbital risk dynamics</p>
                </div>
                <div className="border-t border-steel-500/25 pt-5">
                  <p className="text-steel-300 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">Nuclear</p>
                  <p className="text-sm text-steel-400 leading-relaxed">Global nuclear infrastructure, facilities, and strategic posture</p>
                </div>
                <div className="border-t border-gold-400/25 pt-5">
                  <p className="text-gold-400 text-xs font-medium tracking-[0.15em] uppercase mb-2.5">Cyber</p>
                  <p className="text-sm text-steel-400 leading-relaxed">Cyber operations, escalation patterns, and attack surface mapping</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/15 to-transparent" />
    </section>
  );
}
