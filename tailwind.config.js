/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust if your project doesn't use src/
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
      redHat: ['"Red Hat Display"', "sans-serif"],
    },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
  
}
