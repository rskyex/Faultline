"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* Hero image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/systems-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-void/60" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

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

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-deep to-transparent" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
}
