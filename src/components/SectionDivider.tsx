export default function SectionDivider({
  variant = "default",
}: {
  variant?: "default" | "accent" | "wide";
}) {
  if (variant === "wide") {
    return (
      <div className="relative h-16 lg:h-24 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          preserveAspectRatio="none"
          viewBox="0 0 1600 100"
        >
          {/* Converging topographic lines */}
          {Array.from({ length: 6 }, (_, i) => {
            const y = 20 + i * 12;
            return (
              <path
                key={i}
                d={`M0 ${y + 20} Q400 ${y - 10} 800 ${y + 5} Q1200 ${y + 20} 1600 ${y - 5}`}
                stroke="#6b8fc0"
                strokeWidth={i % 2 === 0 ? "1" : "0.5"}
                fill="none"
              />
            );
          })}
        </svg>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500/12 to-transparent" />
      </div>
    );
  }

  if (variant === "accent") {
    return (
      <div className="relative h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
      </div>
    );
  }

  return (
    <div className="relative h-px">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-steel-500/12 to-transparent" />
    </div>
  );
}
