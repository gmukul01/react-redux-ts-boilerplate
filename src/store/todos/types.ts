export enum TodoActionTypes {
    ADD_TODO = '@@todos/ADD_TODO',
    TOGGLE_TODO = '@@todos/TOGGLE_TODO',
    FETCH_REQUEST = '@@todos/FETCH_REQUEST',
    FETCH_SUCCESS = '@@todos/FETCH_REQUEST',
    FETCH_ERROR = '@@todos/FETCH_ERROR'
}

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export type Todos = Todo[];
