import { Elements } from '../../Types/Element';
import { CalcActions } from '../../Types/StateTypes/ActionTypes';
import { Calculator } from '../../Types/Widget';

export const setCalculator = (calculator: Calculator) => {
  return {
    type: CalcActions.ADD_ELEMENT,
    payload: { calculator },
  };
};

export const addElement = (element: Elements) => {
  return {
    type: CalcActions.ADD_ELEMENT,
    payload: { element },
  };
};

export const updateElement = (id: string, element: Elements) => {
  return {
    type: CalcActions.UPDATE_ELEMENT,
    payload: { id, element },
  };
};

export const arrangeElements = (elements: Elements[]) => {
  return {
    type: CalcActions.ARRANGE_ELEMENTS,
    payload: { elements },
  };
};

export const updateFormula = (formula: string) => {
  return {
    type: CalcActions.UPDATE_FORMULA,
    payload: { formula },
  };
};

export const updateResultDesc = (resultDescription: string) => {
  return {
    type: CalcActions.UPDATE_RES_DESC,
    payload: { resultDescription },
  };
};

export const updateResultValueDesc = (resultValueDesc: string) => {
  return {
    type: CalcActions.UPDATE_RES_VAL,
    payload: { resultValueDesc },
  };
};
