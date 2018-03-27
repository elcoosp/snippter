module.exports = {
  removeLastItemIfEmpty: arr =>
    arr.slice(-1)[0] === '' ? arr.slice(0, -1) : arr
}
