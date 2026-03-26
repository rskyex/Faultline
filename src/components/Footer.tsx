"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url(/images/systems-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 80%",
        }}
      />
      <div className="absolute inset-0 bg-navy-950/80" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <Image src="/images/logo.png" alt="Faultline" width={28} height={28} className="w-7 h-7" />
                <span className="text-white text-lg font-semibold tracking-tight">
                  Faultline
                </span>
              </div>
              <p className="text-white/60 text-sm leading-[1.7] max-w-sm">
                Cross-domain strategic infrastructure mapping. Revealing the
                dependencies, escalation pathways, and governance fractures across
                orbital, nuclear, and cyber systems.
              </p>
            </div>

            {/* Platforms */}
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-5">
                Platforms
              </p>
              <ul className="space-y-3.5">
                <li>
                  <a href="https://orbitalrisktracker.vercel.app/" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-500/50 group-hover:bg-steel-400 transition-colors duration-200" />
                    Orbital Risk Tracker
                  </a>
                </li>
                <li>
                  <a href="https://globalnuclearinfrastructureatlas.vercel.app/" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-400/50 group-hover:bg-steel-300 transition-colors duration-200" />
                    Nuclear Infrastructure Atlas
                  </a>
                </li>
                <li>
                  <a href="https://cyber-escalation-atlas-5yp5.vercel.app/" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors duration-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/50 group-hover:bg-gold-400 transition-colors duration-200" />
                    Cyber Escalation Atlas
                  </a>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div className="md:col-span-3">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/50 mb-5">
                Project
              </p>
              <p className="text-white/40 text-xs leading-[1.7] mb-4">
                A cross-domain research interface for strategic infrastructure
                analysis and policy-grade mapping.
              </p>
              <a
                href="#main-content"
                className="inline-flex items-center gap-1.5 text-white/30 text-xs hover:text-white/60 transition-colors duration-200"
              >
                Back to top
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M5 8V2M2 4l3-3 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Risa Koyanagi. All rights reserved.
          </p>
          <p className="text-white/15 text-xs tracking-[0.05em]">
            Strategic infrastructure mapping platform
          </p>
        </div>
      </div>
    </footer>
  );
}
