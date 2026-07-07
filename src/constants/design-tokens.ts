export const designTokens = {
  color: {
    primary: "#0A0A08",
    secondary: "#9B6733",
    gold: "#B9854B",
    goldLight: "#D2A064",
    background: "#FAFAF8",
    text: "#222222",
    muted: "#6B6B6B",
    border: "#EAEAEA"
  },
  radius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem"
  },
  spacing: {
    page: "clamp(1rem, 4vw, 4rem)",
    section: "clamp(4rem, 8vw, 8rem)"
  }
} as const;
