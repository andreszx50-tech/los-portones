/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- Agregamos esta línea clave
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#B91C1C',
        'brand-dark': '#1F2937',
      }
    },
  },
  plugins: [],
}