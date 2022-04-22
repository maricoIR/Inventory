module.exports = {
  important: true,
  content: [
    "./src/views/**/*.{js,ts,jsx,tsx}",
    "./src/layout/components/**/*.{js,ts,jsx,tsx}",
    "./src/Theme/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainbg: "#f4f9ff",
        textclr: "#484848",
        tableborder: "#d1d1d1",
        inputborder: "#898989",
      },
    },
  },
  plugins: [],
};
