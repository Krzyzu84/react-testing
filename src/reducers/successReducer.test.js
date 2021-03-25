import {actionTypes} from '../actions';
import successReducer from './successReducer'

test('should return initnial state of false when no acttion is passed', () => {
    const newState = successReducer(undefined, {type: null});
    expect(newState).toBe(false);
});

test('should return state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
    expect(newState).toBe(true);
})
