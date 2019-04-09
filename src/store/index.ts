import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { rootSaga } from './sagas';
import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';

export const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export const sagaMiddleware = reduxSaga();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
