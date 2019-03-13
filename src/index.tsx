import * as React from 'react';
import * as ReactDOM from 'react-dom';
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

const App = () => {
    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <>
                    <Text>First Commit</Text>
                    <Button>Click Buttoon</Button>
                </>
            </ThemeProvider>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
