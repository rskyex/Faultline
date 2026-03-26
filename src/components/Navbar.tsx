"use client";

import FaultlineLogo from "./FaultlineLogo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-sm border-b border-steel-500/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <FaultlineLogo size={28} />
          <span className="text-white text-sm font-semibold tracking-tight">
            Faultline
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#domains"
            className="text-steel-400 text-xs font-medium tracking-wide hover:text-white transition-colors"
          >
            Domains
          </a>
          <a
            href="#thesis"
            className="text-steel-400 text-xs font-medium tracking-wide hover:text-white transition-colors"
          >
            Thesis
          </a>
          <a
            href="https://orbitalrisktracker.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium tracking-wide px-4 py-2 border border-steel-500/30 text-steel-300 hover:border-steel-400/60 hover:text-white transition-all"
          >
            Explore Platforms
          </a>
        </div>
      </div>
    </nav>
  );
}
