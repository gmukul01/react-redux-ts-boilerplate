import { hot } from 'react-hot-loader/root';
// tslint:disable-next-line: ordered-imports
import React from 'react';
import { Button, Text } from './components';
import { defaultTheme } from './theme';
import { ThemeProvider } from './utils/styled';

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <Text>First Commit</Text>
                <Button solid>Click Button</Button>
            </>
        </ThemeProvider>
    );
};

export const HotApp = hot(App);
