module.exports = {
  theme: {
    fontFamily: {
      body: ['Rubik Black', 'sans-serif'],
      display: ['Lato', 'sans-serif']
    },
    extend: {
        // spacing: {
        //  '72': '18rem',
        //  '84': '21rem',
        //  '96': '24rem',
        // }
    }
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
