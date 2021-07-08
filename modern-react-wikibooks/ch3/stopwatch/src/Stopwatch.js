import React, { Component } from 'react'
// import './Stopwatch.css'

// stopwatch 컴포넌트 정의
class Stopwatch extends Component {
    constructor(props) {
        super(props)
        this.state = { // 초깃값 설정
            isLive: false,
            currTime: 0,
            startTime: 0
        }
        this.timerId = 0
        this.timerId = setInterval((e) => {
            this.tick()
        }, 1000)
    }
    // 마운트했을 때
    // deprecated warning이 떠서 바꿔봄
    // componentWillMount() {
        //  state를 초기화하는 경우라면, 보통은 constructor()를 사용하는 것이 좋습니다.
        //  https://ko.reactjs.org/docs/react-component.html#unsafe_componentwillmount
    // }
    // 언마운트했을때
    componentWillUnmount() {
        clearInterval(this.timerId)
    }
    // 매 초 실행
    tick () {
        if (this.state.isLive) {
            const v = new Date().getTime()
            this.setState({curTime: v})
        }
    }
    // 시작/중지 버틀을 클릭했을 때
    clickHandler(e) {
        // 중지할 때
        if (this.state.isLive) {
            this.setState({isLive: false})
            return
        }
        // 시작할 때
        const v = new Date().getTime()
        this.setState({
            curTime: v,
            startTime: v,
            isLive: true
        })
    }
    // 출력할 시계를 생성
    getDisp() {
        const s = this.state
        const delta = s.curTime - s.startTime
        const t = Math.floor(delta / 1000)
        const ss = t % 60
        const m = Math.floor(t / 60)
        const mm = m % 60
        const hh = Math.floor(mm / 60)
        const z = (num) => {
            const s = '00' + String(num)
            return s.substr(s.length - 2, 2)
        }
        return (
            <span className='disp'>
                {z(hh)}:{z(mm)}:{z(ss)}
            </span>
        )
    }
    // 화면 렌더링
    render () {
        let label = 'Start'
        if (this.state.isLive) {
            label = 'Stop'
        }
        const disp = this.getDisp()
        const fclick = (e) => this.clickHandler(e)
        return (
            <div className='Stopwatch'>
                <div>{disp}</div>
                <button onClick={fclick}>{label}</button>
            </div>
        )
    }
}
export default Stopwatch