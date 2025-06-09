/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e5f3fa', // very light, almost white blue
          100: '#e5f3fa',
          200: '#b3d9f2', // lighter blue (interpolated)
          300: '#7fc3ea', // light blue (interpolated)
          400: '#1e9ed7', // vibrant, bright blue
          500: '#2a448c', // medium to dark blue
          600: '#23386e', // slightly darker than 500 (interpolated)
          700: '#1b2950', // darker blue (interpolated)
          800: '#131a2f', // very dark blue, almost black
          900: '#0d111f', // even darker
        },
      },
    },
  },
  plugins: [],
} 