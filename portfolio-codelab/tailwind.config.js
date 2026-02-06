/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',   // Jo tumne kaha tha
        'tablet': '834px',   // Jo tumne kaha tha
        'laptop': '1440px',  // Jo tumne kaha tha
      },
    },
  },
  plugins: [],
}