"use client";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* Full hero image — already dark enough, no overlay needed */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/topo-dark.png)",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
        }}
      />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </div>
  );
}
