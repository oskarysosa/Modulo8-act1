
const { sumar } = require('../src/funciones'); 
test('La función sumar debe sumar correctamente dos números', () => {
  expect(sumar(2, 3)).toEqual(5);
});
