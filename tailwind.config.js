/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
      },
      boxShadow: {
        '1xl': '0px 0px 30px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
