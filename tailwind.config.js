/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // "Ledger" palette. Pale green-grey paper, forest-black ink, one ultramarine
    // accent. Neutrals are biased toward the accent's cool side so nothing reads
    // as a default grey.
    extend: {
      colors: {
        paper: '#E9EAE3',
        raised: '#F3F4EE',
        ink: '#161A14',
        muted: '#5B6156',
        faint: '#8A9084',
        rule: '#CBCEC2',
        accent: '#2B2BD1',
        wash: '#DEDEF6',
        live: '#2E7D52',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Newsreader', 'Georgia', 'Times New Roman', 'serif'],
      },
      maxWidth: {
        prose: '34rem',
      },
    },
  },
  plugins: [],
}
