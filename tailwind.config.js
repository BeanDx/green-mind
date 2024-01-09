/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily: {
    //   ''
    // },
    extend: {
      colors: {
        'banner-bg': '#87d4d4',
        'better-banner-bg': '#3d9c9c',
      },
    },
  },
  plugins: [],
}

