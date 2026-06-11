const { add, sub, mul, div } = require('../calculator');

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

  test('division by zero throws', () => {
    expect(() => div(5, 0)).toThrow('Division by zero');
  });

  // Additional edge cases
  test('floating point addition', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.30000000000000004);
  });

  test('negative numbers', () => {
    expect(sub(-5, -2)).toBe(-3);
  });
});
