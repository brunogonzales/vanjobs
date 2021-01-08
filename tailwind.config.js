module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    divideColor: (theme) => ({
      primary: "#F2F2F2",
    }),
    extend: {
      colors: {
        blue: {
          light: "#D5F2FB",
          dark: "#0675CE",
        },
        black: {
          300: "#58636D",
        },
        gray: {
          light: "#F7F7F7",
          dark: "#4F4F4F",
          200: "#F2F2F2",
          300: "#E0E0E0",
        },
        yellow: {
          DEFAULT: "#FCAB10",
        },
        ink: {
          light: "#4F4F4F",
          DEFAULT: "#4F4F4F",
          dark: "#3B4146",
          400: "#95A1AC",
          600: "#58636D",
          700: "#454D53",
          800: "#3B4146",
        },
      },
    },
    fontFamily: {
      body: ["Inter Regular"],
      bold: ["Inter Bold"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
