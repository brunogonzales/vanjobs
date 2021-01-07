module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Inter Regular"],
      display: ["Inter Bold"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
