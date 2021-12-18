import { Elements } from '../../Types/Element';
import {
  CalcActions,
  ReducerActions,
} from '../../Types/StateTypes/CalculatorActionTypes';
import { Calculator } from '../../Types/Widget';
import { Dispatch } from 'react';

export const setCalculator = (calculator: Calculator) => {
  return (dispatch: Dispatch<ReducerActions>) => {
    dispatch({ type: CalcActions.SET_WIDGET, payload: { calculator } });
  };
};

export const addElement = (element: Elements) => {
  return (dispatch: Dispatch<ReducerActions>) => {
    dispatch({
      type: CalcActions.ADD_ELEMENT,
      payload: { element },
    });
  };
};

export const updateElement = (id: string, element: Elements) => {
  return (dispatch: Dispatch<ReducerActions>) => {
    dispatch({
      type: CalcActions.UPDATE_ELEMENT,
      payload: { id, element },
    });
  };
};

export const arrangeElements = (elements: Elements[]) => {
  return (dispatch: Dispatch<ReducerActions>) => {
    dispatch({
      type: CalcActions.ARRANGE_ELEMENTS,
      payload: { elements },
    });
  };
};

export const updateFormula = (formula: string) => {
  return (dispatch: Dispatch<ReducerActions>) => {
    dispatch({
      type: CalcActions.UPDATE_FORMULA,
      payload: { formula },
    });
  };
};

export const updateResultDesc = (resultDescription: string) => {
  return (dispatch: Dispatch<ReducerActions>) => {
    dispatch({
      type: CalcActions.UPDATE_RES_DESC,
      payload: { resultDescription },
    });
  };
};

export const updateResultValueDesc = (resultValueDesc: string) => {
  return (dispatch: Dispatch<ReducerActions>) => {
    dispatch({
      type: CalcActions.UPDATE_RES_VAL,
      payload: { resultValueDesc },
    });
  };
};
