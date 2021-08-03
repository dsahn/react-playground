import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// 리액트 라우터를 사용해 메인 컴포넌트를 정의
const HelloApp = () => (
    <Router>
        <div style={{margin: 20}}>
            <Route exact path='/' component={Home} />
            <Route path='/ko' component={HelloKorean}></Route>
            <Route path='/ja' component={HelloJapanese}></Route>
            <Route path='/en' component={HelloEnglish}></Route>
        </div>
    </Router>
)

// 홈 화면에 출력할 컴포넌트 정의
const Home = () => (
    <div>
        <h1>Hello App</h1>
        <p>언어를 선택해주세요.</p>
        <ul>
            <li><a href="/ko">korean</a></li>
            <li><a href="/ja">japanese</a></li>
            <li><a href="/en">english</a></li>
        </ul>
    </div>
)

// 한국어 출력 컴포넌트 정의
const HelloKorean = () => (
    <div>
        <h1>안녕하세요</h1>
        <p><a href="/">뒤로가기</a></p>
    </div>
)

// 일본어 출력 컴포넌트 정의
const HelloJapanese = () => (
    <div>
        <h1>곤니찌와</h1>
        <p><a href="/">뒤로가기</a></p>
    </div>
)

// 영어 출력 컴포넌트 정의
const HelloEnglish = () => (
    <div>
        <h1>Hello</h1>
        <p><a href="/">Back</a></p>
    </div>
)

export default HelloApp