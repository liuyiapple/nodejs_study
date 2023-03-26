const http = require('http')
const fs = require('fs')
const serve = http.createServer((request, response) => {
  const files = fs.readFileSync('table.html')
  response.end(files)
})

serve.listen(9000, () => {
  console.log('服务器响应了')
})
