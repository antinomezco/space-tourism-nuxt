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
        'crew-bg-mobile': "url('/images/crew/background-crew-mobile.jpg')",
        'crew-bg-tablet': "url('/images/crew/background-crew-tablet.jpg')",
        'crew-bg-desktop': "url('/images/crew/background-crew-desktop.jpg')",
      },
      fontSize: {
        'heading-1' : '150px',
        'heading-2' : '100px',
        'heading-3' : '56px',
        'heading-4' : '32px',
        'heading-5' : '28px',
        'sheading-1' : '28px',
        'sheading-2' : '14px',
        'nav-text' : '16px',
        'heading-4-mobile' : '20px',
        'regular-text' : '18px',
        'heading-5-tablet' : '20px',
        'heading-5-mobile' : '16px',
        'regular-text-tablet' : '16px',
        'regular-text-mobile' : '15px',
        'heading-1-mobile' : '80px',
      },
      fontFamily: {
        'bellefair': ['Bellefair'],
        'barlow-condensed': ['"Barlow Condensed"'],
        'barlow': ['Barlow']
      },
      letterSpacing: {
        'small-spacing' : '2.35px',
        'medium-spacing' : '2.7px',
        'big-spacing' : '4.75px',
        'big-spacing-tablet' : '3.38px'
      },
      lineHeight: {
        'regular-text' : '32px'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
