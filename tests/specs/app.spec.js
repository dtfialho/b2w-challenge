import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';

describe('App', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<App />);
    });
  
    it('component should mount', () => {
      expect(wrapper.find('div')).toHaveLength(1);
    });
  });