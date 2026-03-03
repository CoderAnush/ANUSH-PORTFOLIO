/**
 * Design System — Dark Navy/Charcoal + Sky Blue
 * High-impact color palette for impressive portfolios
 */

export const colors = {
  // Backgrounds
  navy: '#0F172A',        // Dark Navy
  charcoal: '#020617',    // Charcoal surface
  slate: '#1E293B',       // Elevated surface
  
  // Text
  white: '#F8FAFC',       // Off-white
  gray: '#94A3B8',        // Muted text
  
  // Accent
  skyBlue: '#38BDF8',     // Sky Blue accent
  primary: '#38BDF8',
  accent: '#60A5FA',      // Lighter blue for hovers
}

export const spacing = {
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
  xxxl: '64px'
}

export const typography = {
  base: '16px',
  scale: [12, 14, 16, 18, 20, 24, 32, 40, 48, 64],
  weight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  }
}

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  glow: '0 0 20px rgba(56, 189, 248, 0.3)'
}

export const animations = {
  fast: '150ms',
  base: '300ms',
  slow: '500ms',
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)'
}
