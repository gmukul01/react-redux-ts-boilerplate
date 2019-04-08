import { ADD_TODO, AddTodoAction, TOGGLE_TODO, ToggleTodoAction } from './types';

let nextTodoId = 0;

export const addTodo = (text: string): AddTodoAction => ({
    text,
    id: nextTodoId++,
    type: ADD_TODO
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
    id,
    type: TOGGLE_TODO
});
