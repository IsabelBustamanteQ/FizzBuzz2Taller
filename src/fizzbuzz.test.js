import generarFizzBuzz from './fizzbuzz.js';

describe('FizzBuzz', () => {
  it('Debería retornar el número', () => {
    expect(generarFizzBuzz(1)).toEqual('1');
  });
});


