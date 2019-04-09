import { TodoList } from '@components';
import { AppState } from '@store';
import { fetchTodos, toggleTodo } from '@store/todos';
import { connect } from 'react-redux';
import { DispatchProps, StateProps } from './types';

const mapStateToProps = ({ todos }: AppState): StateProps => ({
    todos: todos.data
});

const mapDispatchToProps: DispatchProps = {
    toggleTodo,
    fetchTodos
};
export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
