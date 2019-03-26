/* stylelint-disable  no-descending-specificity*/
import { defaultTheme, SpacingTheme } from '@theme';
import { css, styled } from '@utils/styled';
import { Props } from './types';

const horizontal = (spacings: SpacingTheme) => css`
    li {
        * {
            display: inline;
            margin: 0px ${spacings.XS};
        }
        &:last-child {
            * {
                margin-right: ${spacings.S};
            }
        }
        &:first-child {
            * {
                margin-left: ${spacings.S};
            }
        }
    }
`;

const vertical = (spacings: SpacingTheme) => css`
    li {
        * {
            display: block;
            margin: ${spacings.XS} 0px;
        }
        &:last-child {
            * {
                margin-bottom: ${spacings.S};
            }
        }
        &:first-child {
            * {
                margin-top: ${spacings.S};
            }
        }
    }
`;

const ListStyled = styled('ul').attrs(({ theme: { spacing: spacings } }) => ({ spacings }))<Props>`
    padding: 0;
    margin: 0;

    ${({ spacings, variant }) => variant === 'horizontal' && horizontal(spacings)};
    ${({ spacings, variant }) => variant === 'vertical' && vertical(spacings)};
`;

ListStyled.defaultProps = {
    theme: defaultTheme
};

export { ListStyled };
