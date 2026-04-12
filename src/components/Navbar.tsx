"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen, closeMobile]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="absolute inset-0 bg-deep/90 backdrop-blur-xl" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-14 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="flex items-center gap-3 group">
          <Image src="/images/logo.png" alt="Faultline" width={22} height={22} className="w-[22px] h-[22px] opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className="wordmark text-text-primary text-xs group-hover:text-orbital-400 transition-colors duration-200">
            Faultline
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#domains" className="text-text-secondary text-[11px] font-medium tracking-[0.12em] uppercase hover:text-text-primary transition-colors duration-200">
            Domains
          </a>
          <a href="#thesis" className="text-text-secondary text-[11px] font-medium tracking-[0.12em] uppercase hover:text-text-primary transition-colors duration-200">
            Thesis
          </a>
          <a href="#framework" className="text-text-secondary text-[11px] font-medium tracking-[0.12em] uppercase hover:text-text-primary transition-colors duration-200">
            Framework
          </a>
          <div className="w-px h-3.5 bg-white/8" />
          <a
            href="#domains"
            className="text-[11px] font-medium tracking-[0.08em] uppercase px-4 py-1.5 border text-orbital-400 hover:text-text-primary hover:border-orbital-500/40 transition-all duration-200"
            style={{ borderColor: "rgba(56,189,248,0.2)" }}
          >
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
          <span className={`block w-4 h-px bg-text-secondary transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
          <span className={`block w-4 h-px bg-text-secondary transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-4 h-px bg-text-secondary transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="relative md:hidden bg-deep/95 backdrop-blur-xl" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="px-6 py-5 space-y-3">
            <a href="#domains" onClick={closeMobile} className="block text-text-secondary text-[12px] font-medium tracking-[0.1em] uppercase py-2 hover:text-text-primary transition-colors">
              Domains
            </a>
            <a href="#thesis" onClick={closeMobile} className="block text-text-secondary text-[12px] font-medium tracking-[0.1em] uppercase py-2 hover:text-text-primary transition-colors">
              Thesis
            </a>
            <a href="#framework" onClick={closeMobile} className="block text-text-secondary text-[12px] font-medium tracking-[0.1em] uppercase py-2 hover:text-text-primary transition-colors">
              Framework
            </a>
            <div className="h-px bg-white/6 my-2" />
            <div className="grid grid-cols-1 gap-2 pt-1">
              <a href="https://orbitalrisktracker.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary text-[11px] tracking-[0.05em] py-1.5 hover:text-orbital-400 transition-colors">
                <span className="w-1 h-1 rounded-full bg-orbital-500/60" />Orbital Risk Tracker
              </a>
              <a href="https://globalnuclearinfrastructureatlas.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary text-[11px] tracking-[0.05em] py-1.5 hover:text-nuclear-400 transition-colors">
                <span className="w-1 h-1 rounded-full bg-nuclear-500/60" />Nuclear Infrastructure Atlas
              </a>
              <a href="https://space-mandate-atlas.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary text-[11px] tracking-[0.05em] py-1.5 hover:text-space-400 transition-colors">
                <span className="w-1 h-1 rounded-full bg-space-500/60" />Space Mandate Atlas
              </a>
              <a href="https://cyber-escalation-atlas.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-secondary text-[11px] tracking-[0.05em] py-1.5 hover:text-cyber-400 transition-colors">
                <span className="w-1 h-1 rounded-full bg-cyber-500/60" />Cyber Escalation Atlas
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
