/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.js', './client/**/*.jsx', './client/components/**/*.js'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      }
    }
  },
  variants: {},
  plugins: [],
};
