function sumar(a, b) {
    return a + b;
  }
  
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  
  async function asyncToUpperCase(text) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(text.toUpperCase());
      }, 100);
    });
  }
  
  module.exports = {
    sumar,
    isValidEmail,
    asyncToUpperCase
  };
  