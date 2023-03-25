// 读取状态
const fs = require('fs')

fs.stat('../资料/关于郑州.mp3', (err, data) => {
  if (err) {
    console.log('失败')
    return
  }
  console.log(data.isFile())
  console.log(data.isDirectory())
})
