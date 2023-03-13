/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  corePlugins: {
    preflight: false
  },
  plugins: [require("daisyui")],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"]
};
