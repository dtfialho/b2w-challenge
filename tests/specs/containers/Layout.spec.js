import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../../../src/containers/Layout/Layout';
import Header from '../../../src/components/Header/Header';

describe('containers -> Layout', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Layout><div>lorem</div></Layout>);
  });

  it('o componente deve renderizar corretamente', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('o componente deve renderizar a children passada corretamente', () => {
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('div').text()).toEqual('lorem');
  });
});
