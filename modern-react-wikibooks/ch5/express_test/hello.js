// 익스프레스 모듈 읽어들이기
const express = require('express')
const app = express()
const portNo = 3000

// 접근이 있을 때
app.get('/', (req, res, next) => {
    res.send('Hello world')
})

// 서버 실행
app.listen(portNo, () => {
    console.log('서버 실행 완료: ', `http://localhost:${portNo}`)
})