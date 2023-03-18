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
          primaryRed: "#9D1515",
          base: "#E7E7E7",
          nblack: "#262633",
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
