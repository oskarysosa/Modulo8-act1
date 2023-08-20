const { isValidEmail } = require('../src/funciones');

test('La función isValidEmail debe verificar correctamente un correo válido', () => {
  expect(isValidEmail('ejemplo@example.com')).toBeTruthy();
});
