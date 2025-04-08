/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        transducer: ['transducer-extended', 'sans-serif'],
      },
    },
  },
  plugins: [],
}