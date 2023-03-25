// 1. 导入 fs模块
const fs = require('fs')
// 异步写入
fs.writeFile('./座右铭.txt', '你好，座右铭', (err) => {
  // 成功 err 为null
  // 失败就是err 的报错
  //   console.log(err)
})

// 同步写入
fs.writeFileSync('./data.md', 'test')

// 追加写入 异步
fs.appendFile('./座右铭.txt', '追加的', (err) => {
  if (err) {
    console.log('写入失败')
    return
  }
  //   console.log('追加写入成功')
})

// 同步
fs.appendFileSync('./data.md', '\n ## const a = 1')

// writeFile 追加写入
fs.writeFile('./data.md', '\n ## const b = 3', { flag: 'a' }, (err) => {
  if (err) return
  //   console.log('写入成功 ')
})

// 留式写入 适合写入频繁的写入次数
const ws = fs.createWriteStream('./悯农.txt')

ws.write('锄禾日当午\n')
ws.write('汗滴禾下土\n')
ws.write('谁知盘中餐\n')
ws.write('粒粒皆辛苦\n')

ws.close()

// 读取 异步读取
fs.createReadStream('./data.md', (err, data) => {
  console.log(data.toString())
})
