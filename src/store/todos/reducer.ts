import { ADD_TODO, TodoActionTypes, Todos, TOGGLE_TODO } from './types';

export const initialState: Todos = [];

export const todos = (state: Todos = initialState, action: TodoActionTypes): Todos => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo));
        default:
            return state;
    }
};
