const locals = require('./data/data.json');

module.exports = {
  "plugins": {
    "posthtml-img-autosize": { root: 'src/assets/img' },
    "posthtml-include": { root: 'src' },
    "posthtml-extend": {
      encoding: 'utf8', // Parent template encoding (default: 'utf8')
      root: 'src/partials' // Path to parent template directory (default: './')
    },
    "posthtml-expressions":{
      locals: {
        statement: '<strong>bar</strong>',
        items: ['foo', 'bar'],
        itemsObj: { foo: 'bar' },
        ...locals
      }
    },
    "posthtml-lorem":{}
  }
}