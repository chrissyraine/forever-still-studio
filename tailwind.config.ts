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
      },
      colors: {
        dark:    '#1C0F1A',
        plum:    '#3D1A3A',
        burg:    '#6B2D3E',
        mauve:   '#C4879A',
        blush:   '#E8C4CB',
        gold:    '#C8A96A',
        cream:   '#FAF7F2',
        ivory:   '#F0EAE0',
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
