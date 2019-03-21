import 'jest-styled-components';
import React from 'react';
import { create } from 'react-test-renderer';

import { ButtonStyled as Button } from './Button.styled';

describe('<Button />', () => {
    it('should render properly with flat prop', () => {
        const button = create(<Button flat>Flat Button</Button>);
        expect(button).toMatchSnapshot();
    });
    it('should render properly with outlined prop', () => {
        const button = create(<Button outlined>Outlined Button</Button>);
        expect(button).toMatchSnapshot();
    });
    it('should render properly with solid prop', () => {
        const button = create(<Button solid>Solid Button</Button>);
        expect(button).toMatchSnapshot();
    });
});
