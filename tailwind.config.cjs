const colors = {
  background: "#13111A",
  primary: "#B7B4C7",
  white: "#FFFFFF",
  cardbg: "#1D1A27",
  skyblue:"#94C1F2",
  cardborder:"#ffffff0f"
};

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "640px" },
      md: { min: "640px" },
      lg: { min: "1024px" },
    },
    colors: { ...colors },
    textColors: { ...colors },
    fontSize: {
      sm: "12px",
    },
    fontFamily: {
      default: ["IBM Plex Sans", "sans-serif"],
    },
    fontWeight: {
      thin: 100,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    extend: {},
  },
  plugins: [],
};
