import React from 'react'
import { connect } from 'react-redux'

const Game = ({counter, increment}) => {
    return ( <div>
        <h1>{counter}</h1>
        <button onClick={increment}>+1</button>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)
