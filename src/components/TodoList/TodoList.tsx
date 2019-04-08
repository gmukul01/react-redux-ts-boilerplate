import List from '@components/List';
import Text from '@components/Text';
import React, { useEffect } from 'react';
import { Props } from './types';

const TodoList: React.FC<Props> = ({ todos }) => (
    <List>
        {todos.map(todo => (
            <Text key={todo.id}>{todo.text}</Text>
        ))}
    </List>
);

export default TodoList;
