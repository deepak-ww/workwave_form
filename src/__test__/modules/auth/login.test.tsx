import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Login } from '../../../modules';

configure({ adapter: new Adapter() });

describe("Login", () => {
    let login = mount(<Login />);

    it('Render Login component', () => {
        expect(login).toMatchSnapshot();
    })

    it('Validate Login title', () => {
        console.log(login.debug());
        expect(login.find('.logo').text()).toEqual('WorkWave Form');
    })

    it('Login user & password field exits', () => {
        expect(login.find('#login-username').exists()).toBe(true);
        expect(login.find('#login-password').exists()).toBe(true);
    });

    it('Render the login button', () => {
        expect(login.find('.sc-bdVaJa').text()).toEqual('Login');
    });
});