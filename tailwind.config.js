/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '464px',
        xsm: '547px'
      }
    }
  },
  plugins: []
};
