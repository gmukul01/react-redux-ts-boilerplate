import 'jest-styled-components';
import React from 'react';
import { render } from 'react-testing-library';

import TodoList from './TodoList';

describe('TodoList component', () => {
    it('should render with given todos', () => {
        const todos = [
                {
                    id: 1,
                    text: 'Random',
                    completed: false
                }
            ],
            { container } = render(<TodoList todos={todos} />);
        expect(container).toMatchSnapshot();
    });
});
