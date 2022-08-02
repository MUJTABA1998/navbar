/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Source Sans Pro"],
      },
      colors: {
        primary: "#6c5ce7",
        secondary: "#55efc4",
      },
    },
  },
  plugins: [],
};
