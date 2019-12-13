module.exports = {
  theme: {
    fontFamily: {
      body: ['Rubik Black', 'sans-serif'],
      display: ['Lato', 'sans-serif']
    },
    extend: {}
  },
  variants: {},
  plugins: [
    function({ addBase, config }) {
      addBase({
        'h1': { fontSize: config('theme.fontSize.2xl') },
        'h2': { fontSize: config('theme.fontSize.xl') },
        'h3': { fontSize: config('theme.fontSize.lg') },
      })
    },
  ]
}
