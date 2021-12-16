import { createContext, useContext } from 'react';
import { IndividualWidgetInterface } from '../Types/IndividualWidgetInterface';
import { Calculator } from '../Types/Widget';

interface WidgetsContextInterface {
  widgets: Calculator[];
  setWidgets: React.Dispatch<React.SetStateAction<Calculator[]>>;
}

export const WidgetsContext = createContext<WidgetsContextInterface | null>(
  null
);

export function useWidgetsContext() {
  const context = useContext(WidgetsContext);
  if (!context) throw new Error('widgets context provider not present.');
  return context;
}

export const IndividualWidget = createContext<IndividualWidgetInterface | null>(
  null
);

export function useIndividualWidgetContext() {
  const context = useContext(IndividualWidget);
  if (!context)
    throw new Error('individual widget context provider not present.');
  return context;
}

//initial context value
export const WidgetContext: Calculator = {
  elements: [],
  formula: '',
  name: 'default calculator',
  lastLetter: '@',
  width: 720,
  resultDescription: 'Result description placeholder',
  resultValueDesc: 'USD',
  results: [],
};
interface InputMetasInterface {
  [key: string]: {};
}
export const InputMetas: InputMetasInterface = {
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
