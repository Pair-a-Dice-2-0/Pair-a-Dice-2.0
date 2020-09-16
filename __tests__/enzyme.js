import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Login from '../client/containers/Login.jsx';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Login', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<Login />);
    });

    it('Renders a <div> tag with pair/a\\dice', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.text()).toEqual('Mega: Markets');
      expect(wrapper.find('strong').text()).toMatch('Mega');
    });
  });

  xdescribe('MarketDisplay', () => {
    // TODO: Test the following:
    // 1. A MarketDisplay should display all of its text props inside a
    // LabeledText component
    // 2. It should also contain a div with two buttons
    // 3. The functions passed down should be invoked on click
    // 4. MarketDisplay should render a div with a class of `marketBox`, and the
    // interior div wrapping the two buttons should have a class of `flex`
  });

  xdescribe('MarketsDisplay', () => {
    // TODO: Test the following:
    //   1. A MarketsDisplay should have an h4 element to display the 'Markets'
    //   title
    //   2. A single MarketDisplay is rendered for each market in the
    //   marketList prop
    //   3. The percentage prop should be a string calculated to two decimals.
    //   Test for zero, a whole number, and a fractional value. (Right now this
    //   is implemented incorrectly, so follow TDD here)
  });
});
