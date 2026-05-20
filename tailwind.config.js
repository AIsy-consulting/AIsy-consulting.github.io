/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      colors: {
        bg: '#0b0b0a',
        surface: '#141412',
        border: '#2a2a27',
        lime: '#cdf53c',
        'lime-dim': '#a8c930',
        muted: '#7a7870',
      },
    },
  },
  plugins: [],
}
