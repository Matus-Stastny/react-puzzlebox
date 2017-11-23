
import React from 'react';
import renderer from 'react-test-renderer';

// Note that this import can be commented out if
// we declare the jestSetup in package.json because
// Enzyme functions are globally available for tests.
import { shallow } from 'enzyme';
const PasswordInput = require('./PasswordInput');

test('hides password quality by default', () => {
    const tree = renderer.create(<PasswordInput
        htmlId="test"
        name="test"
        onChange={() => { }}
        value="Uisi38#8iad" />).toJSON();
    expect(tree).toMatchSnapshot();
});