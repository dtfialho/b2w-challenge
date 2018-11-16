import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../src/components/Header/Header';

describe('components -> Header', () => {
  it('deve renderizar corretamente', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
  });
});
