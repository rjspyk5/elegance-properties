/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "EB Garamond, Arial, sans-serif",
    },
    colors: {
      main: "#111930",
      second: "#61b22a",
      third: "#04a5e5",
    },
  },

  plugins: [require("daisyui")],
};
