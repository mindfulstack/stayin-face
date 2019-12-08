const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: [
      './src/**/*.html',
      './src/**/*.svg',
      './src/**/*.js'
      // etc.
    ],
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

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
      ...process.env.NODE_ENV === 'production'
      ? [purgecss]
      : []
    ]
}