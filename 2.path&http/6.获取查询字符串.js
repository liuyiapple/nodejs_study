const http = require('http')
const serve = http.createServer((request, response) => {
  let url = new URL(request.url, 'http://127.0.0.1')
  console.log(url.searchParams.get('keyword'))
  response.end('url new')
})

serve.listen(9000, () => {
  console.log('服务器开启')
})
