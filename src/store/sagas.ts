import { all } from 'redux-saga/effects';

import { todoSaga } from './todos';

export function* rootSaga() {
    yield all([todoSaga()]);
}
