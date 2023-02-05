import { userLoged } from './booleanos';

describe('Pruebas de booleanos', () => {

  it('Debe de retornar true', () => {
    const resp = userLoged();

    expect(resp).toBeTruthy();
    expect(resp).not.toBeFalsy();
    // expect(resp).toBeFalsy();
  })

});