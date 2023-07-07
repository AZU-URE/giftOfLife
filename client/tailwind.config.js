/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mainGreen': "#13ADB7",
        'mixingGreen': '#29D1D9'
      },
      backgroundImage: {
        'landingPageBanner': "url('./assets/landingPage/mainBanner2.jpg')"
      }
    },
    fontFamily: {
      dmSans: ['DM Sans', 'sans-serif']
    },

  },
  plugins: [],
}