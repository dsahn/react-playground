import React from 'react'
import ReactDOM from 'react-dom'
import { Actions } from './actions'
import { nameStore, messageStore } from './stores'

// view 정의
class AppView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: '', message: ''}
        // view와 store를 연결
        nameStore.onChange = () => {
            this.setState({name: nameStore.name})
        }
        messageStore.onChange = () => {
            this.setState({message: messageStore.message})
        }
    }
    // View 에서는 Action을 던짐
    render() {
        console.log('View.render')
        return (<div>
            <div>
                <input
                    value={this.state.name}
                    onChange={(e) => Actions.changeName(e.target.value)}></input>
                <button onclick={(e)=>Actions.submitName()}>등록</button>
            </div>
            <div>{this.state.message}</div>
        </div>)
    }
}

// DOM 의 내용을 변경
ReactDOM.render(
    <AppView />,
    document.getElementById('root')
)