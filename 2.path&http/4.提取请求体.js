const http = require('http')

const serve = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
  let body = '' // 本身是个Buffer
  request.on('data', (chunk) => {
    body += chunk.toString()
  })

  request.on('end', () => {
    console.log(body)

    response.end('<h1>提取请求体</h1>')
  })
})

serve.listen(9000, () => {
  console.log('服务器开启')
})
