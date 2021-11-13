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

export const IndividualWidget = createContext();
