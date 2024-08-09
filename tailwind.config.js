/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'dayNum': '10rem',
      },
    },
    fontFamily: {
      'josefinBold': ['JosefinSlab-Bold'],
      'josefinMedium': ['JosefinSlab-Medium'],
      'josefinRegular': ['JosefinSlab-Regular'],
      'josefinLight': ['JosefinSlab-Light'],
      'josefin': ['Josefin Slab']
    },
  },
  plugins: [],
}

