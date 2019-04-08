import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import reduxMockStore from 'redux-mock-store';
import TodoList from './TodoList';

describe('TodoList Container', () => {
    const initialState = {
            todos: [
                {
                    id: 1,
                    text: 'Random',
                    completed: false
                }
            ]
        },
        mockStore = reduxMockStore(),
        store = mockStore(initialState),
        { container } = render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );

    it('should have todos prop as per the store', () => {
        expect(container).toMatchSnapshot();
    });
});
