const { removeLastEmpty } = require('./index')

test('Remove the last item of an array if it is an empty string', () => {
  expect(removeLastEmpty(['test', 3, ''])).toEqual(['test', 3])
})
