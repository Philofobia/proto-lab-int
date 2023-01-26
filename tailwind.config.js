/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {},
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#a991f7",
          secondary: "#86A0E7",
          accent: "#86D0E7",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#a991f7",
          secondary: "#86A0E7",
          accent: "#86D0E7",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
