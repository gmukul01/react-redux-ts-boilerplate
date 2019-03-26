import 'jest-styled-components';
import React from 'react';
import { create } from 'react-test-renderer';

import List from './List';

describe('List component', () => {
    it('should render horizontal list', () => {
        const list = create(
            <List variant="horizontal">
                <p>item 1</p>
                <p>item 2</p>
            </List>
        );
        expect(list).toMatchSnapshot();
    });

    it('should render vertical list', () => {
        const list = create(
            <List variant="vertical">
                <p>item 1</p>
                <p>item 2</p>
            </List>
        );
        expect(list).toMatchSnapshot();
    });
});
