import generarFizzBuzz from './fizzbuzz.js';

describe('FizzBuzz', () => {
  it('Debería retornar el número', () => {
    expect(generarFizzBuzz(1)).toEqual('1');
  });
  it('Debería retornar el fizz si es 3', () => {
    expect(generarFizzBuzz(3)).toEqual('Fizz');
  });
  it('Debería retornar el fizz si es multiplo de 3', () => {
    expect(generarFizzBuzz(9)).toEqual('Fizz');
  });
  it('Debería retornar el buzz si es 5', () => {
    expect(generarFizzBuzz(5)).toEqual('Buzz');
  });
  it('Debería retornar el buzz si es multiplo de 5', () => {
    expect(generarFizzBuzz(10)).toEqual('Buzz');
  });
  it('Debería retornar el fizzbuzz si es multiplo de 3 y 5', () => {
    expect(generarFizzBuzz(15)).toEqual('FizzBuzz');
  });
});


