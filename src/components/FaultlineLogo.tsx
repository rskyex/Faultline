"use client";

export default function FaultlineLogo({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Lightning bolt / faultline mark — angular, geometric, referencing the brand imagery */}
      <defs>
        <linearGradient id="bolt-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6b8fc0" />
          <stop offset="50%" stopColor="#4a6fa5" />
          <stop offset="100%" stopColor="#1c2d5a" />
        </linearGradient>
        <linearGradient id="bolt-accent" x1="0" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#d4a843" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#b8922f" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Main bolt shape */}
      <polygon
        points="38,4 18,30 28,30 22,60 48,28 36,28 44,4"
        fill="url(#bolt-grad)"
        stroke="#8eb0d8"
        strokeWidth="0.5"
        strokeLinejoin="bevel"
      />
      {/* Inner fracture line */}
      <line
        x1="30"
        y1="12"
        x2="32"
        y2="52"
        stroke="url(#bolt-accent)"
        strokeWidth="1.5"
        strokeDasharray="2 3"
      />
      {/* Subtle topo lines */}
      <path
        d="M24 20 Q32 18 40 22"
        stroke="#8eb0d8"
        strokeWidth="0.3"
        fill="none"
        opacity="0.4"
      />
      <path
        d="M22 36 Q30 33 42 35"
        stroke="#8eb0d8"
        strokeWidth="0.3"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
