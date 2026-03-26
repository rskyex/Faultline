"use client";

import FaultlineLogo from "./FaultlineLogo";
import ScrollReveal from "./ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative border-t border-steel-500/10">
      {/* Subtle top texture */}
      <div className="absolute top-0 left-0 right-0 h-32 opacity-[0.02]">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1600 120">
          {Array.from({ length: 5 }, (_, i) => (
            <path
              key={i}
              d={`M0 ${30 + i * 18} Q400 ${20 + i * 18} 800 ${35 + i * 18} Q1200 ${25 + i * 18} 1600 ${30 + i * 18}`}
              stroke="#6b8fc0" strokeWidth="0.6" fill="none"
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-16 lg:py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <FaultlineLogo size={30} />
                <span className="text-white text-lg font-semibold tracking-tight">
                  Faultline
                </span>
              </div>
              <p className="text-steel-400/80 text-sm leading-[1.7] max-w-sm">
                Cross-domain strategic infrastructure mapping. Revealing the
                dependencies, escalation pathways, and governance fractures across
                orbital, nuclear, and cyber systems.
              </p>
            </div>

            {/* Platforms */}
            <div className="md:col-span-4">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-steel-300/70 mb-5">
                Platforms
              </p>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="https://orbitalrisktracker.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-steel-400/80 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-500/40 group-hover:bg-steel-400 transition-colors duration-200" />
                    Orbital Risk Tracker
                  </a>
                </li>
                <li>
                  <a
                    href="https://globalnuclearinfrastructureatlas.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-steel-400/80 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-steel-400/40 group-hover:bg-steel-300 transition-colors duration-200" />
                    Nuclear Infrastructure Atlas
                  </a>
                </li>
                <li>
                  <a
                    href="https://cyber-escalation-atlas-5yp5.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-steel-400/80 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40 group-hover:bg-gold-400 transition-colors duration-200" />
                    Cyber Escalation Atlas
                  </a>
                </li>
              </ul>
            </div>

            {/* Info */}
            <div className="md:col-span-3">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-steel-300/70 mb-5">
                Project
              </p>
              <p className="text-steel-400/50 text-xs leading-[1.7] mb-4">
                A cross-domain research interface for strategic infrastructure
                analysis and policy-grade mapping.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-steel-400/40 text-xs hover:text-steel-300 transition-colors duration-200"
              >
                Back to top
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 8V2M2 4l3-3 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-steel-500/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-steel-400/30 text-xs">
            &copy; {new Date().getFullYear()} Faultline
          </p>
          <p className="text-steel-400/20 text-xs tracking-[0.05em]">
            Strategic infrastructure mapping platform
          </p>
        </div>
      </div>
    </footer>
  );
}
