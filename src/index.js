import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './reducers';
import App from './containers/App';

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react')
)

const socket = io('http://104.236.11.41');

socket.on('new-game', (data) => {

});

socket.on('existing-game', (data) => {

});

socket.on('game-action', (data) => {

});
