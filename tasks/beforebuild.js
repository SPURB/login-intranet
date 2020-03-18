const fs = require('fs-extra')

fs.emptyDirSync('./dist')

fs.readdir('./api/', (err, files) => {
  if (err) throw err

  for (const file of files) {
    fs.copySync('./api/' + file, './dist/api/' + file)
  }
})
