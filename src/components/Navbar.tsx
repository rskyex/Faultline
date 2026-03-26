"use client";

import FaultlineLogo from "./FaultlineLogo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-steel-500/8">
      {/* Backdrop with stronger blur */}
      <div className="absolute inset-0 bg-navy-950/85 backdrop-blur-md" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <FaultlineLogo size={26} />
          <span className="text-white text-sm font-semibold tracking-tight group-hover:text-steel-300 transition-colors duration-200">
            Faultline
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#domains"
            className="text-steel-400/80 text-xs font-medium tracking-[0.05em] hover:text-white transition-colors duration-200"
          >
            Domains
          </a>
          <a
            href="#thesis"
            className="text-steel-400/80 text-xs font-medium tracking-[0.05em] hover:text-white transition-colors duration-200"
          >
            Thesis
          </a>
          <div className="w-px h-4 bg-steel-500/20" />
          <a
            href="#domains"
            className="text-xs font-medium tracking-[0.05em] px-4 py-2 border border-steel-500/25 text-steel-300/80 hover:border-steel-400/50 hover:text-white transition-all duration-200"
          >
            Explore Platforms
          </a>
        </div>
      </div>
    </nav>
  );
}
