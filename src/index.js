import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers';

const App = ({name, counter, setName, increment}) => {
    if (name === null) {
        return <NameForm handleSubmit={setName} />
    } else {
        return <div>
            <h1>{'Hello ' + name}</h1>
            <h1>{counter}</h1>
            <button onClick={increment}>+1</button>
        </div>
    }
}

class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    this.props.handleSubmit(this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        name: state.name,
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => dispatch({type: 'SET_NAME', name}),
        increment: () => dispatch({type: 'INCREMENT'}),
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('react')
)
