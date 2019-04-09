import { fireEvent, render } from '@test-utils';
import 'jest-styled-components';
import React from 'react';

import TodoList from './TodoList';

describe('TodoList component', () => {
    const todos = [
            {
                id: 1,
                title: 'Random',
                completed: false
            }
        ],
        mockToggleTodo = jest.fn(),
        mockfetchTodos = jest.fn(),
        { container, getByText } = render(<TodoList todos={todos} toggleTodo={mockToggleTodo} fetchTodos={mockfetchTodos} />);

    it('should render with given todos', () => {
        expect(container).toMatchSnapshot();
    });

    it('shopuld call fetch todos on mount', () => {
        expect(mockfetchTodos).toHaveBeenCalled();
    });

    it('should call toggle todo prop with expected id when click on todo', () => {
        const todo = getByText('Random');
        fireEvent.click(todo);
        expect(mockToggleTodo).toHaveBeenCalledWith(1);
    });
});
