import { Action } from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export type Todos = Todo[];

export interface AddTodoAction extends Action {
    type: typeof ADD_TODO;
    id: string;
    text: string;
}

export interface ToggleTodoAction extends Action {
    type: typeof TOGGLE_TODO;
    id: string;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
