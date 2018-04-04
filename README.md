# snippter

Write your snippets in toml, parse them to VsCode (json) and Atom (cson) using the snippter CLI.

Currently a work in progress

## Command

```
snippter parse <filePath> <outputPath>
```

## Example input in toml:

```
scope= 'js'

['Const declaration']
prefix = 'cs'
body = '''
const ${1} = ${2}
'''

['Arrow function declaration']
prefix = 'af'
body = '''
const ${1} = () => {
    ${2}
}
'''
```
