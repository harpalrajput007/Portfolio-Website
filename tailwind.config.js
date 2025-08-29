/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'Times New Roman', 'Times', 'serif'],
        fr: ['"Frank Ruhl Libre"', 'serif'],
      },
      colors: {
        page: '#f3f4f5',
        ink: '#0f172a',
        muted: '#475569',
        card: '#ffffff',
        border: '#e5e7eb',
      }
    },
  },
  plugins: [],
}