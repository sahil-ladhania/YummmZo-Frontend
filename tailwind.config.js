/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor : {
        "page-background" : "#202020",
        "primary" : "#FFEE33",
        "secondary" : "#333634",
        "yummmzo-color" : "#D9D9D9",
      },
      fontFamily : {
        roboto: ['Roboto', 'sans'],
      },
      textColor : {
        "yummmzo-color" : "#D9D9D9",
        "primary" : "#FFEE33",
        "secondary" : "#333634"
      },
      borderColor : {
        "primary" : "#FFEE33",
        "yummmzo-color" : "#D9D9D9",
      },
      outlineColor : {
        "yummmzo-color" : "#D9D9D9",
      }
    },
  },
  plugins: [],
}

