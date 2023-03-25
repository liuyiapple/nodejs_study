const fs = require('fs')
const process = require('process')
// 文件读取写入
const data = fs.readFileSync('../资料/关于郑州.mp3')

fs.writeFileSync('../资料/关于郑州-2.mp3', data)

console.log(process.memoryUsage()) // 33MB
// 留式写入

// const rs = fs.createReadStream('../资料/关于郑州.mp3')
// const ws = fs.createWriteStream('../资料/关于郑州-3.mp3')

// rs.on('data', (chunk) => {
//   ws.write(chunk)
// })

// rs.on('end', () => {
//   console.log(process.memoryUsage()) // 使用内存总量 34 MB
// })

// 写入加读取
ra.pipe(ws)
