const formatters = require('./index')
//Just replace all the "$-" by "$ and trim the string to get the real desired output
const replaceHyphenAndTrim = s => s.replace(/(\$-)/g, '$').trim()

const snippetObj = {
  scope: 'js',
  'Const declaration': { prefix: 'cs', body: 'const ${1} = ${2}\n' },
  'Arrow function declaration': {
    prefix: 'af',
    body: 'const ${1} = () => {\n    ${2}\n}\n'
  }
}

test('Formatter to vsCode', () => {
  const pseudoOutput = `
{
    "Const declaration": {
        "prefix": "cs",
        "body": [
            "const $-{1} = $-{2}"
        ]
    },
    "Arrow function declaration": {
        "prefix": "af",
        "body": [
            "const $-{1} = () => {",
            "    $-{2}",
            "}"
        ]
    }
}`

  const output = replaceHyphenAndTrim(pseudoOutput)

  expect(formatters.vsCode(snippetObj)).toEqual(output)
})

test('Formatter to atom', () => {
  const pseudoOutput = `
".source.js":
  "Const declaration":
    prefix: "cs"
    body: "const $-{1} = $-{2}"
  "Arrow function declaration":
    prefix: "af"
    body: '''
      const $-{1} = () => {
          $-{2}
      }
    '''
`

  const output = replaceHyphenAndTrim(pseudoOutput)

  expect(formatters.atom(snippetObj)).toEqual(output)
})
