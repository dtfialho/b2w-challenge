import * as types from '../../../src/actions/types';

describe('actions -> types', () => {
  it('deve ter os valores corretos', () => {
    expect(types.FETCH_PLANETS).toEqual('fetch_planets');
    expect(types.SELECT_PLANET).toEqual('select_planets');
  });
});