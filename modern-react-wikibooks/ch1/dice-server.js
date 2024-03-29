// http 모듈 읽어들이기
const http = require('http')
const ctype = { 'Content-Type': 'text/html;charset=utf-8' }

// run web server
const svr = http.createServer(handler)
svr.listen(8081)

function handler(req, res) {
    // URL 구분
    const url = req.url
    // 최상위 페이지일 때
    if (url === '/' || url === '/index.html') {
        showIndexPage(req, res)
        return
    }
    // 주사위 페이지일 때
    if (url.substr(0, 6) === '/dice/') {
        showDicePage(req, res)
        return
    }
    // 그 밖의 경우
    res.writeHead(404, ctype)
    res.end('404 not found')
}

// 인덱스 페이지에 접근했을 경우
function showIndexPage(req, res) {
    // HTTP 헤더 출력
    res.writeHead(200, ctype)
    // 응답 본문 출력
    const html = '<h1>주사위 페이지 안내</h1>\n' +
        '<p><a href="/dice/6">6면체 주사위</a></p>' +
        '<p><a href="/dice/12">12면체 주사위</a></p>'
    res.end(html)
}

// 주사위 페이지에 접근했을 때
function showDicePage(req, res) {
    // HTTP 헤더 출력
    res.writeHead(200, ctype)
    // 몇 면체 주사위가 필요한지 확인
    const a = req.url.split('/')
    const num = parseInt(a[2])
    // 임의 숫자 생성
    const rnd = Math.floor(Math.random() * num) + 1
    //응답 본문 출력
    res.end('<p style="font-size:72px;">' + rnd + '</p>')
}