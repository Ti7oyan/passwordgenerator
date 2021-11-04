module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.tsx',
    './index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lexend']
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
