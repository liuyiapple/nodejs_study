const http = require("http")
const fs = require("fs")
const path = require("path");
const serve = http.createServer((request, response) => {
    // response.setHeader("content-type", "text/html;charset=utf-8")
    // const css = fs.readFileSync(__dirname + "/table.css")
    let {pathname} = new URL(request.url,"http://127.0.0.1")
    if (pathname === '/') {
        const html = fs.readFileSync(__dirname + "/table.html")
        response.end(html)

    } else if (pathname === "/table.css") {
        const css = fs.readFileSync(__dirname + "/table.css")
        response.end(css)
    } else if (pathname === "/table.js") {
        const js = fs.readFileSync(__dirname + "/table.js")
        response.end(js)

    } else {
        response.end("NOT FOUND")
    }
})
serve.listen(9000, () => {
    console.log("服务器启动")
})