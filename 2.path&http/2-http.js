// 1. 导入 http 模块
const http = require('http')

// 2. 创建 服务器对象
const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('<h1>你好</h1>') // 设置响应体
})

server.listen(9000, () => {
  console.log('服务已经启动')
})
