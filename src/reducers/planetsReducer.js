import { FETCH_PLANETS } from '../actions/types';

const INITIAL_STATE = {
  next: null,
  previous: null,
  planets: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PLANETS:
      return {
        next: action.payload.next,
        previous: action.payload.previous,
        planets: action.payload.results,
      };

    default:
      return state;
  }
};
