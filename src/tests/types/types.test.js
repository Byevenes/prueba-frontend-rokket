import '@testing-library/jest-dom';
import { types } from '../../types/types';

describe('Pruebas en <types />', () => {
  test('debe de retonar el objeto completo', () => {
    const copyTypes = {
      /** Authentication */

      login: '[Auth] Login',
      logout: '[Auth] Logout',

      /** UI */

      uiSetError: '[UI] SetError',
      uiRemoveError: '[UI] RemoveError',

      uiStartLoading: '[UI] StartLoading',
      uiFinishLoading: '[UI] FinishLoading',

      /** Post  */

      postGetAll: '[Post] Get All',
      postByTag: '[Post] By Tag',
      postByTagSucces: '[Post] By Tag Succes',
      postByTagFailed: '[Post] By Tag Failed',
    };

    expect(types).toEqual(copyTypes);
  });
});
