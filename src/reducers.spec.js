import { assert } from 'chai'
import { counterReducer } from './reducers'

describe('counterReducer', () => {
    it('increments on INCREMENT', () => {
        const initialState = {counter: 1};
        const action = {type: 'INCREMENT'};
        assert.equal(counterReducer(initialState, action).counter, 2);
    });
    it('swaps the full state on SWAP_STATE', () => {
        const initialState = {counter: 1};
        const action = {type: 'SWAP_STATE', state: {a: 4}};
        assert.deepEqual(counterReducer(initialState, action), {a: 4});
    });
});
