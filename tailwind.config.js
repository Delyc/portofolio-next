/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#14152A",
        secondary: {
          DEFAULT: "#ccd6f6",
          100: "#8892b0",
          200: "#ccd6f6",
          300: "#a8b2d1",
        },
      },
    },
  },
  plugins: [],
};
