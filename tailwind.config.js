/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /*
        Palette taken from the reference's own custom properties, with the roles
        kept: orange is the brand, blue is UI chrome (selection, handles, tool
        affordances), and the page sits on a sky that resolves into navy.
      */
      colors: {
        brand: '#F0531C',
        'brand-deep': '#D2410E',
        tool: '#0D99FF',
        slate: '#8AA6B8',
        grid: '#EFEEE9',
        frame: '#FFFFFF',
        ink: '#14202B',
        muted: '#5A6B7A',
        rule: '#DFE5EA',
        navy: '#0C1826',
        live: '#12A150',
        'sky-1': '#BFDFF6',
        'sky-2': '#DCEBF7',
        'sky-3': '#EFEEE9',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
        hand: ['"Shantell Sans"', 'ui-rounded', 'cursive'],
      },
      maxWidth: { prose: '36rem' },
      borderRadius: { module: '18px' },
      boxShadow: {
        module: '0 1px 2px rgba(12,24,38,0.04), 0 10px 30px -14px rgba(12,24,38,0.18)',
        lift: '0 2px 6px rgba(12,24,38,0.07), 0 24px 50px -20px rgba(12,24,38,0.3)',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        drift: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(-24px,10px,0)' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        drift: 'drift 26s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
