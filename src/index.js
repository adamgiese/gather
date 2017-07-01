import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import reducer from './reducers';
import App from './containers/App';

const socketMiddleware = ({ getState, dispatch }) => next => action => {
    if (action && !action.from && action.type === 'INCREMENT') {
        socket.emit('game-action', action);
    }
    next(action);
}

const enhancer = applyMiddleware(socketMiddleware);
const initialState = reducer();

const store = createStore(reducer, initialState, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('react')
)

const socket = io('http://104.236.11.41');

socket.on('new-game', (data) => {
    store.dispatch({type: 'NEW_GAME'});
});

socket.on('game-state', (counter) => {
    store.dispatch({type: 'JOIN_GAME', counter});
});

socket.on('request-game', (data) => {
    const currentGameState = store.getState()
    socket.emit('game-state', currentGameState.counter)
});

socket.on('game-action', (action) => {
    store.dispatch(action);
});
