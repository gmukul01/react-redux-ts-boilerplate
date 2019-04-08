import { TodoForm } from '@components';
import { addTodo } from '@store/todos';
import { connect } from 'react-redux';
import { DispatchProps } from './types';

const mapDispatchToProps: DispatchProps = {
    addTodo
};

export default connect<{}, DispatchProps>(
    null,
    mapDispatchToProps
)(TodoForm);
