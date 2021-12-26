import {
  ListInterface,
  SliderInterface,
  TextInterface,
  ValueInputInterface,
} from '../../Types/Element';
import { Calculator } from '../../Types/Widget';

export const CalculatorState: Calculator = {
  elements: [],
  formula: '',
  type: 'Calculator',
  name: 'default calculator',
  lastLetter: '@',
  width: 720,
  resultDescription: 'Result description placeholder',
  resultValueDesc: 'USD',
  results: [],
};

interface InputMetasInterface {
  Slider: SliderInterface;
  ValueInput: ValueInputInterface;
  List: ListInterface;
  Text: TextInterface;
}

export const InputMetas: InputMetasInterface = {
  Slider: {
    type: 'Slider',
    description: 'Slider',
    value: 0,
    min: 0,
    max: 10,
    step: 1,
    letter: '',
  },
  ValueInput: {
    type: 'ValueInput',
    description: 'Input',
    value: '',
    letter: '',
  },
  List: {
    type: 'List',
    description: 'List',
    value: '',
    letter: '',
    list: [],
  },
  Text: {
    type: 'Text',
    description: 'Text',
    value: '',
    letter: '',
  },
};
