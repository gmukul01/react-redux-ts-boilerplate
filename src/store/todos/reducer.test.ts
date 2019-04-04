import { addTodo, toggleTodo } from './actions';
import { initialState, todos } from './reducer';

describe('Todos reducer', () => {
    const state = [
        {
            completed: false,
            id: '1',
            text: 'Buy Table'
        }
    ];

    it('should handle ADD_TODO action', () => {
        expect(todos(initialState, addTodo('1', 'Buy Table'))).toEqual(state);
    });

    it('should handle TOGGLE_TODO action', () => {
        expect(todos(state, toggleTodo('1'))).toEqual([{ ...state[0], completed: true }]);
    });
});
