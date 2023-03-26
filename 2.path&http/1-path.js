const fs = require('fs')
const path = require('path')
fs.writeFileSync(__dirname + '/index.html', 'love')
// console.log(__dirname + 'index.html')
console.log(__filename) // 文件目录
console.log(path.sep) // 系统的分割符
const str = '/Users/liu/learn/node_code/2.path&http/1-path.js'

console.log(path.parse(str))
/* 
{
  root: '/',
  dir: '/Users/liu/learn/node_code/2.path&http',
  base: '1-path.js',
  ext: '.js',
  name: '1-path'
}
*/

// basename

console.log(path.basename(str)) // 1-path.js

console.log(path.extname(str)) // .js
