import React from 'react';
import { shallow } from 'enzyme';
import { PlanetList } from '../../../src/containers/PlanetList/PlanetList';
import Planet from '../../../src/components/Planet/Planet';
import * as actions from '../../../src/actions';

describe('containers -> PlanetList', () => {
  it('deve renderizar corretamente', () => {
    jest.spyOn(actions, 'fetchPlanets')
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

      expect(wrapper.find(Planet)).toHaveLength(2);
  });
});
