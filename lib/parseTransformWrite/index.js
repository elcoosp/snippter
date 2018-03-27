const writeFile = require('write'),
  to = require('await-to-js').to,
  fs = require('async-file'),
  toml = require('toml'),
  formatTo = require('../editorFormatters'),
  { EDITORS } = require('../constants'),
  log = require('../log')

const parseToml = async filePath => {
  const file = await fs.readFile(filePath)
  return toml.parse(file)
}

const formatAndWrite = (data, outputPath) => async editor => {
  const formattedData = formatTo[editor](data)
  ;[e, data] = await to(writeFile(outputPath, formattedData))
  e
    ? log('error')(e)
    : log('success')(
        `Your snippet for ${editor} was successfully written to ${outputPath} !`
      )
}

const parseTransformWrite = async (filePath, outputPath) => {
  ;[e, data] = await to(parseToml(filePath))
  console.log(data)

  e
    ? log('error')(e)
    : EDITORS.forEach(({ editorName, fileType }) =>
        formatAndWrite(
          data,
          `${outputPath}/snippets-${editorName}.${fileType}`
        )(editorName)
      )
}

module.exports = parseTransformWrite
