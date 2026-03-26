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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {/* Orbital */}
            <a
              href="https://orbitalrisktracker.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-sm overflow-hidden hover-lift transition-all duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/orbital-og.jpg"
                  alt="Orbital Risk Tracker"
                  width={640}
                  height={360}
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-left">
                <p className="text-navy-600 text-xs font-medium tracking-[0.15em] uppercase mb-1">Orbital</p>
                <p className="text-navy-950 text-sm font-medium">Orbital Risk Tracker</p>
              </div>
            </a>

            {/* Nuclear */}
            <a
              href="https://globalnuclearinfrastructureatlas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-sm overflow-hidden hover-lift transition-all duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/nuclear-og.png"
                  alt="Nuclear Infrastructure Atlas"
                  width={640}
                  height={360}
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-left">
                <p className="text-navy-600 text-xs font-medium tracking-[0.15em] uppercase mb-1">Nuclear</p>
                <p className="text-navy-950 text-sm font-medium">Nuclear Infrastructure Atlas</p>
              </div>
            </a>

            {/* Cyber */}
            <a
              href="https://cyber-escalation-atlas-5yp5.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-sm overflow-hidden hover-lift transition-all duration-300"
            >
              <div className="overflow-hidden">
                <Image
                  src="/images/cyber-og.jpg"
                  alt="Cyber Escalation Atlas"
                  width={640}
                  height={360}
                  className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-left">
                <p className="text-xs font-medium tracking-[0.15em] uppercase mb-1" style={{ color: "#8a6d20" }}>Cyber</p>
                <p className="text-navy-950 text-sm font-medium">Cyber Escalation Atlas</p>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
