// 제너레이터를 이용하여 해결.
// yield 가 나올때까지 동작, 다음 iter에서 그다음 yield가 나올때까지 동작, ...

const fs = require('fs')

// 비동기 처리 완료를 기다리고, 다음 함수를 연속해서 호출하는 함수
function read_gfn(g, fname) {
    fs.readFile(fname, 'utf-8', (err, data) => {
        g.next(data)
    })
}

// 제너레이터 함수 정의
const g = (function * () {
    const a = yield read_gfn(g, 'a.txt')
    console.log(a)
    const b = yield read_gfn(g, 'b.txt')
    console.log(b)
    const c = yield read_gfn(g, 'c.txt')
    console.log(c)
})()

run (function * () {
    const a = yield read_gfn(g, 'a.txt')
    console.log(a)
    const b = yield read_gfn(g, 'b.txt')
    console.log(b)
    const c = yield read_gfn(g, 'c.txt')
    console.log(c)
})