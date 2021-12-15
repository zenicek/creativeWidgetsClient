import { Calculator } from '../../Types/Widget';

export const CalculatorState: Calculator = {
  elements: [],
  formula: '',
  name: 'default calculator',
  lastLetter: '@',
  width: 720,
  resultDescription: 'Result description placeholder',
  resultValueDesc: 'USD',
  results: [],
};

export const InputMetas = {
  Slider: {
    type: 'Slider',
    description: 'Slider',
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  },
  ValueInput: {
    type: 'ValueInput',
    description: 'Input',
    value: '',
  },
  List: {
    type: 'List',
    description: 'List',
    value: '',
    list: [],
  },
  Text: {
    type: 'Text',
    description: 'Text',
  },
};
