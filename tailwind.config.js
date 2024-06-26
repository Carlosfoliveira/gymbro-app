/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7e5bef",
        secondary: "#13ce66",
      },
    },
  },
  plugins: [],
};
