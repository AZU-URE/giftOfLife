/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mainGreen': "#13ADB7",
        'mixingGreen': '#29D1D9',
        'dustyOrange': '#7A3E3E'
      },
      backgroundImage: {
        'landingPageBanner': "url('./assets/landingPage/mainBanner2.jpg')"
      },
    },
    fontFamily: {
      dmSans: ['DM Sans', 'sans-serif']
    },

  },
  plugins: [],
}
      // keyframes: {
      //   bounce_y: {
      //     '0%': { transform: 'translateY(-25%)', },
      //     '100%': {
      //       transform: 'translateY(-25%)',
      //       // animation- timing - function: cubic- bezier(0.8, 0, 1, 1);
      //     },
      //     '50%': {
      //       transform: 'translateY(0)',
      //       // animation- timing - function: cubic- bezier(0, 0, 0.2, 1);
      //     }
      //   }
      // },
      // animation: {
      //   'bouncing-arrow-y': 'bounce_y 1s infinite'
      // }