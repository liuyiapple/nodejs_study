const http = require('http')

const url = require('url')

const serve = http.createServer((request, response) => {
  let res = url.parse(request.url, true)

  let keyword = res.query.keyword
  console.log(keyword, 'keyword')
  response.end('url')
})

serve.listen(9000, () => {
  console.log('服务器已开启')
})
