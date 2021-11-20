import { createContext } from 'react';
import { Widget } from '../Types/Widget';

interface WidgetsContextInterface {
  widgets: Widget[];
  setWidgets: React.Dispatch<React.SetStateAction<Widget[]>>;
}

export const WidgetsContext = createContext<WidgetsContextInterface | null>(
  null
);

interface IndividualWidgetInterface {}

export const IndividualWidget = createContext(null);

//initial context value
export const WidgetContext = {
  elements: [],
  formula: '',
  name: 'default calculator',
  lastLetter: '@',
  width: 720,
  resultDescription: 'Result description placeholder',
  resultValueDesc: 'USD',
  result: [],
};

export const InputMetas = {
  Slider: {
    elementType: 'Slider',
    elementDescription: 'Slider',
    value: 0,
    min: 0,
    max: 10,
    step: 1,
  },
  ValueInput: {
    elementType: 'ValueInput',
    elementDescription: 'Input',
    value: '',
  },
  List: {
    elementType: 'List',
    elementDescription: 'List',
    value: '',
    list: [],
  },
  Text: {
    elementType: 'Text',
    elementDescription: 'Text',
  },
};
