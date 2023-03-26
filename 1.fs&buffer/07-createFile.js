const fs = require('fs')
// fs.mkdir('./public', (err) => {
//   if (err) {
//     console.log('失败')
//     return
//   }
//   console.log('成功 ')
// })

// 递归创建
// fs.mkdir('./a/b/c', { recursive: true }, (err) => {
//   if (err) {
//     console.log('失败')
//     return
//   }
//   console.log('成功 ')
// })

// 读取文件
// fs.readdir('../资料', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

// 删除文件夹
// fs.rmdir('./a/b/c', (err) => {
//   if (err) {
//     console.log('删除失败')
//     return
//   }
//   console.log('删除成功')
// })

fs.rmdir('./public', { recursive: true }, (err) => {
  if (err) {
    console.log('删除失败')
    return
  }
  console.log('删除成功')
})
