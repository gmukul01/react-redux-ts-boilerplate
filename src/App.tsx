import { TodoForm, TodoList } from '@containers';
import { defaultTheme } from '@theme';
import { ThemeProvider } from '@utils/styled';
import { hot } from 'react-hot-loader/root';
// tslint:disable-next-line: ordered-imports
import React from 'react';

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <TodoForm />
                <TodoList />
            </>
        </ThemeProvider>
    );
};

export const HotApp = hot(App);
