import * as Themes from './types';

export interface Theme {
    button?: Themes.ButtonTheme;
    colorPallet?: Themes.ColorPallet;
    colors?: Themes.Color;
    font?: Themes.FontTheme;
    spacing?: Themes.SpacingTheme;
    text?: Themes.TextTheme;
}

export * from './types';
export * from './defaultTheme';
