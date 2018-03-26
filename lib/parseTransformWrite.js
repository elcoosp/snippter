const writeFile = require('write')
const to = require('await-to-js').to
const fs = require('async-file')
const toml = require('toml')
const formatTo = require('./editorFormatters')
const log = require('./log')

const parseToml = async filePath => {
  const file = await fs.readFile(filePath)
  return toml.parse(file)
}

const formatAndWrite = (data, outputPath) => async editor => {
  const formattedData = formatTo(editor)(data)
  ;[e, data] = await to(writeFile(outputPath, formattedData))
  e
    ? log('error')(e)
    : log('success')(
        `Your snippet for ${editor} was successfully written to ${outputPath} !`
      )
}

module.exports = async (filePath, outputPath) => {
  ;[e, data] = await to(parseToml(filePath))
  if (e) log('error')(e)
  else {
    ;[{ vsCode: 'json' }, { atom: 'cson' }].forEach(editor => {
      ;[editorName, fileType] = Object.entries(editor)[0]

      formatAndWrite(data, `${outputPath}/snippets.${fileType}`)(editorName)
    })
  }
}
