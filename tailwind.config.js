/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Roboto', 'sans'],
      },
      colors: {
        primary: '#ffffff', // Define your primary color here
      },
    },
  },
  plugins: [],
}

