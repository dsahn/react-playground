import React, {Component} from 'react'

// 우편번호 입력 컴포넌트
export default class ZipInput extends Component {
    constructor(props) {
        super(props)
        const v = (this.props.value) ? this.props.value : ''
        // 상태 초기화
        this.state = {
            value: v,
            isOk: this.checkValue(v)
        }
    }
    // 패턴(5자리) 에 맞는지 확인
    checkValue(s) {
        const zipPattern = /^\d{5}$/
        return zipPattern.test(s)
    }
    handleChange (e) {
        const v = e.target.value
        // 숫자 이외의 값을 제거
        const newValue = v.replace(/[^0-9]+/g, '')
        const newIsOk = this.checkValue(newValue)
        // 상태에 설정
        this.setState({
            value: newValue,
            isOk: newIsOk
        })
        // 이벤트 실행
        if (this.props.onChange) {
            this.props.onChange({
                target: this,
                value: newValue,
                isOk: newIsOk
            })
        }
    }
    // 프로퍼티가 변경되었을 때
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
            isOk: this.checkValue(nextProps.value)
        })
    }
    // 렌더링
    render() {
        const msg = this.renderStatusMessage()
        return (<div>
            <label>우편번호: <br/>
                <input type="text"
                placeholder='우편 번호를 입력해주세요'
                value={this.state.value}
                onChange={e=>this.handleChange(e)} />
                {msg}
            </label>
        </div>)
    }
    // 입력이 제대로 됐는지 출력하는 메시지
    renderStatusMessage() {
        // 메시지에 적용할 스타일
        const so = {
            margin: '8px',
            padding: '8px',
            color: 'white'
        }
        let msg = null
        if (this.state.isOk) { // OK때
            so.backgroundColor = 'green'
            msg = <span style={so}>OK</span>
        } else { // 빈 문자열이라면 출력 x, NG때 출력
            if (this.state.value !== '') {
                so.backgroundColor = 'red'
                msg = <span style={so}>NG</span>
            }
        }
        return msg
    }
}