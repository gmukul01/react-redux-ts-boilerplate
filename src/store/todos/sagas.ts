import * as URL from '@constants/urls';
import fetch from '@utils/fetch';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchError, fetchSuccess } from './actions';
import { TodoActionTypes } from './types';

export function* handleFetch() {
    const { response, error } = yield call(fetch, {
        url: `${URL.TODOS}`,
        method: 'get'
    });

    if (response) {
        yield put(fetchSuccess(response));
    } else {
        yield put(fetchError(error));
    }
}
export function* todoSaga() {
    yield takeLatest(TodoActionTypes.FETCH_REQUEST, handleFetch);
}
