/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {

      colors: {
        yellow: {
          300: '#FFF227',
          700: '#9D961C',
        },
        blue: {
          500: '#81D8F7',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },

      fontFamily: {
        sans: 'Roboto, sans-serif'
      },

    },
  },
  plugins: [],
}
