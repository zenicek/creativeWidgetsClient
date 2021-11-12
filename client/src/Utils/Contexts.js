import { createContext } from 'react';

export const WidgetsContext = createContext();

export const IndividualWidget = createContext();

//initial context value
export const WidgetContext = {
  widget: {
    elements: [],
    formula: '',
    name: 'default calculator',
    lastLetter: 'A',
    width: 720,
  },
  updateElement: (id, newEl) => {
    const el = WidgetContext.widget.elements.find(el => el._id === id);
    el = { ...newEl };
  },
  addElement: el => {
    return WidgetContext.widget.elements.concat(el);
  },
  updateWidgetName: name => {
    return (WidgetContext.widget.name = name);
  },
  updateWidgetWidth: width => {
    return (WidgetContext.widget.width = width);
  },
  updateWidgetFormula: formula => {
    return (WidgetContext.widget.formula = formula);
  },
  updateWidgetLastLetter: letter => {
    return (WidgetContext.widget.lastLetter = letter);
  },
};
