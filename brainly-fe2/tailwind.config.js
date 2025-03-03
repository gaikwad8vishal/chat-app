/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue:{
          500: "#4e38f6"
        },
        gray:{
          100: "#f9fbfa",
          300: "#9aa3b1",
          500: "#475162"
        }
      }
    },
  },
  plugins: [],
}

