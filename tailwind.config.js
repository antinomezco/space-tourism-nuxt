module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'home-bg-mobile': "url('@/assets/home/background-home-mobile.jpg')",
        'home-bg-tablet': "url('@/assets/home/background-home-tablet.jpg')",
        'home-bg-desktop': "url('@/assets/home/background-home-desktop.jpg')",
      },  
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
