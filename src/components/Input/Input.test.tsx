import { render } from '@test-utils';
import 'jest-styled-components';
import React from 'react';
import Input from './Input';

describe('Input component', () => {
    it('should render default variant correctly', () => {
        const { container } = render(<Input type="email" />);
        expect(container).toMatchSnapshot();
    });
});
