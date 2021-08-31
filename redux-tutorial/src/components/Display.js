import React from 'react'
import { connect } from 'react-redux'

const Display = ({ count }) => {
    return (
        <div>
            <p>구독자 수 : {count} </p>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.views.count
    }
}

export default connect(mapStateToProps)(Display)
