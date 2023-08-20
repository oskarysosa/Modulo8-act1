const { asyncToUpperCase } = require('../src/funciones');

test('La función asyncToUpperCase debe convertir el texto a mayúsculas de manera asincrónica', async () => {
    const result = await asyncToUpperCase('hola');
    expect(result).toEqual('HOLA');
  });