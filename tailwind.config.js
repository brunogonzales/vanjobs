module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#D5F2FB",
          dark: "#0675CE",
        },
        gray: {
          light: "#F7F7F7",
        },
      },
    },
    fontFamily: {
      body: ["Inter Regular"],
      display: ["Inter Bold"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
