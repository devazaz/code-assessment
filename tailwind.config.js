module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust based on your file structure
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Instrument Sans'", "sans-serif"], // Set Instrument Sans as the default sans font
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(100%)" }, // Start fully outside the right edge
          "100%": { transform: "translateX(-100%)" }, // End fully outside the left edge
        },
      },
      animation: {
        scroll: "scroll 10s linear infinite", // Adjust duration as needed
      },
    },
  },
  plugins: [],
};
