import { Action } from 'redux';

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export type Todos = Todo[];

export interface AddTodoAction extends Action {
    type: typeof ADD_TODO;
    id: number;
    text: string;
}

export interface ToggleTodoAction extends Action {
    type: typeof TOGGLE_TODO;
    id: number;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;
