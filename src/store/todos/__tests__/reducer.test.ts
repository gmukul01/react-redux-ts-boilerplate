import { addTodo, fetchError, fetchSuccess, toggleTodo } from '../actions';
import { initialState, todos } from '../reducer';

describe('Todos reducer', () => {
    const state = {
        loading: false,
        data: [
            {
                completed: false,
                id: 5,
                title: 'Buy Table'
            }
        ],
        error: ''
    };

    it('should handle ADD_TODO action', () => {
        expect(todos(initialState, addTodo('Buy Table'))).toEqual(state);
    });

    it('should handle TOGGLE_TODO action', () => {
        expect(todos(state, toggleTodo(5))).toEqual({ ...state, data: [{ completed: true, id: 5, title: 'Buy Table' }] });
    });

    it('should handle FETCH_SUCCESS action', () => {
        const data = [
            {
                completed: false,
                id: 1,
                title: 'Buy Milk'
            }
        ];
        expect(todos(state, fetchSuccess(data))).toEqual({ ...state, data: [...state.data, ...data] });
    });

    it('should handle FETCH_ERROR action', () => {
        expect(todos(state, fetchError('Something went wrong'))).toEqual({
            ...state,
            error: 'Something went wrong'
        });
    });
});
