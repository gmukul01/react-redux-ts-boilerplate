import { call, put, takeLatest } from 'redux-saga/effects';

import * as URL from '@constants/urls';
import fetch from '@utils/fetch';
import { fetchError, fetchSuccess } from '../actions';
import { handleFetch, todoSaga } from '../sagas';
import { TodoActionTypes } from '../types';

describe('Todos saga', () => {
    it('should listen FETCH_REQUEST', () => {
        const gen = todoSaga();
        expect(gen.next().value).toEqual(takeLatest(TodoActionTypes.FETCH_REQUEST, handleFetch));
    });

    it('should dispatch fetchSuccess action when we recieve response from the API', () => {
        const data = [
                {
                    id: 1,
                    title: 'Random',
                    completed: false
                }
            ],
            gen = handleFetch();
        expect(gen.next().value).toEqual(
            call(fetch, {
                url: `${URL.TODOS}`,
                method: 'get'
            })
        );
        expect(gen.next({ response: data }).value).toEqual(put(fetchSuccess(data)));
    });

    it('should dispatch fetchError action when we recieve error from the API', () => {
        const gen = handleFetch();
        expect(gen.next().value).toEqual(
            call(fetch, {
                url: `${URL.TODOS}`,
                method: 'get'
            })
        );
        expect(gen.next({ error: 'Something went wrong' }).value).toEqual(put(fetchError('Something went wrong')));
    });
});
