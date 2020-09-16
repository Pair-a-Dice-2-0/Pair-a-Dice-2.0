import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Need provider and store so components have access to state
import { Provider } from 'react-redux';
import store from '../client/store';
import { BrowserRouter as Router } from 'react-router-dom';
// Import actions and types for action tests
import * as actions from '../client/actions/actions';
import * as types from '../client/constants/actionTypes';
// Import reducer for reducer unit tests
import reducer from '../client/reducers/index';

import Login from '../client/containers/Login.jsx';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Login', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>
      );
    });

    it('Renders a <div> tag with pair/a\\dice', () => {
      expect(wrapper.type()).toEqual(Provider);
      expect(wrapper.find('Provider').find('Router').find('Login').find('.login-container').type()).toEqual('div');
      expect(wrapper.find('Provider').find('Router').find('Login').find('.login-container').find('.login-logo').text()).toEqual('pair/a\\dice');
    });
    it('Renders 5 <div>s', () => {
      expect(wrapper.find('Provider').find('Router').find('Login').find('.login-container').containsMatchingElement(<div className="login-logo">pair/a\dice</div>)).toEqual(true);
      expect(wrapper.find('Provider').find('Router').find('Login').find('.login-container').containsMatchingElement(<div className="login-subTitle">Pair-programming roulette.<br /></div>)).toEqual(true);
      expect(wrapper.find('Provider').find('Router').find('Login').find('.login-container').containsMatchingElement(<div className="dice">🎲🎲</div>)).toEqual(true);
      expect(wrapper.find('Provider').find('Router').find('Login').find('.login-container').find('.login-form').children()).toHaveLength(2);
      expect(wrapper.find('Provider').find('Router').find('Login').find('.login-container').find('.button-container').children()).toHaveLength(1);
    });
    xit('Correctly verifies username and password upon clicking login', () => {
      loginContainer.find('.button-container').find('.login-register-buttons').find('.waiting-room-link').find('#login-button').simulate('click', {username: 'Amy', password: 'password'});
      // Expect button to dispatch action
    });
  });

  describe('Actions unit tests', () => {
    it('should create an action to verify user', () => {
      const user = 'Amy';
      const expected = {
        type: types.VERIFY_USER,
        payload: user
      };
      expect(actions.verifyUser(user)).toEqual(expected);
    });
    it('should create an action to add user', () => {
      const user = 'Alex';
      const expected = {
        type: types.ADD_USER,
        payload: user
      };
      expect(actions.addUser(user)).toEqual(expected);
    });
  });

  describe('Reducers unit tests', () => {
    it('should return initial state', () => {
      // Initial state from reducer file
      const initialState = {
        currentUser: {
          _id: 5,
          username: 'usertest',
          sessioncount: 10
        },
        currentPartner: {
          _id: 4,
          partnername: 'partnertest1',
          sessioncount: 2    
        } 
      };
      // Doesn't pass potentially because of spacing of default return
      expect(reducer({}, undefined)).toEqual(initialState)
    });
  });
});
