import { fireEvent, render } from '@test-utils';
import React from 'react';
import { Provider } from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import TodoList from './TodoList';

describe('TodoList Container', () => {
    const initialState = {
            todos: {
                loading: false,
                data: [
                    {
                        id: 1,
                        title: 'Random',
                        completed: false
                    }
                ],
                error: ''
            }
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

    it('should dispatch fetch todo action on mount of the component', () => {
        const expectedAction = [{ type: '@@todos/FETCH_REQUEST' }];
        expect(store.getActions()).toEqual(expectedAction);
    });

    it('should dispatch toggle todo action on click of todo text', () => {
        const expectedAction = [{ type: '@@todos/FETCH_REQUEST' }, { id: 1, type: '@@todos/TOGGLE_TODO' }],
            todo = getByText('Random');

        fireEvent.click(todo);
        expect(store.getActions()).toEqual(expectedAction);
    });
});
