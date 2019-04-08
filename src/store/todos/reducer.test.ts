import { addTodo, toggleTodo } from './actions';
import { initialState, todos } from './reducer';

describe('Todos reducer', () => {
    const state = [
        {
            completed: false,
            id: 0,
            text: 'Buy Table'
        }
    ];

    it('should handle ADD_TODO action', () => {
        expect(todos(initialState, addTodo('Buy Table'))).toEqual(state);
    });

    it('should handle TOGGLE_TODO action', () => {
        expect(todos(state, toggleTodo(0))).toEqual([{ ...state[0], completed: true }]);
    });
});
