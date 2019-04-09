import { Reducer } from 'redux';
import { TodoActions, TodoActionTypes, TodosState } from './types';

export const initialState: TodosState = {
    loading: false,
    data: [],
    error: ''
};

export const todos: Reducer<TodosState, TodoActions> = (state = initialState, action) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {
                ...state,
                data: [
                    {
                        id: action.id,
                        title: action.title,
                        completed: false
                    },
                    ...state.data
                ]
            };
        case TodoActionTypes.TOGGLE_TODO:
            return {
                ...state,
                data: state.data.map(todo => (todo.id === action.id ? { ...todo, completed: !todo.completed } : todo))
            };

        case TodoActionTypes.FETCH_SUCCESS:
            return {
                ...initialState,
                data: [...state.data, ...action.todos.map(({ id, title, completed }) => ({ id, title, completed }))]
            };

        case TodoActionTypes.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.message
            };

        default:
            return state;
    }
};
