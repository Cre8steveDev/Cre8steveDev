/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0D244C",
        darkBrown: "#898989",
        darkNeutral: "rgba(255, 255, 255, 0.60)",
      },
    },
  },
  plugins: [],
};
