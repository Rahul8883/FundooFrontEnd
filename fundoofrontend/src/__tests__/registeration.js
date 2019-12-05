
import React from 'react';
import { shallow } from 'enzyme';
import Registration from '../component/Registration';
// import '../setUpTest'
const Enzyme = require('enzyme');
// this is where we reference the adapter package we installed
// earlier
const EnzymeAdapter = require('enzyme-adapter-react-16');
// This sets up the adapter to be used by Enzyme
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Registration Component', () => {

    it('Test  without throwing an error', () => {
        expect(shallow(< Registration />).exists()).toBe(true)
    })

    it('Test an email input', () => {
        expect(shallow(< Registration />).find('#firstName').length).toEqual(1)
    })
    it('Test a password input', () => {
        expect(shallow(< Registration />).find('#lastName').length).toEqual(1)
    })
    it('Test an email input', () => {
        expect(shallow(< Registration />).find('#email').length).toEqual(1)
    })
    it('Test a password input', () => {
        expect(shallow(< Registration />).find('#password').length).toEqual(1)
    })
    it('Test a password input', () => {
        expect(shallow(< Registration />).find('#confirmPassword').length).toEqual(1)
    })
    describe('firstName input', () => {
        it('should respond to change event and change the state of the Login Component', () => {
            const wrapper = shallow(< Registration />);
            wrapper.find('#firstName').simulate('change',
                {
                    target: {
                        name: 'firstName',
                        value: 'Rahul'
                    }
                });
            expect(wrapper.state('firstName')).toEqual('Rahul');
        })
    })
    
    
    describe('lastName input', () => {
        it('should respond to change event and change the state of the Login Component', () => {
            const wrapper = shallow(< Registration />);
            wrapper.find('#lastName').simulate('change',
                {
                    target: {
                        name: 'lastName',
                        value: 'Ranjan'
                    }
                });
            expect(wrapper.state('lastName')).toEqual('Ranjan');
        })
    })
    describe('email input', () => {
        it('should respond to change event and change the state of the Login Component', () => {
            const wrapper = shallow(< Registration />);
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
    describe('password input', () => {
        it('should respond to change event and change the state of the Login Component', () => {
            const wrapper = shallow(< Registration />);
            wrapper.find('#password').simulate('change',
                {
                    target: {
                        name: 'password',
                        value: 'rahul@700'
                    }
                });
            expect(wrapper.state('password')).toEqual('rahul@700');
        })
    })
    describe('conform password input', () => {
        it('should respond to change event and change the state of the Login Component', () => {
            const wrapper = shallow(< Registration />);
            wrapper.find('#confirmPassword').simulate('change',
                {
                    target: {
                        name: 'confirmPassword',
                        value: 'rahul@700'
                    }
                });
            expect(wrapper.state('confirmPassword')).toEqual('rahul@700');
        })
    })
})