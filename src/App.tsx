import { hot } from 'react-hot-loader/root';
// tslint:disable-next-line: ordered-imports
import React from 'react';
import { defaultTheme, styled, ThemeProvider } from './theme';

const Text = styled.p`
    color: black;
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.button.solid.primaryColor};
`;

Button.defaultProps = {
    theme: defaultTheme
};

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <Text>First Commit</Text>
                <Button>Click Button</Button>
            </>
        </ThemeProvider>
    );
};

export const HotApp = hot(App);
