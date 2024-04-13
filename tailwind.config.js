/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["night"],
  },
  theme: {
    fontFamily: {
      primary: "EB Garamond, Arial, sans-serif",
    },
    colors: {
      second: "#61b22a",
      first: "#04a5e5",
      third: "#436971",
    },
  },

  plugins: [require("daisyui")],
};
