import { calculateResult } from './Helpers';
import { exampleWidget, invalidFormulaWidget } from '../../Mocks';

const invalidWidget = describe('calculateResult function', () => {
  test('calculates values from formula correctly', () => {
    expect(calculateResult(exampleWidget)).toBe(5);
  });

  test('return null if not provided with values', () => {
    expect(calculateResult(invalidFormulaWidget)).toBe(null);
  });
});

describe('hasValidFormula function', () => {});
