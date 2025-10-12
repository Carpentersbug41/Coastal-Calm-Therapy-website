// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Coastal Calm Therapy Brand Palette
        'sea-sage': {
          DEFAULT: '#6D7B6E', // Main headings and accents
          dark: '#4F584F',    // Olive Grey for body text
        },
        'drift-sand': '#F7F3ED',   // Warm off-white background
        'pebble': '#E9E2D5',       // Card backgrounds
        'seafoam': '#C7D2C0',      // Accent for icons/hovers
        'golden-shell': '#E9C7A5', // CTA highlight
        'soft-clay': '#B6A996',    // Shadows/secondary text
        'olive-grey': '#4F584F',   // Body text and nav
        'dune-shadow': '#E3D7C6',  // Dividers/card edges
        'warm-linen': '#F1EBE2',   // Section breaks
      },
      boxShadow: {
        soft: '0 8px 24px rgba(109, 123, 110, 0.08)',
        'soft-lg': '0 12px 40px rgba(109, 123, 110, 0.12)',
        glow: '0 0 30px rgba(199, 210, 192, 0.2)',
      },
      borderRadius: {
        xl2: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
            color: '#4F584F', // Olive Grey
            lineHeight: '1.8',
            a: { 
              color: '#6D7B6E', // Sea Sage
              textDecoration: 'underline',
              '&:hover': { color: '#E9C7A5' } // Golden Shell
            },
            'h1, h2, h3, h4': { 
              color: '#6D7B6E', // Sea Sage
              fontWeight: '600' 
            },
          },
        },
      },
      container: { center: true, padding: '1rem' },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
