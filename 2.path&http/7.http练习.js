const http = require('http')

const serve = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
  let { method } = request
  let { pathname } = new URL(request.url, 'http://127.0.0.1')
  if (method === 'GET' && pathname === '/login') {
    response.end('登陆页面')
  } else if (method === 'GET' && pathname === '/reg') {
    response.end('注册页面')
  } else {
    response.end('没找到')
  }
})

serve.listen(9000, () => {
  console.log('服务器启动了')
})
