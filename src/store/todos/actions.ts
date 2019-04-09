import { TodoActionTypes } from './types';

let nextTodoId = 0;

export const addTodo = (text: string) => ({
    text,
    id: nextTodoId++,
    type: TodoActionTypes.ADD_TODO
});

export const toggleTodo = (id: number) => ({
    id,
    type: TodoActionTypes.TOGGLE_TODO
});
