import { defaultTheme } from '@theme';
import { styled } from '@utils/styled';
import { Props } from './types';

export const InputStyled = styled('input').attrs(({ theme: { input, text, font } }) => ({ input, text, font }))<Props>`
    padding: 10px;
    font-size: ${props => props.text.defaults.textSize};
    font-weight: ${props => props.text.defaults.textWeight};
    color: ${props => props.input.color};
    background-color: ${props => props.input.bgColor};
    background-clip: padding-box;
    box-sizing: border-box;
    border: 1px solid ${props => props.input.borderColor};
    border-radius: 3px;

    &:focus {
        border-color: ${props => props.input.focus.borderColor};
        outline: 0;
    }

    &::placeholder {
        color: ${props => props.input.placeHolderColor};
    }
`;

InputStyled.defaultProps = {
    theme: defaultTheme
};
