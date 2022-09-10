/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './index.html',
    './bank.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
