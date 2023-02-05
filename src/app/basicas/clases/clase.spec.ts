import { Jugador } from './clase';


describe('Pruebas de clase', () => {

  let player = new Jugador();

  beforeAll( () => {
    // console.log('beforeAll');
  });
  beforeEach(() => {
    player = new Jugador();
    // console.log('beforeEach');
  });
  afterAll(() => {
    // console.log('afterAll');
  });
  afterEach(() => {
    // console.log('afterEach');
  });


  it('Debe de retornar 80 de hp, si recibe 20 de daño', () => {

    const res = player.recibeDanio(20);

    expect(res).toEqual(80);
  });

  it('Debe de retornar 50 de hp, si recibe 50 de daño', () => {

    const res = player.recibeDanio(50);

    expect(res).toEqual(50);
  });

  it('Debe de retornar 0 de hp, si recibe mas de 100 de daño', () => {

    const res = player.recibeDanio(5000);

    expect(res).toEqual(0);
  });

});