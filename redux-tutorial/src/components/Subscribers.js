import React from 'react'
import { connect } from 'react-redux';
import { addSubscriber } from '../redux/subscribers/actions';

const Subscribers = (props) => {
    return (
        <div className="items">
            <h2>구독자 수 : {props.count}</h2>
            <button onClick={()=>props.addSubscriber()}>구독하기!</button>
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addSubscriber: ()=>dispatch(addSubscriber())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Subscribers)
