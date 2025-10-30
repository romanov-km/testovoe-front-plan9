import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        playfair: ['var(--font-playfair-display)'],
        jost: ['var(--font-jost)'],
      },
      colors: {
        night: '#100917',
      },
    },
  },
  plugins: [],
} satisfies Config;
