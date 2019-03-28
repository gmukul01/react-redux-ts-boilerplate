import { ADD_TODO, AddTodoAction, TOGGLE_TODO, ToggleTodoAction } from './types';

export const addTodo = (id: string, text: string): AddTodoAction => ({
    id,
    text,
    type: ADD_TODO
});

export const toggleTodo = (id: string): ToggleTodoAction => ({
    id,
    type: TOGGLE_TODO
});
