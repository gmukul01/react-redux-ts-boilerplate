import * as styledComponents from 'styled-components';
import { Theme } from '../theme';

// tslint:disable-next-line: no-duplicate-imports
import { ThemedStyledComponentsModule } from 'styled-components';
const { default: styled, css, createGlobalStyle, keyframes, ThemeProvider, withTheme } = styledComponents as ThemedStyledComponentsModule<
    Theme
>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider, withTheme };
