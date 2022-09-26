const { googleFormsToJson } = require('react-google-forms-hooks')
const fs = require('fs')
const path = require('path')

const saveJsonToFile = (filename, json) => {
  const filePath = path.resolve(__dirname, filename)
  fs.writeFile(filePath, JSON.stringify(json), 'utf8', function (err) {
    if (err) throw err
  })
}

const getForm = async () => {
  const result = await googleFormsToJson("https://forms.gle/fsRswqcPRV3qQtzv9")
  // console.log("result", result)
  saveJsonToFile('form.json', result)
}

getForm()