/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        phone: { max: '620px' },
        // => @media (max-width: 620px) {...}
        'max-phone': { min: '620px' },
        // => @media (min-width: 620px) {...}
        pad: { max: '1050px' },
        // => @media (max-width: 1050px) {...}
      },
    },
  },
  plugins: [],
};
