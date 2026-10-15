/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Newsreader"', '"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        neutomni: {
          bg: '#faf8f5',
          surface: '#ffffff',
          surfaceMuted: '#f5f1eb',
          grey: '#f8f4f4',
          border: '#e8e3dc',
          borderSubtle: '#f0ece5',
          borderRed: 'rgba(207, 24, 48, 0.25)',
          red: '#cf1830',
          redHover: '#b51227',
          redLight: '#fdf2f3',
          redTint: 'rgba(207, 24, 48, 0.08)',
          blue: '#6db1f0',
          text: '#17191d',
          textSecondary: '#4a4f5b',
          textMuted: '#787f8d',
        }
      }
    },
  },
  plugins: [],
}