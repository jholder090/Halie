/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.js', './client/**/*.jsx', './client/components/**/*.js'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '85': '360px',
        '100': '620px'
      },
      transitionProperty: {
        'height': 'height',
      }
    }
  },
  variants: {},
  plugins: [],
};
