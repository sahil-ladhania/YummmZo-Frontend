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
        "footer-black" : "#080402",
        "button-color" : "#D9D9D9"
      },
      backgroundImage: {
        'gradient-tl-br': 'linear-gradient(to bottom right, #202020, #333634)',
        'banner-gradient' : 'linear-gradient(to bottom right, #202020, #FFEE33 , #333634)',
        'navbar-gradient' : 'linear-gradient(to bottom right, #D9D9D9 , #333634)',
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
      },
      height : {
        "profile-dropdown" : "700px"
      },
      animation: {
        'glow-light': 'glow-light 1s', // Define the 'glow-light' animation
      },
    },
  },
  plugins: [],
}

