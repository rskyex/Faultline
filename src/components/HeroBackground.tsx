"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      {/* Subtle grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        <defs>
          <pattern
            id="hero-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#6b8fc0"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Topographic contour lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06]"
        preserveAspectRatio="none"
        viewBox="0 0 1400 900"
      >
        {[
          "M0 450 Q200 380 400 420 Q600 460 800 400 Q1000 340 1200 390 Q1400 440 1400 440",
          "M0 480 Q200 410 400 450 Q600 490 800 430 Q1000 370 1200 420 Q1400 470 1400 470",
          "M0 510 Q200 440 400 480 Q600 520 800 460 Q1000 400 1200 450 Q1400 500 1400 500",
          "M0 540 Q200 470 400 510 Q600 550 800 490 Q1000 430 1200 480 Q1400 530 1400 530",
          "M0 570 Q250 500 450 540 Q650 580 850 520 Q1050 460 1250 510 Q1400 550 1400 550",
          "M0 600 Q250 530 450 570 Q650 610 850 550 Q1050 490 1250 540 Q1400 580 1400 580",
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#6b8fc0"
            strokeWidth="1"
            fill="none"
          />
        ))}
      </svg>

      {/* Radial glow center-right */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.08]"
        style={{
          background:
            "radial-gradient(circle, rgba(74,111,165,0.4) 0%, transparent 70%)",
        }}
      />

      {/* Faint gold accent */}
      <div
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background:
            "radial-gradient(circle, rgba(212,168,67,0.5) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
