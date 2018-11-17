import React from 'react';
import { shallow } from 'enzyme';
import { PlanetList } from '../../../src/containers/PlanetList/PlanetList';
import Planet from '../../../src/components/Planet/Planet';
import * as actions from '../../../src/actions';

describe('containers -> PlanetList', () => {
  it('deve renderizar corretamente', () => {
    const spy = jest.spyOn(actions, 'fetchPlanets')
      .mockResolvedValue(() => Promise.resolve({ results: [
        {name: "Tattoine"},
        {name: "Alderaan"},
      ] }));
    
    const wrapper = shallow(<PlanetList
      fetchPlanets={actions.fetchPlanets}
      planets={[
        {name: "Tattoine"},
        {name: "Alderaan"},
      ]}
    />);

    spy.mockRestore();

    expect(wrapper.find(Planet)).toHaveLength(2);
  });

  it('deve exibir retornar erro ao carregar a lista de planetas e desativar os botões da paginação', () => {
    const spy = jest.spyOn(actions, 'fetchPlanets')
      .mockRejectedValue(() => Promise.reject(new Error('houve um erro')));
    
    const wrapper = shallow(<PlanetList
      fetchPlanets={actions.fetchPlanets}
      planets={[]}
    />);

    expect(actions.fetchPlanets).toHaveBeenCalled();
    expect(wrapper.find('.Prev').prop('disabled')).toBeTruthy();
    expect(wrapper.find('.Next').prop('disabled')).toBeTruthy();

    spy.mockRestore();
  });

  it('deve chamar selectPlanet', () => {
    const actionSpy = jest.spyOn(actions, 'fetchPlanets')
      .mockResolvedValue(() => Promise.resolve({ results: [
        {name: "Tattoine"},
        {name: "Alderaan"},
      ] }));

    const wrapper = shallow(<PlanetList
      fetchPlanets={actions.fetchPlanets}
      selectPlanet={actions.selectPlanet}
      planets={[
        {name: "Tattoine"},
        {name: "Alderaan"},
      ]}
    />);
    const instance = wrapper.instance();
    const instanceSpy = jest.spyOn(instance, 'selectPlanet');    
    
    wrapper.find(Planet).first().dive().find('article').simulate('click');
    expect(instance.selectPlanet).toHaveBeenCalled();

    actionSpy.mockRestore();
    instanceSpy.mockRestore();
  });

  it('deve chamar previous page', () => {
    const actionSpy = jest.spyOn(actions, 'fetchPlanets')
      .mockResolvedValue(() => Promise.resolve({ results: [
        {name: "Tattoine"},
        {name: "Alderaan"},
      ] }));

    const wrapper = shallow(<PlanetList
      fetchPlanets={actions.fetchPlanets}
      selectPlanet={actions.selectPlanet}
      planets={[
        {name: "Tattoine"},
        {name: "Alderaan"},
      ]}
      previous={'https://swapi.co/api/planets/?page=1'}
    />);
    const instance = wrapper.instance();
    const instanceSpy = jest.spyOn(instance, 'previousPage');    
    
    wrapper.find('.Prev').simulate('click');
    expect(instance.previousPage).toHaveBeenCalled();

    actionSpy.mockRestore();
    instanceSpy.mockRestore();
  });

  it('deve chamar next page', () => {
    const actionSpy = jest.spyOn(actions, 'fetchPlanets')
      .mockResolvedValue(() => Promise.resolve({ results: [
        {name: "Tattoine"},
        {name: "Alderaan"},
      ] }));

    const wrapper = shallow(<PlanetList
      fetchPlanets={actions.fetchPlanets}
      selectPlanet={actions.selectPlanet}
      planets={[
        {name: "Tattoine"},
        {name: "Alderaan"},
      ]}
      next={'https://swapi.co/api/planets/?page=2'}
    />);
    const instance = wrapper.instance();
    const instanceSpy = jest.spyOn(instance, 'nextPage');    
    
    wrapper.find('.Next').simulate('click');
    expect(instance.nextPage).toHaveBeenCalled();

    actionSpy.mockRestore();
    instanceSpy.mockRestore();
  });
});
