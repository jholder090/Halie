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
        '100': '620px',
        '120': '1190px',
        '33vh': '33vh',
        '86': '85%',
      },
      transitionProperty: {
        'height': 'height',
      },
      colors: {
        'halie-dark': '#9e544c',
        'halie-med' : '#d89e94',
        'halie-light': '#ecb8ac',
        'halie-hover': '#914C44',
        'border-gray': '#ddd'
      },
      fontSize: {
        base: '1.5rem',
        header: '2.25rem',
        small: '1rem'
      },
      fontWeight: {
        base: 400,
        strong: 600,
        extraStrong: 800,
      }
    }
  },
  variants: {},
  plugins: [],
};
