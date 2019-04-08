import 'jest-styled-components';
import React from 'react';
import { fireEvent, render } from 'react-testing-library';

import TodoList from './TodoList';

describe('TodoList component', () => {
    const todos = [
            {
                id: 1,
                text: 'Random',
                completed: false
            }
        ],
        mockToggleTodo = jest.fn(),
        { container, getByText } = render(<TodoList todos={todos} toggleTodo={mockToggleTodo} />);

    it('should render with given todos', () => {
        expect(container).toMatchSnapshot();
    });

    it('should call toggle todo prop with expected id', () => {
        const todo = getByText('Random');
        fireEvent.click(todo);
        expect(mockToggleTodo).toHaveBeenCalledWith(1);
    });
});
