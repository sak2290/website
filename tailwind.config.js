/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constants.ts",
    "./types.ts",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#4a4a52',
        'brand-gold': '#bca87f',
        'brand-bg': '#f8f9fa',
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      }
    }
  },
  plugins: [],
}