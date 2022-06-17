const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        coffee: {
          200: "#c89f94",
          300: "#a25f4b",
        },
        "main-word": "#1d1f2e",
      },
      spacing: {
        50: "50%",
      },
      screens: {
        // 'xs': {'min': '480px', 'max': '767px'},
        tablet: { raw: "(max-width: 1105px)" },
        tabletChild: { raw: "(max-width: 767px)" },
        "md-1": { max: "767px" },
        "md-2": { max: "768px" },
        "sm-1": { max: "639px" },
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideDown: "slideDown 1s ease-in-out",
      },
      backgroundImage: {
        "slider-bg": 'url("./img/slider-bg.jpg")',
      },
    },
  },
  plugins: [],
};
