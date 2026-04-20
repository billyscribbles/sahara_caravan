// Single source of truth for design tokens.
// applyTheme.js writes these onto :root as CSS custom properties at boot.

export const theme = {
  colors: {
    // Surfaces — dark-dominant
    bg: '#0E0E0F',          // page baseline; near-black with depth
    'bg-alt': '#FAFAF7',    // white "breather" surface; warm off-white
    'bg-card': '#161618',   // lifted card surface on dark
    'bg-muted': '#1C1C1F',  // subtle lift for inset / hover

    // Text on dark (default)
    text: '#F2EFE9',
    'text-soft': 'rgba(242, 239, 233, 0.72)',
    muted: 'rgba(242, 239, 233, 0.50)',

    // Text on light (inside .section--alt breathers)
    'text-on-light': '#0E0E0F',
    'text-on-light-soft': 'rgba(14, 14, 15, 0.68)',

    // Accent — bone
    accent: '#EAE4D8',
    'accent-dark': '#D4CBB8',
    'accent-light': '#F4EFE5',
    'accent-glow': 'rgba(234, 228, 216, 0.18)',
    'accent-overlay': 'rgba(234, 228, 216, 0.08)',

    // Secondary accent — logo gold (sampled from the flame + triangle in the SAHARA wordmark).
    // Used sparingly as a brand touch: eyebrows, small indicators, decorative marks.
    gold: '#BE9646',
    'gold-light': '#D4B06A',
    'gold-soft': 'rgba(190, 150, 70, 0.75)',
    'gold-glow': 'rgba(190, 150, 70, 0.18)',

    // Structural — translucent
    border: 'rgba(242, 239, 233, 0.10)',
    'border-strong': 'rgba(242, 239, 233, 0.22)',
    'border-on-light': 'rgba(14, 14, 15, 0.10)',

    // Deepest sections (footer, hero peaks, CTA bands)
    dark: '#08080A',
    'dark-alt': '#131316',
  },
  fonts: {
    display: "'Fraunces', Georgia, 'Times New Roman', serif",
    body: "'Inter', -apple-system, system-ui, 'Segoe UI', sans-serif",
  },
  radii: {
    sm: '8px',
    md: '14px',
    lg: '22px',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 3px rgba(0, 0, 0, 0.30), 0 1px 2px rgba(0, 0, 0, 0.20)',
    md: '0 6px 20px rgba(0, 0, 0, 0.35), 0 2px 6px rgba(0, 0, 0, 0.20)',
    lg: '0 16px 48px rgba(0, 0, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.25)',
    accent: '0 10px 32px rgba(234, 228, 216, 0.10)',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '240ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
}
