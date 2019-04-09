import { AddTodoAction, FetchErrorAction, FetchSuccessAction, FetchTodosAction, TodoActionTypes, Todos, ToggleTodoAction } from './types';

let nextTodoId = 5;

export const addTodo = (title: string): AddTodoAction => ({
    title,
    id: nextTodoId++,
    type: TodoActionTypes.ADD_TODO
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
    id,
    type: TodoActionTypes.TOGGLE_TODO
});

export const fetchTodos = (): FetchTodosAction => ({
    type: TodoActionTypes.FETCH_REQUEST
});

export const fetchSuccess = (todos: Todos): FetchSuccessAction => ({
    todos,
    type: TodoActionTypes.FETCH_SUCCESS
});

export const fetchError = (message: string): FetchErrorAction => ({
    message,
    type: TodoActionTypes.FETCH_ERROR
});
