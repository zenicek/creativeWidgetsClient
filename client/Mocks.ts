export const exampleFormulaWidget = {
  formula: 'A-B*C*(D-E)',
  elements: [
    { elementLetter: 'A', value: 5 },
    { elementLetter: 'B', value: 1 },
    { elementLetter: 'C', value: 1 },
    { elementLetter: 'D', value: 1 },
    { elementLetter: 'E', value: 1 },
  ],
};

export const invalidFormulaWidget = {
  formula: 'A+B-C',
  elements: [
    { elementLetter: 'A', value: 5 },
    { elementLetter: 'C', value: 1 },
  ],
};

export const apiWidget = {
  name: 'banana',
  formula: 'A+B',
  width: 750,
  lastLetter: 'B',
  resultDescription: 'USD',
  resultValueDesc: 'Money',
  result: [],
  elements: [
    {
      elementType: 'Text',
      elementLetter: 'A',
      elementDescription: 'This is text',
    },
    {
      elementType: 'Text',
      elementLetter: 'B',
      elementDescription: 'This is also text',
    },
  ],
};
