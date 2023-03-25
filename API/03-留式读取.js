const fs = require('fs')
const rs = fs.createReadStream('../资料/关于郑州.mp3')

// 绑定时间
rs.on('data', (chunk) => {
  console.log(chunk.length)
})

// end 可选事件

rs.on('end', () => {
  console.log('读取完成')
})
