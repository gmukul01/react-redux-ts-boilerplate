import { FontSizeTheme, FontWeightTheme } from '../../theme';
import { HTMLProps, WithThemeProp } from '../../utils/types';

interface Common {
    textColor?: string;
    uppercase?: boolean;
    lineThrough?: boolean;
}

export interface Props extends Common, HTMLProps<HTMLElement>, WithThemeProp {
    textSize?: keyof FontSizeTheme;
    textWeight?: keyof FontWeightTheme;
}

export interface StyledProps extends Common {
    textSize?: string;
    textWeight?: string;
}
