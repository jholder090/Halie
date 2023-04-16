/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.js', './client/**/*.jsx', './client/components/**/*.js'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      flex: {
        '25': '1 1 20%'
      },
      spacing: {
        '85': '360px',
        '100': '620px'
      },
      transitionProperty: {
        'height': 'height',
      },
      colors: {
        'halie-dark': '#9e544c',
        'halie-med' : '#d89e94',
        'halie-light': '#ecb8ac',
      },
    }
  },
  variants: {},
  plugins: [],
};
