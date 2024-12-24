/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    function ({ addComponents }) {
      addComponents({
        '.body-container': {
          'margin-left': 'auto',
          'margin-right': 'auto',
          'max-width': '100%',
          'padding-left': '1rem',
          'padding-right': '1rem',
          'transition': 'all 0.3s ease',
        },
        '@media (min-width: 576px)': {
          '.body-container': {
            'max-width': '800px',
          },
        },
        '@media (min-width: 800px)': {
          '.body-container': {
            'max-width': '850px',
          },
        },
        '@media (min-width: 992px)': {
          '.body-container': {
            'max-width': '960px',
          },
        },
        '@media (min-width: 1200px)': {
          '.body-container': {
            'max-width': '1510px',
          },
        },
      });
    },
  ],

  daisyui: {
    themes: [],
  },
}