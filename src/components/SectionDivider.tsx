"use client";

import Image from "next/image";

export default function SectionDivider() {
  return (
    <div className="relative flex items-center justify-center py-1 bg-deep overflow-hidden">
      {/* Left glowing line */}
      <div className="flex-1 h-px relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orbital-500/30 to-orbital-500/10" />
        <div className="absolute inset-0 divider-shimmer-left" />
      </div>

      {/* Logo */}
      <div className="relative mx-4 flex-shrink-0">
        <div className="w-6 h-6 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt=""
            width={18}
            height={18}
            className="w-[18px] h-[18px] opacity-40"
            aria-hidden="true"
          />
        </div>
        {/* Glow behind logo */}
        <div
          className="absolute inset-0 -m-2 rounded-full animate-gentle-pulse"
          style={{
            background: "radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Right glowing line */}
      <div className="flex-1 h-px relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-orbital-500/30 to-orbital-500/10" />
        <div className="absolute inset-0 divider-shimmer-right" />
      </div>
    </div>
  );
}
