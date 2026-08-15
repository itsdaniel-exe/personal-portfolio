/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /*
        "Workbench" palette.

        Warm off-white ground so white module cards lift off it, near-black ink,
        and a complementary pair: ultramarine (carried over — it's his) against a
        hot orange. Two accents is what gives a bento layout enough voltage to
        stay interesting across a long scroll; one accent goes flat.
      */
      colors: {
        ground: '#EBE9E2',
        card: '#FFFFFF',
        raised: '#F5F4EF',
        ink: '#14171A',
        muted: '#5C6169',
        faint: '#8B9099',
        rule: '#DCD9CF',
        accent: '#2B2BD1',
        hot: '#FF5B2E',
        live: '#12A150',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Newsreader', 'Georgia', 'serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '34rem',
      },
      borderRadius: {
        module: '20px',
      },
      boxShadow: {
        module: '0 1px 2px rgba(20,23,26,0.04), 0 8px 24px -12px rgba(20,23,26,0.12)',
        lift: '0 2px 4px rgba(20,23,26,0.06), 0 18px 40px -16px rgba(20,23,26,0.22)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
}
