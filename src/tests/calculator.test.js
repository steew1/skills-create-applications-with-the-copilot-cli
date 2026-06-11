const { add, sub, mul, div, modulo, power, squareRoot } = require('../calculator');

describe('Calculator operations', () => {
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  // Extended operation examples (from image)
  test('5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('sqrt(16) = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('10 % 3 = 1', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('2 ^ 8 = 256', () => {
    expect(power(2, 8)).toBe(256);
  });

  test('sqrt(9) = 3', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('division by zero throws', () => {
    expect(() => div(5, 0)).toThrow('Division by zero');
  });

  test('modulo by zero throws', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero');
  });

  test('sqrt of negative throws', () => {
    expect(() => squareRoot(-4)).toThrow('Square root of negative number');
  });

  // Additional edge cases
  test('floating point addition', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.30000000000000004);
  });

  test('negative numbers', () => {
    expect(sub(-5, -2)).toBe(-3);
  });
});
