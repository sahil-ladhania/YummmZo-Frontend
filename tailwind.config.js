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
        "button-color" : "#D9D9D9",
        "light-white" : "#F1F1F1"
      },
      backgroundImage: {
        'gradient-tl-br': '#FFFFFF',
        'banner-gradient' : 'linear-gradient(to bottom right, #FF3044,#CB0C48)',
        'navbar-gradient' : 'linear-gradient(to bottom right, #FFFFFF , #D9D9D9 , #FFFFFF , #D9D9D9)',
        'card-gradient' : 'linear-gradient(to bottom right, #D9D9D9 , #FFFFFF)',
        'signup-gradient' : 'linear-gradient(to bottom right, #FF3044,#CB0C48)',
        'signin-gradient' : 'linear-gradient(to bottom right, #FF3044,#CB0C48)',
      },
      fontFamily : {
        roboto: ['Roboto', 'sans'],
      },
      textColor : {
        "yummmzo-color" : "#D9D9D9",
        "primary" : "#FFEE33",
        "secondary" : "#333634",
        "logo" :  '#FF3044',
        "black" : "#080402",
        "fb" : "#0866FF",
        "insta" : "#DA3F86",
        "twitter" : "#1DA1F2",
        "linkeden" : "#0077B5"
      },
      borderColor : {
        "primary" : "#FFEE33",
        "yummmzo-color" : "#D9D9D9",
        "secondary" : "#333634",
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
      height: {
        "signup-form" : "750px"
      }
    },
  },
  plugins: [],
}

