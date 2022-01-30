module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@themesberg/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Popins", "sans-serif"],
      },
      colors: {
        bgwhite: "#e2e8f0",
        background: "#171923",
        navbar: "#2D3748",
        hovercolor: "#171923",
        lightdark: "#444444",
      },
    },
  },
  plugins: [require("@themesberg/flowbite/plugin")],
};
