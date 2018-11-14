import axios from 'axios';
import { FETCH_PLANETS } from './types';

export const fetchPlanets = (url = 'https://swapi.co/api/planets/?page=1') => async (dispatch) => {
  const res = await axios.get(url);

  dispatch({ type: FETCH_PLANETS, payload: res.data });
};
