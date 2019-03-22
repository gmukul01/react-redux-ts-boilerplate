import { hot } from 'react-hot-loader/root';
// tslint:disable-next-line: ordered-imports
import React from 'react';
import { Button, Input, Text } from './components';
import { defaultTheme } from './theme';
import { ThemeProvider } from './utils/styled';

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <Input placeholder="Enter Item" />
                <Button solid>Click Button</Button>
            </>
        </ThemeProvider>
    );
};

export const HotApp = hot(App);
