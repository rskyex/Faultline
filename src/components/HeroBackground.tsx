"use client";

import { C } from "@/lib/colors";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-navy-950" />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(160deg, ${C.navy[900]} 0%, ${C.navy[950]} 35%, ${C.navy[800]} 65%, ${C.navy[950]} 100%)`,
        }}
      />

      {/* Fine grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.035]">
        <defs>
          <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke={C.steel[400]} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Topographic contour field */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        preserveAspectRatio="none"
        viewBox="0 0 1600 900"
      >
        {Array.from({ length: 12 }, (_, i) => {
          const y = 350 + i * 25;
          const wave = i % 2 === 0 ? 30 : -20;
          return (
            <path
              key={i}
              d={`M0 ${y + wave} Q400 ${y - 30 + wave} 800 ${y + 10 + wave} Q1200 ${y + 40 + wave} 1600 ${y - 10 + wave}`}
              stroke={C.steel[400]}
              strokeWidth={i % 3 === 0 ? "1.2" : "0.6"}
              fill="none"
            />
          );
        })}
      </svg>

      {/* Diagonal stress lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]" preserveAspectRatio="none" viewBox="0 0 1600 900">
        <line x1="200" y1="0" x2="800" y2="900" stroke={C.steel[300]} strokeWidth="1" />
        <line x1="600" y1="0" x2="1200" y2="900" stroke={C.steel[500]} strokeWidth="0.5" />
        <line x1="1000" y1="0" x2="1400" y2="900" stroke={C.gold[400]} strokeWidth="0.5" />
      </svg>

      {/* Radial glows */}
      <div
        className="absolute top-1/3 right-1/5 w-[900px] h-[900px] -translate-y-1/3"
        style={{
          background: `radial-gradient(ellipse at center, rgba(74,111,165,0.08) 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute top-2/5 left-1/4 w-[500px] h-[500px]"
        style={{
          background: `radial-gradient(circle, rgba(212,168,67,0.03) 0%, transparent 60%)`,
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-950 to-transparent" />
    </div>
  );
}
