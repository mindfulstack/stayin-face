module.exports = {
    plugins: [
    //   require('postcss-font-magician')({
    //     // hosted: ['./src/assets/fonts'] // not working!
    //     custom: require('directory-fonts-complete')('./src/assets/fonts')
    //   }),
      require('postcss-import'),
      require('tailwindcss'),
      require('postcss-nested'),
      require('autoprefixer'),
    ]
}