const fs = require('fs')

// fs.unlink('./悯农.txt', (err) => {
//   if (err) {
//     console.log('删除失败')
//     return
//   }
//   console.log('删除成功')
// })

fs.rm('./座右铭.txt', (err) => {
  if (err) {
    console.log('删除失败')
    return
  }
  console.log('删除成功')
})
