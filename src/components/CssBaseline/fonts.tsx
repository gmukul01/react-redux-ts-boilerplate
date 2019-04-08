import { FontFaceItem, FontFaceTheme } from '@theme';
import { css } from '../../utils/styled';

const formatFontFace = (fontFace: FontFaceItem, fontFamily: string) => `
    @font-face {
        font-family: '${fontFamily}';
        src: ${fontFace.primarySrc};
        src: ${fontFace.secondarySrc};
        font-weight: ${fontFace.fontWeight};
        font-style: ${fontFace.fontStyle};
    }`;

const formatFontFamily = (fontFamilyDetails: FontFaceTheme) => {
    return fontFamilyDetails.fontFaces.reduce(
        (templateLiteral: string, face: FontFaceItem) => templateLiteral + formatFontFace(face, fontFamilyDetails.fontFamily),
        ''
    );
};

const fonts = css`
    ${props => {
        return props.theme.font.faces.reduce(
            (templateLiteral: string, fontFamilyDetails: FontFaceTheme) => templateLiteral + formatFontFamily(fontFamilyDetails),
            ''
        );
    }}
    color: ${props => props.theme.font.defaultColor};
`;

export default fonts;
