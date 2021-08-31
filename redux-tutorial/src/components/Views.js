import React from 'react'
import { connect } from 'react-redux';
import { addView } from '../redux';

const Views = ({ count, addView }) => {
    return (
        <div className="items">
            <h2>조회 수 : {count}</h2>
            <button onClick={() => addView()}>조회하기!</button>
        </div>
    )
}

const mapStateToProps = ({ views }) => {
    return {
        count: views.count
    }
}

const mapDispatchToProps = {
    addView
}

export default connect(mapStateToProps, mapDispatchToProps)(Views)
