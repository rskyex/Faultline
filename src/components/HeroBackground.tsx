"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* Full hero image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/topo-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />
      {/* Darken for text readability */}
      <div className="absolute inset-0 bg-navy-950/60" />
      {/* Left-side stronger darken for text area */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, rgba(10,14,26,0.55) 0%, rgba(10,14,26,0.2) 55%, transparent 100%)",
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </div>
  );
}
