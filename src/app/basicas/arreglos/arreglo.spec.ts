import { obtenerRobots } from './arreglos';


describe('Pruebas de arreglos', () => {

  const resp = obtenerRobots();

  it('Debe de retornar al menos 3 robots', () => {
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe tener a MegaMan y a Ultron', () => {
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });

});