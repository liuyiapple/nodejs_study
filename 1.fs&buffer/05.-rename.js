const fs = require('fs')

// 调用 rename
fs.rename('./data.md', '../资料/data.md', (err) => {
  if (err) {
    console.log('重命名失败')
    return
  }
  console.log('重命名成功')
})
