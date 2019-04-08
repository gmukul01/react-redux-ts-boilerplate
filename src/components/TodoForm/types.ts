import { AddTodoAction } from '@store/todos';

export interface Props {
    addTodo: (value: string) => AddTodoAction;
}
