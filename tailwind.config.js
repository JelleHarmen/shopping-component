module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#F37147",
        secondary: "#114B5F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
