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
          100: '#b6d7fc',
          200: '#85bdfa',
          300: '#54a3f8',
          400: '#2388f6',
          500: '#0a7bf5',
          600: '#0862c4',
          700: '#064a93',
          800: '#043162',
          900: '#021931'
        }
        //,
        // pYellow: {
        //   100: '#ffedcc',
        //   200: '#ffdb99',
        //   300: '#ffc866',
        //   400: '#ffb633',
        //   500: '#FFA400',
        //   600: '#cc8300',
        //   700: '#996200',
        //   800: '#664200',
        //   900: '#332100'
        // }
      }
    }
  },
  plugins: []
}
