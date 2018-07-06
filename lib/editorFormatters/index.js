const { removeLastEmpty } = require('../utils'),
  season = require('season')

const formatters = {
  vsCode: ({ scope, ...snippets }) => {
    const acc = {}
    for (const key in snippets) {
      const { prefix, body } = snippets[key]
      acc[key] = {
        prefix,
        body: removeLastEmpty(body.split('\n'))
      }
    }

    return JSON.stringify(acc, null, 4)
  },
  atom: ({ scope, ...snippets }) => {
    const acc = {}
    for (const key in snippets) {
      const { prefix, body } = snippets[key]
      acc[key] = {
        ...snippets[key],
        body: body.trim()
      }
    }
    const formattedScope = `.source.${scope}`
    return season.stringify({ [formattedScope]: { ...acc } })
  }
}
module.exports = formatters
