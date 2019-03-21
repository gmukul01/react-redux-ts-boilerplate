import 'jest-styled-components';
import React from 'react';
import { create } from 'react-test-renderer';

import Text from './Text';

describe('Text Component', () => {
    it('should render span element by default', () => {
        const typography = create(<Text />);
        expect(typography.toJSON().type).toBe('span');
    });

    it('should render strong element for strong', () => {
        const typography = create(<Text textWeight="Strong" />).toJSON();
        expect(typography.type).toBe('strong');
    });

    it('should render with all the props', () => {
        const typography = create(<Text textSize="M2" textWeight="Light" textColor="pink" uppercase lineThrough />);
        expect(typography).toMatchSnapshot();
    });
});
