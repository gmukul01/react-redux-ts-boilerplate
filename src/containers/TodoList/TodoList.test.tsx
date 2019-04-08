import React from 'react';
import { Provider } from 'react-redux';
import { fireEvent, render } from 'react-testing-library';
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
        { container, getByText } = render(
            <Provider store={store}>
                <TodoList />
            </Provider>
        );

    it('should have todos prop as per the store', () => {
        expect(container).toMatchSnapshot();
    });

    it('should dispatch toggle todo action on click of todo text', () => {
        const expectedAction = [{ id: 1, type: 'TOGGLE_TODO' }],
            todo = getByText('Random');

        fireEvent.click(todo);
        expect(store.getActions()).toEqual(expectedAction);
    });
});
