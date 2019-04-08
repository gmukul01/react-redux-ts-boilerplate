import { Todos } from '@store/todos';

export interface StateProps {
    todos: Todos;
}

// We can merge all props here StateProps & DispatchProps & OwnProps and use this in the component
export type Props = StateProps;
