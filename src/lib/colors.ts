export const C = {
  // Backgrounds — space-noir gradient
  void: "#04060a",
  deep: "#06080e",
  surface: "#0a0e18",
  elevated: "#101624",
  raised: "#182038",

  // Accent — domain colors
  orbital: {
    500: "#38bdf8",
    400: "#7dd3fc",
    300: "#bae6fd",
    glow: "rgba(56, 189, 248, 0.08)",
  },
  nuclear: {
    500: "#2dd4bf",
    400: "#5eead4",
    300: "#99f6e4",
    glow: "rgba(45, 212, 191, 0.08)",
  },
  space: {
    500: "#a78bfa",
    400: "#c4b5fd",
    300: "#ddd6fe",
    glow: "rgba(167, 139, 250, 0.08)",
  },
  cyber: {
    500: "#f59e0b",
    400: "#fbbf24",
    300: "#fde68a",
    glow: "rgba(245, 158, 11, 0.08)",
  },

  // Text
  text: {
    primary: "#e8ecf2",
    secondary: "#8892a4",
    muted: "#4a5568",
  },

  // Borders
  border: {
    subtle: "rgba(255,255,255,0.06)",
    accent: "rgba(255,255,255,0.10)",
    focus: "rgba(56,189,248,0.35)",
  },
} as const;
