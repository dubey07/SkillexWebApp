/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fall: 'fall 1s ease-in-out forwards', 
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    
  ],
}