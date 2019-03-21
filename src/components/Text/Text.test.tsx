import 'jest-styled-components';
import React from 'react';
import { create } from 'react-test-renderer';

import { TextStyled as Text } from './Text.styled';

describe('Text Component', () => {
    it('should render span element by default', () => {
        const typography = create(<Text />);
        expect(typography.toJSON().type).toBe('span');
    });

    it('should render with all the props', () => {
        const typography = create(<Text textSize="M2" textWeight="Light" textColor="pink" uppercase lineThrough />);
        expect(typography).toMatchSnapshot();
    });
});
