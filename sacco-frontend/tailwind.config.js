/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "node_modules/flowbite/**/*.js"
=======
const flowbite = require("flowbite-react/tailwind");

module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      flowbite.content()

>>>>>>> upstream/development
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }
  // tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          'dark-olive-green': '#5C593D',
          'light-green': '#AEC671',
          'soft-yellow': '#F7E895',
          'deep-green': '#487827',
          'darker-green': '#3D593C',
        },
      },
    },
    plugins: [
      require('flowbite/plugin')
    ],
  }