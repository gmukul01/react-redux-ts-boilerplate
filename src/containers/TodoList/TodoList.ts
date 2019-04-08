import { TodoList } from '@components';
import { AppState } from '@store';
import { connect } from 'react-redux';
import { StateProps } from './types';

const mapStateToProps = ({ todos }: AppState): StateProps => ({
    todos
});

export default connect<StateProps>(
    mapStateToProps,
    null
)(TodoList);
