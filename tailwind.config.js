/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefinBold': ['JosefinSlab-Bold'],
        'josefinMedium': ['JosefinSlab-Medium'],
        'josefinRegular': ['JosefinSlab-Regular'],
        'josefinLight': ['JosefinSlab-Light'],
      },
      fontSize: {
        'dayNum': '10rem',
      },
    },
  },
  plugins: [],
}

