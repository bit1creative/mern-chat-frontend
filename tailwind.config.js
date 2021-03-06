module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: (theme) => ({
        auto: "auto",
        ...theme("spacing"),
        full: "100%",
        screen: "calc(var(--vh) * 100)",
      }),
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/3": "33%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        size: "width, height",
        spacing: "margin, padding",
      },
      colors: {
        "custom-green": "#caf7e3",
        "custom-lighter-pink": "#f8eded",
        "custom-light-pink": "#f6dfeb",
        "custom-pink": "#e4bad4",
        "custom-pinker": "#e798ae",
        "custom-for-name": "#ba135d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
