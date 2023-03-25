const fs = require('fs')
const files = fs.readdirSync('./API')

files.forEach((item) => {
  let data = item.split('-')
  let [num, name] = data
  if (-num < 10) {
    num = '0' + num
  }
  let newNum = num + '-' + name
  fs.renameSync(`./API/${item}`, `./API/${newNum}`)
})
