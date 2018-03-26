const { removeLastItemIfEmpty } = require('./utils')
const CSON = require('cson')

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
  atom: snippetsObj => CSON.stringify(snippetsObj)
}
module.exports = to => formatters[to]
