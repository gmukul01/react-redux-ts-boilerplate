import { Button, Input, List, Text } from '@components';
import { defaultTheme } from '@theme';
import { ThemeProvider } from '@utils/styled';
import { hot } from 'react-hot-loader/root';
// tslint:disable-next-line: ordered-imports
import React from 'react';

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <Input placeholder="Enter Item" />
                <Button solid>Add Todo</Button>
                <List>
                    <Text>Todo 1</Text>
                    <Text>Todo 2</Text>
                </List>
            </>
        </ThemeProvider>
    );
};

export const HotApp = hot(App);
