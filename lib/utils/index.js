module.exports = {
  removeLastEmpty: arr => (arr.slice(-1)[0] === '' ? arr.slice(0, -1) : arr)
}
