"use client";

import { C } from "@/lib/colors";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-navy-950" />

      {/* Topo terrain texture — primary hero atmosphere */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage: "url(/images/topo-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />

      {/* Gradient overlays for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, ${C.navy[950]}ee 0%, ${C.navy[950]}99 40%, ${C.navy[950]}66 70%, ${C.navy[950]}88 100%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${C.navy[950]}cc 0%, transparent 30%, transparent 60%, ${C.navy[950]}ee 100%)`,
        }}
      />

      {/* Fine grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke={C.steel[400]} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Radial glows */}
      <div
        className="absolute top-1/3 right-1/5 w-[900px] h-[900px] -translate-y-1/3"
        style={{
          background: `radial-gradient(ellipse at center, rgba(74,111,165,0.1) 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute top-2/5 left-1/4 w-[500px] h-[500px]"
        style={{
          background: `radial-gradient(circle, rgba(212,168,67,0.04) 0%, transparent 60%)`,
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
    </div>
  );
}
