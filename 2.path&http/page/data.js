const http = require("http")
const fs = require("fs")
const path = require("path")
// 声明一个变量
let mimes = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    json: "application/json",
    gif: "image/gif",
    mp4: "video/mp4",
    mp3: "audio/mp3",
    png: "image/png",
    jpg: "image/jpeg",
}
const serve = http.createServer((request, response) => {
    if(request.method === "GET") {
        response.statusCode = 405;
        response.end("<h1>不对</h1>")
        return
    }
     // res.setHeader("content-type","text/html;charset=utf-8")
    let {pathname} = new URL(request.url, "http://127.0.0.1")
    let filePath = __dirname + pathname
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.setHeader("content-type", "text/html;charset=utf-8")
            switch (err.code) {
                case "ENOENT":
                    response.statusCode = 404;
                    response.end("<h1>404 NOTFOUND</h1>");
                    break;
                case "EPERM":
                    response.statusCode = 401;
                    response.end("<h1>访问权限不够</h1>");
                    break
                default:
                    response.statusCode = 500
                    response.end("服务器错误")
                    return;
            }
            return
        }

        let ext = path.extname(filePath).slice(1)
        // 获取对应的类型
        let type = mimes[ext]
        if (type) {
            response.setHeader("content-type", type)
            response.end(data)
        } else {
            response.setHeader("content-type", "application/octet-stream")
        }
        response.end("未找到")
    })
})

serve.listen(9000, () => {
    console.log("服务器开启")
})