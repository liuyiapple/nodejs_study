const fs = require('fs')
fs.readFile('./悯农.txt', (err, data) => {
  if (err) {
    console.log('读取失败')
    return
  }
  console.log(data.toString())
})

// 同步读取
const data = fs.readFileSync('./悯农.txt')
console.log(data.toString())
