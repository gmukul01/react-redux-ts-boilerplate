import { CssBaseLine } from '@components';
import { TodoForm, TodoList } from '@containers';
import { ThemeProvider } from '@styled';
import { defaultTheme } from '@theme';
import { hot } from 'react-hot-loader/root';
// tslint:disable-next-line: ordered-imports
import React from 'react';

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <CssBaseLine />
                <TodoForm />
                <TodoList />
            </>
        </ThemeProvider>
    );
};

export const HotApp = hot(App);
