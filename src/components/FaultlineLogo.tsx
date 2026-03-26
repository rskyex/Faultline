"use client";

export default function FaultlineLogo({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  const id = `logo-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Faultline"
    >
      <defs>
        <linearGradient id={`${id}-bolt`} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#8eb0d8" />
          <stop offset="40%" stopColor="#4a6fa5" />
          <stop offset="100%" stopColor="#1c2d5a" />
        </linearGradient>
        <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor="#d4a843" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#b8922f" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8eb0d8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4a6fa5" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Outer frame — angled parallelogram suggesting geospatial / tectonic */}
      <path
        d="M20 8 L60 8 L54 72 L14 72 Z"
        fill="none"
        stroke={`url(#${id}-edge)`}
        strokeWidth="0.6"
        opacity="0.3"
      />

      {/* Main bolt / fracture shape */}
      <polygon
        points="46,6 22,34 34,34 26,74 56,32 42,32 52,6"
        fill={`url(#${id}-bolt)`}
        stroke="#8eb0d8"
        strokeWidth="0.4"
        strokeLinejoin="bevel"
      />

      {/* Inner fracture line — the "fault" */}
      <path
        d="M38 14 L36 28 L40 38 L37 52 L39 66"
        stroke={`url(#${id}-accent)`}
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Subtle horizontal strata lines */}
      <line x1="28" y1="26" x2="48" y2="24" stroke="#8eb0d8" strokeWidth="0.25" opacity="0.3" />
      <line x1="30" y1="42" x2="50" y2="40" stroke="#8eb0d8" strokeWidth="0.25" opacity="0.25" />
      <line x1="28" y1="56" x2="46" y2="54" stroke="#8eb0d8" strokeWidth="0.25" opacity="0.2" />

      {/* Gold stress point at center */}
      <circle cx="39" cy="40" r="1.5" fill="#d4a843" opacity="0.6" />
    </svg>
  );
}
