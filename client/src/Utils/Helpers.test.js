import { calculateResult } from './Helpers';

describe('calculateResult function', () => {
  const exampleWidget = {
    formula: 'A-B*C*(D-E)',
    elements: [
      { elementLetter: 'A', value: 5 },
      { elementLetter: 'B', value: 1 },
      { elementLetter: 'C', value: 1 },
      { elementLetter: 'D', value: 1 },
      { elementLetter: 'E', value: 1 },
    ],
  };
  test('calculates values from formula correctly', () => {
    expect(calculateResult(exampleWidget)).toBe(5);
  });
});
