import React from 'react'

import { connect } from 'react-redux';

const Subscribers = (props) => {
    return (
        <div className="items">
            <h2>구독자 수 : {props.count}</h2>
            <button>구독하기!</button>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(Subscribers)
