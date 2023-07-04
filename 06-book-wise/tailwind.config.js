/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      'danger-light': '#f75a68',
      green: {
        100: '#50b2c0',
        150: '#7fd1cc',
        200: '#255d6a',
        300: '#0a313c',
      },
      purple: {
        100: '#8381d9',
        150: '#9694f5',
        200: '#2a2879',
      },
      gray: {
        100: '#f8f9fc',
        200: '#e6e8f2',
        300: '#d1d6e4',
        400: '#8d95af',
        500: '#303f73',
        600: '#252d4a',
        700: '#181c2a',
        800: '#0e1116',
      },


    },
    extend: {
      borderColor: {
        transparent: 'transparent',
      }
    },
  },
  plugins: [],
}

