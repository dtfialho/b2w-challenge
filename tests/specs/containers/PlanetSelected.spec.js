import React from 'react';
import { shallow } from 'enzyme';
import { TweenMax } from 'gsap';
import { PlanetSelected } from '../../../src/containers/PlanetSelected/PlanetSelected';

describe('containers -> PlanetSelected', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlanetSelected />);
  });
  
  it('deve renderizar corretamente', () => {
    expect(wrapper.find('.SelectedPlanet')).toHaveLength(1);
    expect(wrapper.find('.SelectedPlanet-Wrapper')).toHaveLength(0);
  });

  it('deve exibir os detalhes do planeta se receber o objeto com os detalhes', () => {
    const tweenMax = jest.spyOn(TweenMax, 'to')
      .mockImplementation(jest.fn);

    wrapper.setProps({ planet: { name: 'Tattoine', films: [ 'a' ] }});

    expect(wrapper.find('.SelectedPlanet-Wrapper')).toHaveLength(1);
    expect(tweenMax).toHaveBeenCalled();
  });

  it('deve chamar o metodo de fechar os detalhes do planeta', () => {
    const tweenMax = jest.spyOn(TweenMax, 'to')
      .mockImplementation(jest.fn);
    const instance = wrapper.instance();
    spyOn(instance, 'close');

    wrapper.setProps({ planet: { name: 'Tattoine', films: [ 'a' ] }});
    
    wrapper.find('.close').simulate('click');

    expect(instance.close).toHaveBeenCalled();
  });
});