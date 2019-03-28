import { store } from '@store';
import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App, HotApp } from './App';

const Root = process.env.NODE_ENV === 'production' ? App : HotApp;

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('root')
);

// tslint:disable-next-line: no-unused-expression
module.hot && process.env.NODE_ENV === 'production' && module.hot.accept();
