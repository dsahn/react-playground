import React, { Component } from 'react'
class App extends Component {
  // 마운트
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  // 변경
  /* @deprecated — 16.3, use static getDerivedStateFromProps instead; will stop working in React 17
    @see — https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
    @see — https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path */
  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate')
    return true
  }
  /* @deprecated — 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17
    @see — https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update */
  componentWillUpdate () {
    console.log('componentWillUpdate')
  }
  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  // 언마운트
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render () {
    console.log('render')
    const setStateHandler = (e) => {
      console.log('* call setState()')
      this.setState({r: Math.random()})
    }
    return (
      <div>
        <button onClick={setStateHandler}>setState</button>
      </div>
    )
  }
}

export default App;
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/