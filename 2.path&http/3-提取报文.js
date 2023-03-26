const http = require('http')

const serve = http.createServer((request, response) => {
  //   console.log(request.method)
  //   console.log(request.url)
  //   console.log(request.httpVersion)
  console.log(request.headers.host)
  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end('<h1>提取报文</h1>')
})

serve.listen(9000, () => {
  console.log('连接服务器成功')
})
