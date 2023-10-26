/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'spring-green': {
          '50': '#edfff6',
          '100': '#d5ffec',
          '200': '#aeffd9',
          '300': '#70ffbe',
          '400': '#2bfd9b',
          '500': '#00f080',
          '600': '#00c062',
          '700': '#009650',
          '800': '#067542',
          '900': '#076039',
          '950': '#00371e',
        },      
      }
    },
  },
  plugins: [],
}