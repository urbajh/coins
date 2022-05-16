module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  //plugins: [],
  plugins: [require("tailwindcss")("tailwind.config.js"),require("autoprefixer")()],
  /*{
    tailwindcss: {},
    autoprefixer: {},
  },*/
};
