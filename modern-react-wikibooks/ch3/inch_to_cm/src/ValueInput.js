import React, {Component} from 'react'

// 숫자 입력 컴포넌트
export default class ValueInput extends Component {
    constructor(props) {
        super(props)
        // 프로퍼티로 초깃값을 설정합니다.
        this.state = {
            value: this.props.value
        }
    }
    // 값이 사용자에 의해 변경됐을 때
    handleChange(e) {
        const v = e.target.value
        // 숫자 이외의 값을 제거
        const newValue = v.replace(/[^0-9.]+/g, '')
        // 상태에 설정합니다
        this.setState({value: newValue})
        // 이벤트 실행
        if (this.props.onChange) { // 메소드가 존재하면인가?
            this.props.onChange({
                target: this,
                value: newValue
            })
        }
    }
    // 프로퍼티가 변경됐을 때
    static getDerivedStateFromProps(props, state) {
        return ({ value: props.value })
    }
    // 렌더링
    render() {
        return (<div>
            <label>
                {this.props.title}: <br />
                <input type='text'
                    value={this.state.value}
                    onChange={e=>this.handleChange(e)} />
            </label>
        </div>)
    }
}