import { createContext } from 'react';

export const WidgetsContext = createContext();

//initial context value
export const WidgetContext = {
  elements: [],
  formula: '',
  name: 'default calculator',
  lastLetter: 'A',
  width: 720,
  setWidget: () => {},
};

export const InputMetas = {
  Slider: {
    elementType: 'Slider',
    elementIndex: 0,
    elementLetter: 'A',
    elementDescription: 'Slider',
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  },
  ValueInput: {
    name: 'ValueInput',
    elementIndex: 0,
    elementLetter: 'A', //this needs to be then changed to check last letter
    elementDescription: 'Input',
    value: '',
  },
};

export const IndividualWidget = createContext();
