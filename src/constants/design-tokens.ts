export const designTokens = {
  color: {
    background: "#FAFAF8",
    surface: "#FFFFFF",
    surfaceSubtle: "#F1F1EE",
    foreground: "#222222",
    foregroundMuted: "#6B6B6B",
    primary: "#0A0A08",
    secondary: "#9B6733",
    gold: "#B9854B",
    goldLight: "#D2A064",
    border: "#EAEAEA",
    success: "#227A52",
    warning: "#A66412",
    danger: "#B42318",
    info: "#1D5FA7"
  },
  radius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "9999px"
  },
  spacing: {
    page: "clamp(1rem, 4vw, 4rem)",
    section: "clamp(4rem, 8vw, 8rem)",
    sectionCompact: "clamp(3rem, 6vw, 5rem)"
  },
  shadow: {
    sm: "0 1px 2px rgba(10, 10, 8, 0.05)",
    md: "0 10px 30px rgba(10, 10, 8, 0.08)",
    lg: "0 24px 64px rgba(10, 10, 8, 0.12)"
  }
} as const;
