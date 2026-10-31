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
          // Was #8A8FA0: 3.22:1 on white and 3.03:1 on surface-page, under
          // WCAG AA's 4.5:1 -- and it is used for real text (language
          // switcher, footer links, table header, footnotes, mockup labels),
          // which was Lighthouse's only accessibility failure. Same hue,
          // darkened to 4.86:1 on white / 4.57:1 on #F7F8FA, still clearly
          // lighter than `muted`.
          faint: '#6B7184',
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
