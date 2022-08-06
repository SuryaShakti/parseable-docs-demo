/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#1A237E",
        yellowButton: "#FF9800",
        codeBack: "#242424",
        drawerBlue: "#171F6F",
        footerBlue: "#10143E",
      },
      backgroundImage: {
        // "hero-bg": "url('./static/img/Group 331.svg')",
        // "blue-bg": "url('img/Vector 1 (2).svg')",
        // "gray-bg": "url('img/Vector 2.svg')",
      },
    },
  },
  plugins: [],
};