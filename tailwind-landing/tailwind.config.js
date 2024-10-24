/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1c1c1c",
        light: "#f2f2f2",
        accent: "#4338CA",
        light_heading: "#2e2e2e",
        light_paragraph: "#4e4e4e",
        light_label: "#6e6e6e",
        dark_heading: "#e2e2e2",
        dark_paragraph: "#c2c2c2",
        dark_label: "#a2a2a2",
        dark_input_bg: "#171717",
        dark_input_border: "#3c3c3c",
      },
      fontFamily: {
        gabarito: ["Gabarito", "serif"],
      },
    },
  },

  plugins: [],
};
