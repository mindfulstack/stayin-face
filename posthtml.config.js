module.exports = {
  "plugins": [
    require("posthtml-img-autosize")({ root: 'src/assets/img' }),
    require("posthtml-include")({ root: 'src' }),
    require("posthtml-expressions")({
      locals: { foo: 'bar' }
    }),
    require('posthtml-extend')({
      encoding: 'utf8', // Parent template encoding (default: 'utf8')
      root: 'src/partials' // Path to parent template directory (default: './')
    }),
    require('posthtml-lorem'),
  ]
}