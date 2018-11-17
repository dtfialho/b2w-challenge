import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as types from '../../../src/actions/types';
import * as actions from '../../../src/actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('fetchPlanets deve funcionar corretamente', () => {
    const json = {
      next: "https://swapi.co/api/planets/?page=2",
      previous: null,
      results: [
        {name: "Tattoine"},
        {name: "Alderaan"},
      ]
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: json,
      });
    });

    const expectedActions = [
      { type: actions.GET_POSTS_SUCCESS, posts: json },
    ];

    const store = mockStore({ planetsInfo: {} })

    store.dispatch(actions.fetchPlanets()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('selectPlanet deve retornar os dados corretamente', () => {
    const planet = { name: 'Tattoine' };
    const action = {
      type: types.SELECT_PLANET,
      payload: {planet}
    };

    expect(actions.selectPlanet(planet)).toEqual(action);
  });
});