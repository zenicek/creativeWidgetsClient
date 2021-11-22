import { calculateResult, genErrorMessage, hasValidFormula } from './Helpers';
import { exampleFormulaWidget, invalidFormulaWidget } from '../../Mocks';

describe('calculateResult function', () => {
  test('calculates values from formula correctly', () => {
    expect(calculateResult(exampleFormulaWidget)).toBe(5);
  });

  test('return null if not provided with values', () => {
    expect(calculateResult(invalidFormulaWidget)).toBe(null);
  });
});

describe('hasValidFormula function', () => {
  test('evaluates correctly if widget has a valid forumula', () => {
    expect(hasValidFormula(exampleFormulaWidget)).toBe(true);
  });

  test('evaluates correctly if widget has invalid formula', () => {
    expect(hasValidFormula(invalidFormulaWidget)).toBe(false);
  });
});

describe('genErrorMessage function', () => {
  test('returns correct error messsage', () => {
    expect(genErrorMessage(invalidFormulaWidget)).toBe(
      'Elements with letter "B" don\'t exist'
    );
  });
});
