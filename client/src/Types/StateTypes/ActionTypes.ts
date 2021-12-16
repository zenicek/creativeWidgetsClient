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
}

export type CaclReducer = {
  type: CalcActions;
  payload: {
    element: Elements;
    id: string;
    elements: Elements[];
    formula: string;
    resultDescription: string;
    resultValueDesc: string;
    calculator: Calculator;
  };
};
