import { Reducer } from 'redux';
import { TodoActionTypes, Todos } from './types';

export const initialState: Todos = [];

export const todos: Reducer<Todos> = (state = initialState, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TodoActionTypes.TOGGLE_TODO:
            return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
        default:
            return state;
    }
};
