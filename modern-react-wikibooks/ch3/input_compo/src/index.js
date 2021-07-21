import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import FormInput from './FormInput'

class CustomForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      tel: '',
      allok: false
    }
    // 이건 왜 state가 아닌가??
    this.oks = {}
  }

  handleChange(e) {
    // 모든 항목이 OK인지 확인
    this.oks[e.name] = e.isOK
    this.setState({
      [e.name]: e.value,
      allok: (this.oks['email'] && this.oks['tel'])
    })
  }
  handleSubmit(e) {
    window.alert(JSON.stringify(this.state))
    // 동작의 default를 막아주는 역할로, JS에서는 return false 로 사용하던걸 대신함
    e.preventDefault()
  }
  render() {
    const doChange = e=>this.handleChange(e)
    const doSubmit = e=>this.handleSubmit(e)
    // 이메일 패턴
    const emailPat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    // ASCII 문자 이외 전부
    const asciiFilter = /[^\u0020-\u007e]+/g
    return (
      <form onSubmit={doSubmit}>
        <FormInput
          name="email"
          label="메일 주소"
          value={this.state.email}
          filter={asciiFilter}
          pattern={emailPat}
          onChange={doChange}
        />
        <FormInput
          name="tel"
          label="전화 번호"
          value={this.state.tel}
          filter={/[^0-9-()+]/g}
          pattern={/^[0-9-()+]+$/}
          onChange={doChange}
        />
        <input type="submit" value="전송" disabled={!this.state.allok} />
      </form>
    );
  }
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <CustomForm />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
