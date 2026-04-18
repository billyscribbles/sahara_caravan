// Single source of truth for design tokens.
// applyTheme.js writes these onto :root as CSS custom properties at boot.

export const theme = {
  colors: {
    // Surfaces — warm, sand-toned
    bg: '#F5EDE0',
    'bg-alt': '#FFFFFF',
    'bg-card': '#FFFFFF',
    'bg-muted': '#EFE6D4',

    // Text
    text: '#1A1A1A',
    'text-soft': '#4A4A4A',
    muted: '#8A8A8A',

    // Accent — rust / ochre
    accent: '#C67B3F',
    'accent-dark': '#9C5E2E',
    'accent-light': '#D99765',
    'accent-glow': 'rgba(198, 123, 63, 0.35)',

    // Structural
    border: '#E8DDCB',
    'border-strong': '#C6B59A',

    // Dark surface (footer + dark sections)
    dark: '#1F1A14',
    'dark-alt': '#2A241C',
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
    sm: '0 1px 3px rgba(31, 26, 20, 0.06), 0 1px 2px rgba(31, 26, 20, 0.04)',
    md: '0 6px 20px rgba(31, 26, 20, 0.08), 0 2px 6px rgba(31, 26, 20, 0.05)',
    lg: '0 16px 48px rgba(31, 26, 20, 0.12), 0 4px 12px rgba(31, 26, 20, 0.06)',
    accent: '0 10px 32px rgba(198, 123, 63, 0.28)',
  },
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    base: '240ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
}
