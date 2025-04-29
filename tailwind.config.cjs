/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blackish: "#0d0d0deb",
        bgBlack: "#000000d9",
        orangeish: "#F97316",
        orangeSecondary: "#ffa567",
      },
    },
  },
  plugins: [],
};
