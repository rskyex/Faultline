"use client";

import { useState } from "react";
import FaultlineLogo from "./FaultlineLogo";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-steel-500/8">
      <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-md" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <FaultlineLogo size={26} />
          <span className="text-white text-sm font-semibold tracking-tight group-hover:text-steel-300 transition-colors duration-200">
            Faultline
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#domains" className="text-steel-400/80 text-xs font-medium tracking-[0.05em] hover:text-white transition-colors duration-200">
            Domains
          </a>
          <a href="#thesis" className="text-steel-400/80 text-xs font-medium tracking-[0.05em] hover:text-white transition-colors duration-200">
            Thesis
          </a>
          <div className="w-px h-4 bg-steel-500/20" />
          <a href="#domains" className="text-xs font-medium tracking-[0.05em] px-4 py-2 border border-steel-500/25 text-steel-300/80 hover:border-steel-400/50 hover:text-white transition-all duration-200">
            Explore Platforms
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          <span className={`block w-5 h-px bg-steel-300 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-steel-300 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-steel-300 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="relative md:hidden border-t border-steel-500/10 bg-navy-950/95 backdrop-blur-md">
          <div className="px-6 py-6 space-y-4">
            <a
              href="#domains"
              onClick={() => setMobileOpen(false)}
              className="block text-steel-300 text-sm font-medium tracking-[0.05em] py-2 hover:text-white transition-colors"
            >
              Domains
            </a>
            <a
              href="#thesis"
              onClick={() => setMobileOpen(false)}
              className="block text-steel-300 text-sm font-medium tracking-[0.05em] py-2 hover:text-white transition-colors"
            >
              Thesis
            </a>
            <div className="h-px bg-steel-500/15" />
            <div className="grid grid-cols-1 gap-3 pt-2">
              <a href="https://orbitalrisktracker.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-steel-400 text-xs tracking-[0.05em] py-1.5 hover:text-white transition-colors">
                Orbital Risk Tracker
              </a>
              <a href="https://globalnuclearinfrastructureatlas.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-steel-400 text-xs tracking-[0.05em] py-1.5 hover:text-white transition-colors">
                Nuclear Infrastructure Atlas
              </a>
              <a href="https://cyber-escalation-atlas-5yp5.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-steel-400 text-xs tracking-[0.05em] py-1.5 hover:text-white transition-colors">
                Cyber Escalation Atlas
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
