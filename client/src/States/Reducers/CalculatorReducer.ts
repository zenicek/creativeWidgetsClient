import { nanoid } from 'nanoid';
import {
  CalcActions,
  ReducerActions,
} from '../../Types/StateTypes/CalculatorActionTypes';
import { Calculator } from '../../Types/Widget';
import { nextChar } from '../../Utils/Helpers';
import { CalculatorState } from '../InitialStates/CalculatorStates';

export const calculatorReducer = (
  calculator: Calculator = CalculatorState,
  action: ReducerActions
) => {
  switch (action.type) {
    case CalcActions.SET_WIDGET: {
      return { ...action.payload.calculator };
    }
    case CalcActions.ADD_ELEMENT: {
      const element = {
        ...action.payload.element,
        id: nanoid(), // => use middleware to dispatch to db, which would remove that whole thing with ids
        letter:
          action.payload.element.type !== 'Text'
            ? nextChar(calculator.lastLetter)
            : '',
      };
      return {
        ...calculator,
        lastLetter:
          action.payload.element.type !== 'Text'
            ? element.letter
            : calculator.lastLetter,
        elements: [...calculator.elements, { ...element }],
      };
    }
    case CalcActions.UPDATE_ELEMENT: {
      const updatedElements = calculator.elements.map(el => {
        if (el.id === action.payload.id || el._id === action.payload.id)
          return { ...action.payload.element };
        return el;
      });
      return { ...calculator, elements: [...updatedElements] };
    }
    case CalcActions.DELETE_ELEMENT: {
      return {
        ...calculator,
        elements: [
          ...calculator.elements.filter(
            el => el._id !== action.payload.id || el.id !== action.payload.id
          ),
        ],
      };
    }
    case CalcActions.ARRANGE_ELEMENTS: {
      return { ...calculator, elements: [...action.payload.elements] };
    }
    case CalcActions.UPDATE_FORMULA: {
      return { ...calculator, formula: action.payload.formula };
    }
    case CalcActions.UPDATE_RES_DESC: {
      return {
        ...calculator,
        resultDescription: action.payload.resultDescription,
      };
    }
    case CalcActions.UPDATE_RES_VAL: {
      return { ...calculator, resultValueDesc: action.payload.resultValueDesc };
    }
    default:
      return calculator;
  }
};
