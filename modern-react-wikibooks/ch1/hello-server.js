// http 모듈 읽어오기
const http = require('http')

// 웹 서버 실행
const svr = http.createServer(handler)
svr.listen(8081)

//서버의 접근이 있을 때 처리
function handler (req, res) {
    console.log('url: ', req.url)
    console.log('method: ', req.method)
    // write http header
    res.writeHead(200, {'Content-Type': 'text/html'})
    // write http body
    res.end('<h1>Hello, World!</h1>\n')
}