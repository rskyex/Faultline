"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-void" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-14 lg:py-18">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
            {/* Brand */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2.5 mb-4">
                <Image src="/images/logo.png" alt="Faultline" width={20} height={20} className="w-5 h-5 opacity-70" />
                <span className="wordmark text-text-primary text-sm">Faultline</span>
              </div>
              <p className="text-text-muted text-[12px] leading-[1.7] max-w-sm">
                Cross-domain strategic infrastructure mapping. Revealing the
                dependencies, escalation pathways, and governance fractures across
                orbital, nuclear, space governance, and cyber systems.
              </p>
            </div>

            {/* Platforms */}
            <div className="md:col-span-4">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-4">
                Platforms
              </p>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://orbitalrisktracker.vercel.app/" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-text-muted text-[12px] hover:text-orbital-400 transition-colors duration-200">
                    <span className="w-1 h-1 rounded-full bg-orbital-500/50 group-hover:bg-orbital-400 transition-colors duration-200" />
                    Orbital Risk Tracker
                  </a>
                </li>
                <li>
                  <a href="https://globalnuclearinfrastructureatlas.vercel.app/" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-text-muted text-[12px] hover:text-nuclear-400 transition-colors duration-200">
                    <span className="w-1 h-1 rounded-full bg-nuclear-500/50 group-hover:bg-nuclear-400 transition-colors duration-200" />
                    Nuclear Infrastructure Atlas
                  </a>
                </li>
                <li>
                  <a href="https://space-mandate-atlas.vercel.app/" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-text-muted text-[12px] hover:text-space-400 transition-colors duration-200">
                    <span className="w-1 h-1 rounded-full bg-space-500/50 group-hover:bg-space-400 transition-colors duration-200" />
                    Space Mandate Atlas
                  </a>
                </li>
                <li>
                  <a href="https://cyber-escalation-atlas.vercel.app/" target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-text-muted text-[12px] hover:text-cyber-400 transition-colors duration-200">
                    <span className="w-1 h-1 rounded-full bg-cyber-500/50 group-hover:bg-cyber-400 transition-colors duration-200" />
                    Cyber Escalation Atlas
                  </a>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div className="md:col-span-4">
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-text-muted mb-4">
                Project
              </p>
              <p className="text-text-muted/60 text-[11px] leading-[1.7] mb-4">
                A cross-domain research interface for strategic infrastructure
                analysis and policy-grade mapping.
              </p>
              <a
                href="#main-content"
                className="inline-flex items-center gap-1.5 text-text-muted/40 text-[11px] hover:text-text-muted transition-colors duration-200"
              >
                Back to top
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M5 8V2M2 4l3-3 3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="mt-12 pt-5 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <p className="text-text-muted/30 text-[11px]">
            &copy; {new Date().getFullYear()} Risa Koyanagi. All rights reserved.
          </p>
          <p className="text-text-muted/20 text-[10px] tracking-[0.08em]">
            Strategic infrastructure mapping platform
          </p>
        </div>
      </div>
    </footer>
  );
}
