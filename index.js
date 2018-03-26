#! /usr/bin/env node
const program = require('commander')
const parseTransformWrite = require('./lib/parseTransformWrite')

program
  .version('0.1.0')
  .command('parse <filePath> <outputPath>')
  .description('Parse the provided file and return the snippet')
  .action(parseTransformWrite)

program.parse(process.argv)

if (program.args.length === 0) programm.help()
