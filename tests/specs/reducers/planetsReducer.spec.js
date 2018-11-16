import planetsReducer from '../../../src/reducers/planetsReducer';
import * as types from '../../../src/actions/types';

describe('reducers -> planetsReducer', () => {
  let state;
  let initialState;

  beforeEach(() => {
    initialState = {
      next: null,
      previous: null,
      planets: [],
      selected: null,
    };
  });

  it('deve iniciar com o estado default', () => {
    state = planetsReducer(undefined, {});

    expect(state).toEqual(initialState);
  });

  it('deve carregar os dados corretamente', () => {
    const json = {
      next: "https://swapi.co/api/planets/?page=2",
      previous: null,
      results: [
        {name: "Tattoine"},
        {name: "Alderaan"},
      ]
    };

    state = planetsReducer(undefined, {
      type: types.FETCH_PLANETS,
      payload: json
    });

    expect(state.planets).toEqual(json.results);
    expect(state.previous).toEqual(json.previous);
    expect(state.next).toEqual(json.next);
  });

  it('deve retornar o planeta selecionado', () => {
    const planet = {
      name: "Tattoine"
    };

    state = planetsReducer(undefined, {
      type: types.SELECT_PLANET,
      payload: {planet}
    });

    expect(state.selected).toEqual(planet);
  });
});
