import { hot } from 'react-hot-loader/root';
// tslint:disable-next-line: ordered-imports
import React from 'react';
import Button from './components/Button';
import { defaultTheme } from './theme';
import { styled, ThemeProvider } from './utils/styled';

const Text = styled.p`
    color: black;
`;

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
