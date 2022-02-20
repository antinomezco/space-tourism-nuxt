module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home-bg-mobile': "url('/images/home/background-home-mobile.jpg')",
        'home-bg-tablet': "url('/images/home/background-home-tablet.jpg')",
        'home-bg-desktop': "url('/images/home/background-home-desktop.jpg')",
        'destination-bg-mobile': "url('/images/destination/background-destination-mobile.jpg')",
        'destination-bg-tablet': "url('/images/destination/background-destination-tablet.jpg')",
        'destination-bg-desktop': "url('/images/destination/background-destination-desktop.jpg')",
      },  
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
