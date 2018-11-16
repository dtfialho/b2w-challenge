import React from 'react';
import { shallow } from 'enzyme';
import Planet from '../../../src/components/Planet/Planet';

describe('components -> Planet', () => {
  it('deve renderizar corretamente', () => {
    const planet = { name: 'Tattoine' };
    const wrapper = shallow(<Planet planet={planet} />);

    expect(wrapper.find('article')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('h1').text()).toEqual(planet.name);
    expect(wrapper.find('p')).toHaveLength(3);
  });
});
