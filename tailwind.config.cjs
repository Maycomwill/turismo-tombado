/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
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
        blue: {
          50: '#cee5fd20',
          100: '#b6d7fc',
          200: '#85bdfa',
          300: '#54a3f8',
          400: '#2388f6',
          500: '#0a7bf5',
          600: '#0862c4',
          700: '#064a93',
          800: '#043162',
          900: '#021931'
        },
        orange: {
          50: '#fee3d060',
          100: '#fdd5b9',
          200: '#fcb98b',
          300: '#fb9d5c',
          400: '#fa812d',
          500: '#f97316',
          600: '#c75c12',
          700: '#95450d',
          800: '#642e09',
          900: '#321704'
        }
      }
    }
  },
  plugins: []
}
