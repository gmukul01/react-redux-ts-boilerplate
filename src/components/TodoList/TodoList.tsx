import List from '@components/List';
import Text from '@components/Text';
import { Props } from '@containers/TodoList/types';
import React, { MouseEvent, useEffect } from 'react';

const TodoList: React.FC<Props> = ({ todos, toggleTodo, fetchTodos }) => {
    useEffect(() => {
        fetchTodos();
    }, []);

    const handleOnTodoClick = (id: number) => (e: MouseEvent) => toggleTodo(id);

    return (
        <List>
            {todos.map(todo => (
                <Text key={todo.id} lineThrough={todo.completed} onClick={handleOnTodoClick(todo.id)}>
                    {todo.title}
                </Text>
            ))}
        </List>
    );
};

export default TodoList;
