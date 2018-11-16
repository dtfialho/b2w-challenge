import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/App';
import Layout from '../../src/containers/Layout/Layout';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('o componente deve renderizar corretamente', () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
  });
});
