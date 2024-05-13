/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF934F",
        // primary_light: "#FFF7F5",
        // text_dark: "#0D1415",
        // text_body: "#3C4851",
        // text_placeholder: "#B9C0C5",
        // text_label: "#6F7C86",
      },
      animation: {
        blink: "blink 1s ease-in-out infinite",
      },
      screens: {
        xs: "320px",
        sm: "425px",
        md: "768px",
        lg: "1024px",

        xl: "1440px",
      },
      backgroundImage: {
        "card-bg": "url('assets/png/card_img3_bg.png')",
      },
      keyframes: {
        blink: {
          "0%, 100%": { transition: "height 200ms" },
        },
      },
    },
  },
  plugins: [],
};
