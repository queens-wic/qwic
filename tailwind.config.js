const { transform } = require("next/dist/build/swc");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        0.5: "0.5px",
      },
      fontFamily: {
        NavbarFont: ["NavbarFont", "sans-serif"],
      },
      colors: {
        "Navbar-color": "#202632",
        "secondary-text": "#384350",
        "qwic-pink": "#F5DBF1",
        "light-grey": "#ADB0B7",
        "dark-pink": "#E0A4D7",
        "light-pink": "#F5DBF1",
        "dark-blue": "#9FB9DE",
        "light-blue": "#DFE8F5",
        "dark-purple": "#ADA8E5",
        "light-purple": "#DDDBF5",
        "pale-pink": "#FAEDF8", // for mentorship shadow card
        "alt-purple": "#CC68BC", // for mentorship shadow card
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        blob: "blob 7s infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
