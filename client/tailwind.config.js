/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbar: '#005F9A',
        navText: '#E1EDFB',
        bodyColor: '#EFF0F3',
        secondaryColor: '#0C2D4E'
      }
    },
  },
  plugins: [],
}

