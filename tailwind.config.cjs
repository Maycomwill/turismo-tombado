/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        fontSize: {
          xxs: 8,
          xsm: 12,
          sm: 14,
          md: 16,
          lg: 18,
          xlg: 24,
          x2l: 28,
          x3l: 32
        },
        gray: {
          100: '#e4e3e3',
          200: '#c9c7c7',
          300: '#adabab',
          400: '#928f8f',
          500: '#777373',
          600: '#5f5c5c',
          700: '#474545',
          800: '#302e2e',
          900: '#181717'
        },
        pBlue: {
          100: '#ccecff',
          200: '#99d9fe',
          300: '#66c5fe',
          400: '#33b2fd',
          500: '#009FFD',
          600: '#007fca',
          700: '#005f98',
          800: '#004065',
          900: '#002033'
        },
        pYellow: {
          100: '#ffedcc',
          200: '#ffdb99',
          300: '#ffc866',
          400: '#ffb633',
          500: '#FFA400',
          600: '#cc8300',
          700: '#996200',
          800: '#664200',
          900: '#332100'
        }
      }
    },
  },
  plugins: [],
}
