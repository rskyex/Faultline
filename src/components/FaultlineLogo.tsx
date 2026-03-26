"use client";

import { useId } from "react";
import { C } from "@/lib/colors";

export default function FaultlineLogo({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  const id = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Faultline"
    >
      <defs>
        <linearGradient id={`${id}-bolt`} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor={C.steel[300]} />
          <stop offset="40%" stopColor={C.steel[500]} />
          <stop offset="100%" stopColor={C.navy[600]} />
        </linearGradient>
        <linearGradient id={`${id}-accent`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stopColor={C.gold[400]} stopOpacity="0.5" />
          <stop offset="100%" stopColor={C.gold[500]} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={`${id}-edge`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C.steel[300]} stopOpacity="0.8" />
          <stop offset="100%" stopColor={C.steel[500]} stopOpacity="0.3" />
        </linearGradient>
      </defs>

      <path d="M20 8 L60 8 L54 72 L14 72 Z" fill="none" stroke={`url(#${id}-edge)`} strokeWidth="0.6" opacity="0.3" />
      <polygon points="46,6 22,34 34,34 26,74 56,32 42,32 52,6" fill={`url(#${id}-bolt)`} stroke={C.steel[300]} strokeWidth="0.4" strokeLinejoin="bevel" />
      <path d="M38 14 L36 28 L40 38 L37 52 L39 66" stroke={`url(#${id}-accent)`} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <line x1="28" y1="26" x2="48" y2="24" stroke={C.steel[300]} strokeWidth="0.25" opacity="0.3" />
      <line x1="30" y1="42" x2="50" y2="40" stroke={C.steel[300]} strokeWidth="0.25" opacity="0.25" />
      <line x1="28" y1="56" x2="46" y2="54" stroke={C.steel[300]} strokeWidth="0.25" opacity="0.2" />
      <circle cx="39" cy="40" r="1.5" fill={C.gold[400]} opacity="0.6" />
    </svg>
  );
}
