/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gupterBold': ['Gupter-Bold'],
        'gupterRegular': ['Gupter-Regular'],
        'gupterMedium': ['Gupter-Medium'],
      },
      fontSize: {
        'dayNum': '10rem',
      },
    },
  },
  plugins: [],
}

