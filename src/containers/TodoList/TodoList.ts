import { TodoList } from '@components';
import { AppState } from '@store';
import { toggleTodo } from '@store/todos';
import { connect } from 'react-redux';
import { DispatchProps, StateProps } from './types';

const mapStateToProps = ({ todos }: AppState): StateProps => ({
    todos
});

const mapDispatchToProps: DispatchProps = {
    toggleTodo
};
export default connect<StateProps, DispatchProps>(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);
