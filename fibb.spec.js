import {fibbonacci} from './fibb.js';

describe('fibbonacci', () => {
  it.skip('should return the correct fibbonacci number for a given input', () => {
    expect(fibbonacci(0)).toBe(0);
    expect(fibbonacci(1)).toBe(1);
    expect(fibbonacci(2)).toBe(1);
    expect(fibbonacci(3)).toBe(2);
    expect(fibbonacci(4)).toBe(3);
    expect(fibbonacci(5)).toBe(5);
    expect(fibbonacci(10)).toBe(55);
  });

  it.skip('should handle negative input by returning null', () => {
    expect(fibbonacci(-1)).toBeNull();
    expect(fibbonacci(-5)).toBeNull();
  });

  it.skip('should handle non-integer input by returning null', () => {
    expect(fibbonacci(1.5)).toBeNull();
    expect(fibbonacci('string')).toBeNull();
    expect(fibbonacci(null)).toBeNull();
    expect(fibbonacci(undefined)).toBeNull();
  });
});