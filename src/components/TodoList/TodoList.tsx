import List from '@components/List';
import Text from '@components/Text';
import { Props } from '@containers/TodoList/types';
import React, { MouseEvent } from 'react';

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
    const handleOnTodoClick = (id: number) => (e: MouseEvent) => toggleTodo(id);
    return (
        <List>
            {todos.map(todo => (
                <Text key={todo.id} lineThrough={todo.completed} onClick={handleOnTodoClick(todo.id)}>
                    {todo.text}
                </Text>
            ))}
        </List>
    );
};

export default TodoList;
