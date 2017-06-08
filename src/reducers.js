const initialState = {
    name: null,
    counter: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {...state, name: action.name};
        case 'INCREMENT':
            return {...state, counter: state.counter + 1};
        default:
            return state;
    }
}
