import { Action } from 'redux';

export enum TodoActionTypes {
    ADD_TODO = '@@todos/ADD_TODO',
    TOGGLE_TODO = '@@todos/TOGGLE_TODO',
    FETCH_REQUEST = '@@todos/FETCH_REQUEST',
    FETCH_SUCCESS = '@@todos/FETCH_SUCCESS',
    FETCH_ERROR = '@@todos/FETCH_ERROR'
}

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export type Todos = Todo[];

export interface TodosState {
    readonly loading: boolean;
    readonly data: Todos;
    readonly error?: string;
}

export interface AddTodoAction extends Action {
    id: number;
    title: string;
    type: typeof TodoActionTypes.ADD_TODO;
}

export interface ToggleTodoAction extends Action {
    id: number;
    type: typeof TodoActionTypes.TOGGLE_TODO;
}

export interface FetchTodosAction extends Action {
    type: typeof TodoActionTypes.FETCH_REQUEST;
}

export interface FetchSuccessAction extends Action {
    todos: Todos;
    type: typeof TodoActionTypes.FETCH_SUCCESS;
}

export interface FetchErrorAction extends Action {
    message: string;
    type: typeof TodoActionTypes.FETCH_ERROR;
}

export type TodoActions = AddTodoAction | ToggleTodoAction | FetchTodosAction | FetchSuccessAction | FetchErrorAction;
