/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#D4F2FF',  // very light blue
          100: '#A3E4FF', // light blue
          200: '#7DDCFF', // sky blue
          300: '#05B2FA', // vivid blue
          400: '#035B78', // deep blue
          500: '#035B78',
          600: '#035B78',
          700: '#035B78',
          800: '#035B78',
          900: '#035B78',
        },
        accent: {
          400: '#05B2FA', // accent color for highlights and CTAs
        },
      },
    },
  },
  plugins: [],
} 