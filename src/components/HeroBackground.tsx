"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* Deep space base */}
      <div className="absolute inset-0 bg-void" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial glow — orbital cyan */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 30% 40%, rgba(56,189,248,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Radial glow — space violet */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 70% 60%, rgba(167,139,250,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Top-down vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(6,8,14,0.3) 60%, rgba(6,8,14,0.8) 100%)",
        }}
      />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
