import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-allura)', 'cursive'],
      },
      colors: {
        dark:    '#0d0b0b',
        card:    '#141210',
        plum:    '#1e1a16',
        burg:    '#2a2419',
        mauve:   '#b89a7a',
        blush:   '#d4a5a5',
        gold:    '#C8A96A',
        cream:   '#f0ebe4',
        ivory:   '#FAF7F2',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
