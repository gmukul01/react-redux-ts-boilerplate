import { AddTodoAction } from '@store/todos';

export interface DispatchProps {
    addTodo: (text: string) => AddTodoAction;
}

// We can merge all props here StateProps & DispatchProps & OwnProps and use this in the component
export type Props = DispatchProps;
