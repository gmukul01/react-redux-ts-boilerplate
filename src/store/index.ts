import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todos } from './todos';
import { visibilityFilter } from './visibilityFilter';

export const rootReducer = combineReducers({
    todos,
    visibilityFilter
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export type AppState = ReturnType<typeof rootReducer>;
