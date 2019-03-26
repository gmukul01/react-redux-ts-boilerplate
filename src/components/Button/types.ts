import { HTMLProps, WithThemeProp } from '@utils/types';

export interface Props extends HTMLProps<HTMLButtonElement>, WithThemeProp {
    solid?: boolean;
    flat?: boolean;
    outlined?: boolean;
}
