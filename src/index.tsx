import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { default as styled } from 'styled-components';

const Text = styled.p`
    color: black;
`;

const App = () => {
    return (
        <div>
            <Text>First Commit</Text>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
