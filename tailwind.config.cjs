/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "!./src/routes.tsx"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}