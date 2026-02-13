// Premium Luxury Dark Theme - Black + Deep Emerald + Gold Design System

export const colors = {
  primary: {
    baseBlack: '#0B1A14',      // Very dark green-black base
    emerald: '#12382C',         // Deep emerald sections
    emeraldSoft: '#0F2E24',     // Soft emerald variation
  },
  accent: {
    gold: '#C6A55C',            // Muted champagne gold
    goldLight: '#D4B373',       // Lighter gold for hovers
    goldDark: '#B39550',        // Darker gold for depth
  },
  text: {
    primary: '#F2EEE6',         // Ivory primary text
    secondary: '#B9B3A7',       // Muted secondary text
    muted: '#8B8680',           // Further muted text
  },
  neutral: {
    black: '#0B1A14',           // Deep black
    darkGray: '#B9B3A7',        // Muted gray (for contrast)
    mediumGray: '#8B8680',      // Medium gray
    lightGray: '#1F3530',       // Light gray (dark theme)
  },
  status: {
    success: '#12382C',
    error: '#D97D7D',
    warning: '#B89c4c',
  }
};

export const typography = {
  heading: {
    fontFamily: "'Playfair Display', serif",
    fontWeight: 600,
    letterSpacing: '-0.5px',
  },
  body: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    letterSpacing: '0px',
  },
  sizes: {
    h1: '3rem',            // 48px
    h2: '2rem',            // 32px
    h3: '1.5rem',          // 24px
    h4: '1.25rem',         // 20px
    h5: '1rem',            // 16px
    body: '1rem',          // 16px
    small: '0.875rem',     // 14px
    xs: '0.75rem',         // 12px
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
    loose: 2,
  }
};

export const spacing = {
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  xxl: '3rem',     // 48px
  xxxl: '4rem',    // 64px
};

export const transitions = {
  fast: '150ms ease-in-out',
  base: '300ms ease-in-out',
  slow: '500ms ease-in-out',
  slowest: '800ms ease-in-out',
};

export const shadows = {
  none: 'none',
  sm: '0 1px 3px rgba(26, 26, 26, 0.08)',
  base: '0 4px 12px rgba(26, 26, 26, 0.12)',
  md: '0 8px 24px rgba(26, 26, 26, 0.15)',
  lg: '0 12px 32px rgba(26, 26, 26, 0.18)',
};

export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultraWide: '1536px',
};
