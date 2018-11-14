import axios from 'axios';
import { FETCH_PLANETS, SELECT_PLANET } from './types';

export const fetchPlanets = (url = 'https://swapi.co/api/planets/?page=1') => async (dispatch) => {
  const res = await axios.get(url);

  dispatch({ type: FETCH_PLANETS, payload: res.data });
};

export const selectPlanet = planet => ({
  type: SELECT_PLANET,
  payload: { planet },
});
