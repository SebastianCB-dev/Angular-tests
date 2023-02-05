import { getMessage } from './string';

// Agrupar pruebas
// describe('Pruebas de Strings');

// Una prueba
// it('Debe de regresar un string');

describe( 'Pruebas de strings', () => {

  it('Debe de regresar un string', () => {

    const resp = getMessage('Sebastián');    
    // Tiene que ser 100%
    expect(typeof resp).toBe('string');

  });

  it('Debe de retornar un saludo con el nombre enviado', () => {

    const name: string = 'Juan';
    const resp = getMessage(name);
    // Que contenga
    expect(resp).toContain(name);

  });

});
