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
          '2xl': 28,
          '3xl': 32
        },
        gray: {
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#121214'
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
