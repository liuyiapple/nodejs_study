const http = require('http')
const fs = require('fs')
const serve = http.createServer((request, response) => {
  const res = fs.readFileSync(__dirname + '/table.html')
  response.end(res)
})

serve.listen(9000, () => {
  console.log('服务器启动了')
})
