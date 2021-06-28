const fs = require('fs')

// Promise를 반환하는 함수를 정의
function readFile_pr(fname) {
    return new Promise((resolve) => {
        fs.readFile(fname, 'utf-8', (err, s) => {
            resolve(s)
        })
    })
}

// 차례대로 텍스트 파일 읽어들이기
readFile_pr('a.txt')
.then((text) => {
    console.log('a.text has been read. ', text)
    return readFile_pr('b.txt') // Promise 객체를 반환함
})
.then((text) => {
    console.log('b.text has been read. ', text)
    return readFile_pr('c.txt')
})
.then((text) => {
    console.log('c.text has been read. ', text)
})