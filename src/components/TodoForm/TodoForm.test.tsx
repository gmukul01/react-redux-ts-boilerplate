import { fireEvent, render } from '@test-utils';
import 'jest-styled-components';
import React from 'react';

import TodoForm from './TodoForm';

describe('TodoForm component', () => {
    const mockAddTodo = jest.fn();

    it('should render', () => {
        const { container } = render(<TodoForm addTodo={mockAddTodo} />);
        expect(container).toMatchSnapshot();
    });

    it('should call addTodo prop on click of add todo button', () => {
        const { getByPlaceholderText, getByText } = render(<TodoForm addTodo={mockAddTodo} />),
            addTodoInput = getByPlaceholderText('Enter Todo'),
            submitButton = getByText('Add Todo');

        fireEvent.change(addTodoInput, { target: { value: 'Random' } });
        fireEvent.submit(submitButton);
        expect(mockAddTodo).toHaveBeenCalledWith('Random');
    });
});
