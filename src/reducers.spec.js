import { assert } from 'chai'
import reducer from './reducers'

describe('reducer', () => {
    it('should increment on INCREMENT', () => {
        const initialState = {counter: 1};
        const action = {type: 'INCREMENT'};
        assert.equal(reducer(initialState, action).counter, 2);
    });
});
