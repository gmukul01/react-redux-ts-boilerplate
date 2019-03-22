import { shallow } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { create } from 'react-test-renderer';
import Input from './Input';

describe('Input component', () => {
    it('should render default variant correctly', () => {
        const input = create(<Input type="email" />);
        expect(input).toMatchSnapshot();
    });
});
