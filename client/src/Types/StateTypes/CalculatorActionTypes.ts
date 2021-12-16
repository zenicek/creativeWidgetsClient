import { Elements } from '../Element';
import { Calculator } from '../Widget';

export enum CalcActions {
  ADD_ELEMENT = 'ADD_ELEMENT',
  SET_WIDGET = 'SET_WIDGET',
  UPDATE_ELEMENT = 'UPDATE_ELEMENT',
  ARRANGE_ELEMENTS = 'ARRANGE_ELEMENTS',
  DELETE_ELEMENT = 'DELETE_ELEMENT',
  UPDATE_FORMULA = 'UPDATE_FORMULA',
  UPDATE_RES_DESC = 'UDPATE_RES_DESC', // once implemented refactor for more results
  UPDATE_RES_VAL = 'UPDATE_RES_VAL',
  FETCH_WIDGET = 'FETCH_WIDGET', // => for middleware
}

interface setCalculatorType {
  type: CalcActions.SET_WIDGET;
  payload: {
    calculator: Calculator;
  };
}

interface addElementType {
  type: CalcActions.ADD_ELEMENT;
  payload: {
    element: Elements;
  };
}

interface arrangeElementsType {
  type: CalcActions.ARRANGE_ELEMENTS;
  payload: {
    elements: Elements[];
  };
}

interface updateElementType {
  type: CalcActions.UPDATE_ELEMENT;
  payload: {
    element: Elements;
    id: string;
  };
}

interface deleteElementType {
  type: CalcActions.DELETE_ELEMENT;
  payload: {
    id: string;
  };
}

interface updateFormulaType {
  type: CalcActions.UPDATE_FORMULA;
  payload: {
    formula: string;
  };
}
interface updateResDescType {
  type: CalcActions.UPDATE_RES_DESC;
  payload: {
    resultDescription: string;
  };
}
interface updateResValType {
  type: CalcActions.UPDATE_RES_VAL;
  payload: {
    resultValueDesc: string;
  };
}

export type ReducerActions =
  | updateElementType
  | addElementType
  | updateResDescType
  | updateResValType
  | updateFormulaType
  | deleteElementType
  | arrangeElementsType
  | setCalculatorType;
