const http = require('http')

const serve = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.statusCode = 300
  response.statusMessage = 'love you'
  response.end('<h1>设置响应码</h1>')
})

serve.listen(9000, () => {
  console.log('服务器启动了')
})
