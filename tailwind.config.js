/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
      },
      colors: {
        coffee: {
          200: "#c89f94",
          300: "#a25f4b",
        },
        "main-word":"#1d1f2e"
      },
      spacing: {
        50: "50%",
      },
      screens: {
        tablet: { raw: "(max-width: 1105px)" },
        tabletChild: { raw: "(max-width: 767px)" },
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
