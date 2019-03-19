import 'jest-styled-components';
import React from 'react';
import { create } from 'react-test-renderer';
import { App } from './App';

describe('App', () => {
    it('should renders correctly', () => {
        const tree = create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
