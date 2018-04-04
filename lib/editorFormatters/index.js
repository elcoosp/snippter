const { removeLastItemIfEmpty } = require('../utils'),
  season = require('season')

const formatters = {
  vsCode: snippets => {
    const acc = {}
    for (const key in snippets) {
      const { prefix, body } = snippets[key]
      acc[key] = {
        prefix,
        body: removeLastItemIfEmpty(body.split('\n'))
      }
    }

    return JSON.stringify(acc, null, 4)
  },
  atom: snippets => {
    const acc = {}
    for (const key in snippets) {
      const { prefix, body } = snippets[key]
      acc[key] = {
        ...snippets[key],
        body: body.trim()
      }
    }
    return season.stringify(acc)
  }
}
module.exports = formatters
