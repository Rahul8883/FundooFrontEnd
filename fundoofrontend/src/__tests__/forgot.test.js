
import React from 'react';
import { shallow } from 'enzyme';
import Forgot from '../component/Forgot';
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');
Enzyme.configure({ adapter: new EnzymeAdapter() });
describe('forgot Component', () => {
    it('Test  without throwing an error', () => {
        expect(shallow(< Forgot />).exists()).toBe(true)
    })
    it('Test an email input', () => {
        expect(shallow(< Forgot />).find('#email').length).toEqual(1)
    })
    describe('Email input', () => {
        it('should respond to change event and change the state of the Login Component', () => {
            const wrapper = shallow(< Forgot />);
            wrapper.find('#email').simulate('change',
                {
                    target: {
                        name: 'email',
                        value: 'rr582619@gmail.com'
                    }
                });
            expect(wrapper.state('email')).toEqual('rr582619@gmail.com');
        })
    })
})