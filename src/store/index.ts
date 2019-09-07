import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxSaga from 'redux-saga';
import { rootSaga } from './sagas';
import { initialState as todosInitialState, todos } from './todos';
import { initialState as visibilityFilterInitialState, visibilityFilter } from './visibilityFilter';

export const initialState = {
        todos: todosInitialState,
        visibilityFilter: visibilityFilterInitialState
    },
    sagaMiddleware = reduxSaga(),
    rootReducer = combineReducers({
        todos,
        visibilityFilter
    }),
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof rootReducer>;
