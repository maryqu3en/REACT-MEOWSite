/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, tsx, ts}"],
  theme: {
    extend: {
      colors: {
        'primary': '#f1e8e2',
        'secondary': {
          100: '#bbbbbb',
          200: '#aaaaaa',
        },
        'tertiary': '#93a89e',
        'accent': '#e3d2c6'
      },
      fontFamily: {
        'heading': ['Nunito'],
        'bench': ['Lato'],
        'body': ['Roboto']
      }
    },
  },
  plugins: [],
}