import { defaultTheme } from '@theme';
import { createGlobalStyle } from '@utils/styled';

import fonts from './fonts';

export const CssBaseline = createGlobalStyle`
    ${fonts} 
    body {
        display: flex;
        justify-content: center;
        font-family: ${props => props.theme.font.defaultFontFamily || 'sans-serif'};
    }
`;
CssBaseline.displayName = 'CssBaseline';
CssBaseline.defaultProps = {
    theme: defaultTheme
};
