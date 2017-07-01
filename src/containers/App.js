import React from 'react'
import { connect } from 'react-redux'

import NameForm from '../components/NameForm'
import Game from './Game'

const App = ({name, status, setName}) => {
    if (name === null) {
        return <NameForm handleSubmit={setName} />
    } else {
        let internals;
        if (status === 'checking') {
            internals = <p>{'Checking for existing games...'}</p>
        } else {
            internals = <Game />
        }
        return (
            <div>
                <h1>{'Hello ' + name}</h1>
                {internals}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        status: state.status,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch({type: 'SET_NAME', name}),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
