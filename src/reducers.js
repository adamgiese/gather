const initialGameState = {
    counter: 0,
    name: null,
    status: 'checking',
};

export default (state = initialGameState, action) => {
    switch (action && action.type) {
        case 'SET_NAME':
            return {...state, name: action.name};
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        case 'NEW_GAME':
            return {...state, counter: 0};
        case 'JOIN_GAME':
            if (state.status === 'checking') {
                return {...state, status: 'joined', counter: action.counter};
            } else {
                return state;
            }
        default:
            return state;
    }
}
