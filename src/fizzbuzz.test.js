import generarFizzBuzz from './fizzbuzz.js';

describe('FizzBuzz', () => {
  it('Debería retornar el número', () => {
    expect(generarFizzBuzz(1)).toEqual('1');
  });
  it('Debería retornar el fizz si es 3', () => {
    expect(generarFizzBuzz(3)).toEqual('Fizz');
  });
});


