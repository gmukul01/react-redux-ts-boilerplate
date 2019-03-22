import { mount } from 'enzyme';
import 'jest-styled-components';
import React from 'react';
import { create } from 'react-test-renderer';

import Button from './Button';

describe('Button component', () => {
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

    it('should render text in strong by default', () => {
        const button = mount(<Button solid>test text</Button>);
        expect(button.find('strong').text()).toBe('test text');
    });

    it('should wrap children into Text component when rendering string or number', () => {
        const button = mount(
            <Button solid>
                Some text
                <i>some icon</i>
                <div>element2</div>
            </Button>
        );

        expect(button.find('div').text()).toBe('element2');
        expect(button.find('i').text()).toBe('some icon');
        expect(button.find('strong').text()).toBe('Some text');
    });
});
