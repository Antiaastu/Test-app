/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        '2xl': '0 10px 20px rgba(0, 0, 0, 0.25)',
        '3xl': '0 20px 40px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}

