import { fetchTodos, Todos, toggleTodo } from '@store/todos';

export interface StateProps {
    todos: Todos;
}

export interface DispatchProps {
    toggleTodo: typeof toggleTodo;
    fetchTodos: typeof fetchTodos;
}

// We can merge all props here StateProps & DispatchProps & OwnProps and use this in the component
export type Props = StateProps & DispatchProps;
