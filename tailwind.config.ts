import type { Config } from 'tailwindcss'

// Brand tokens lifted from the main QuiroFlow app (assets/css/theme.css /
// tailwind.config.ts in the app repo) — same brand hue and radii so the
// marketing site and the product feel like one thing.
export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#4F46E5',
          hover: '#4339CE',
          text: '#3B32C9',
          tint: '#EEF0FE',
          tintBorder: '#D8DCFB',
        },
        ink: {
          900: '#15171E',
          700: '#22252F',
          600: '#2B3040',
          muted: '#4A4F60',
          faint: '#8A8FA0',
        },
        line: {
          DEFAULT: '#E8E9ED',
          control: '#E1E3EA',
        },
        surface: {
          page: '#F7F8FA',
        },
        success: {
          text: '#157F52',
          bg: '#E9F6EF',
        },
        danger: {
          text: '#B4230F',
          bg: '#FDF0F2',
        },
      },
      borderRadius: {
        card: '11px',
        ctl: '8px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,22,30,.04)',
      },
      letterSpacing: {
        tightTitle: '-.012em',
      },
    },
  },
}
