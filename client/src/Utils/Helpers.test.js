<<<<<<< HEAD
import { calculateResult } from './Helpers';
import { exampleWidget, invalidFormulaWidget } from '../../Mocks';

const invalidWidget = describe('calculateResult function', () => {
=======
import { calculateResult, genErrorMessage, hasValidFormula } from './Helpers';
import { exampleWidget, invalidFormulaWidget } from '../../Mocks';

describe('calculateResult function', () => {
>>>>>>> eb9b714df7867af96ec9ff8acb1895d63fa1cc90
  test('calculates values from formula correctly', () => {
    expect(calculateResult(exampleWidget)).toBe(5);
  });

  test('return null if not provided with values', () => {
    expect(calculateResult(invalidFormulaWidget)).toBe(null);
  });
<<<<<<< HEAD
=======
});

describe('hasValidFormula function', () => {
  test('evaluates correctly if widget has a valid forumula', () => {
    expect(hasValidFormula(exampleWidget)).toBe(true);
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
>>>>>>> eb9b714df7867af96ec9ff8acb1895d63fa1cc90
});

describe('hasValidFormula function', () => {});
