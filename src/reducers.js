import { combineReducers } from 'redux';

const initialCounterState = {
    counter: 0,
};

export const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'SWAP_STATE':
            return action.state;
        default:
            return state;
    }
}

const initialPlayerState = {
    name: null,
    status: 'checking',
};

export const playerReducer = (state = initialPlayerState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {...state, name: action.name};
        default:
            return state;
    }
};

export default combineReducers({
    game: counterReducer,
    player: playerReducer,
})
