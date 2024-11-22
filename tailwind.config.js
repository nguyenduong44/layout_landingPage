module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        mulish: ["Mulish", "sans-serif"]
      },
      boxShadow: {
        'slide': "inset 4em 0em rgba(255, 255, 255, 1)"
      }
    },
    screens: {
      'mobile': {'max': '739px'},
      'tablet': {'min': '740px', 'max': '1023px'},
      'desktop': {'min': '1024px'}
    }
  },
  plugins: [],
}