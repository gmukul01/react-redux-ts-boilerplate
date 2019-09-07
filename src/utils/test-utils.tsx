import { initialState } from '@store';
import { rootSaga } from '@store/sagas';
import { defaultTheme } from '@theme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render, RenderResult } from 'react-testing-library';
import reduxMockStore from 'redux-mock-store';
import reduxSaga from 'redux-saga';
import { ThemeProvider } from './styled';

export const mockAxios = new MockAdapter(axios);

const sagaMiddleware = reduxSaga();

const mockStore = reduxMockStore([sagaMiddleware]),
    store = mockStore(initialState);
sagaMiddleware.run(rootSaga);

const WithThemeProvider: React.FunctionComponent = props => (
    <ThemeProvider theme={defaultTheme}>
        <>{props.children}</>
    </ThemeProvider>
);

const WithStore: React.FunctionComponent = props => (
    <Provider store={store}>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </Provider>
);

const WithRouter: React.FunctionComponent = props => (
    <MemoryRouter>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </MemoryRouter>
);

const WithStoreAndRouter: React.FunctionComponent = props => (
    <Provider store={store}>
        <MemoryRouter>
            <WithThemeProvider>{props.children}</WithThemeProvider>
        </MemoryRouter>
    </Provider>
);

const customRender = (ui: React.ReactElement<any>, options?: object): RenderResult =>
    render(ui, { wrapper: WithThemeProvider, ...options });

export const renderWithStore = (ui: React.ReactElement<any>, options?: object): RenderResult =>
    render(ui, { wrapper: WithStore, ...options });

export const renderWithRouter = (ui: React.ReactElement<any>, options?: object): RenderResult =>
    render(ui, { wrapper: WithRouter, ...options });

export const renderWithStoreAndRouter = (ui: React.ReactElement<any>, options?: object): RenderResult =>
    render(ui, { wrapper: WithStoreAndRouter, ...options });

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender as render, store };
