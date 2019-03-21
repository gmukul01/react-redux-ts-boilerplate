import * as Themes from './types';

export interface Theme {
    button?: Themes.ButtonTheme;
    spacing?: Themes.SpacingTheme;
    font?: Themes.FontTheme;
    colors?: Themes.Color;
    colorPallet?: Themes.ColorPallet;
}

export * from './types';
export * from './defaultTheme';
