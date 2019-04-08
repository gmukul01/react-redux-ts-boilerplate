import { fireEvent, render } from '@test-utils';
import React from 'react';
import { Provider } from 'react-redux';
import reduxMockStore from 'redux-mock-store';
import TodoForm from './TodoForm';

describe('TodoForm Container', () => {
    const mockStore = reduxMockStore(),
        store = mockStore({}),
        { getByPlaceholderText, getByText } = render(
            <Provider store={store}>
                <TodoForm />
            </Provider>
        );

    it('should dispatch addTodo action on click of add todo button', () => {
        const expectedAction = [{ id: 0, text: 'Random', type: 'ADD_TODO' }],
            addTodoInput = getByPlaceholderText('Enter Todo'),
            submitButton = getByText('Add Todo');

        fireEvent.change(addTodoInput, { target: { value: 'Random' } });
        fireEvent.submit(submitButton);

        expect(store.getActions()).toEqual(expectedAction);
    });
});
