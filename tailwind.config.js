/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#f8f7f3',
        surface: '#ffffff',
        border: '#e3e0d7',
        ink: '#1b1b19',
        muted: '#5e5c55',
        accent: '#1f5f47',
        'accent-dark': '#174a37',
        'accent-soft': '#e8f0eb',
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
      },
    },
  },
  plugins: [],
}
