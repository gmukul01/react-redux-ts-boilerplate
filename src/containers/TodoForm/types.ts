import { addTodo } from '@store/todos';

export interface DispatchProps {
    addTodo: typeof addTodo;
}

// We can merge all props here StateProps & DispatchProps & OwnProps and use this in the component
export type Props = DispatchProps;
