const Mastodon = require('mastodon-api')
const fs = require('fs')
const path = require('path')
const instanceUri = 'https://pawoo.net'

// 파일에서 정보를 읽어들임
const token = fs.readFileSync(path.join(__dirname, 'token.json'))

// 마스토돈 API 클라이언트 실행
const M = new Mastodon({
    access_token: token,
    timeout_ms: 60 * 1000,
    api_url: instanceUri + '/api/v1/'
})

// 타임라인을 읽어들임
M.get('timelines/home', {})
.then(res => {
    const data = res.data
    console.log(data)
})