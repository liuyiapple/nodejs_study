// alloc
const buf = Buffer.alloc(10)

// allocUnsafe
// 并不会对就数据进行清除
const buf2 = Buffer.allocUnsafe(10)

// from 对应ASCII 表
const buf3 = Buffer.from('hello')
const buf4 = Buffer.from([1, 2, 3])

// 操作 buffer
const buf5 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
//  转换字符串 使用utf-8
// console.log(buf5.toString())

let buf6 = Buffer.from('hello')
console.log(buf6[0].toString(2))
