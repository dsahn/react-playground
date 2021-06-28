// 모듈을 읽어들임
const fs = require('fs')
const request = require('request')

// request 모듈을 사용해 파일을 다운로드
request('http://uta.pw/shodou/img/28/214.png').pipe(fs.createWriteStream('test.png'))