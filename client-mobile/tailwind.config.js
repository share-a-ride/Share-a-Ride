/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screen/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
    ],
  theme: {
    extend: {
      colors:{
        'background': "#1F2D5A",
        'accent': "#2F76DB",
        'primary': "#FBFBFB",
        'secondary': "#FBFBFB",
      }
    },
  },
  plugins: [],
}

