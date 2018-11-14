import { FETCH_PLANETS, SELECT_PLANET } from '../actions/types';

const INITIAL_STATE = {
  next: null,
  previous: null,
  planets: [],
  selected: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return {
        next: action.payload.next,
        previous: action.payload.previous,
        planets: action.payload.results,
      };

    case SELECT_PLANET:
      return { ...state, selected: action.payload.planet };

    default:
      return state;
  }
};
