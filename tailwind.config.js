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
      'josefin': ['Josefin Slab']
    },
  },
  plugins: [],
}

