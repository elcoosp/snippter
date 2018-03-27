const { removeLastItemIfEmpty } = require('../utils'),
  season = require('season')

const formatters = {
  vsCode: snippetsObj => {
    const acc = {}
    for (const key in snippetsObj) {
      const { prefix, body } = snippetsObj[key]
      acc[key] = {
        prefix,
        body: removeLastItemIfEmpty(body.split('\n'))
      }
    }

    return JSON.stringify(acc, null, 4)
  },
  atom: snippetsObj => {
    const acc = {}
    for (const key in snippetsObj) {
      const { prefix, body } = snippetsObj[key]
      acc[key] = {
        ...snippetsObj[key],
        body: body.trim()
      }
    }
    return season.stringify(acc)
  }
}
module.exports = formatters
