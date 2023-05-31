// const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          tblack: "#1d2020",
          pBlue: '#29427b',
          sBlue: '#00b7ec',
          accenty: '#fcbb52',
          bgwhite: '#FFFFFF',
        },
        fontFamily: {
          sans: ['var(--regular)'],
        },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
