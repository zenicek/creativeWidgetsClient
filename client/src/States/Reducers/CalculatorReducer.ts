import { nanoid } from 'nanoid';
import { CaclReducer, CalcActions } from '../../Types/StateTypes/ActionTypes';
import { Calculator } from '../../Types/Widget';
import { nextChar } from '../../Utils/Helpers';
import { CalculatorState } from '../InitialStates/CalculatorStates';

export const calculatorReducer = (
  calculator: Calculator = CalculatorState,
  { type, payload }: CaclReducer
) => {
  switch (type) {
    case CalcActions.SET_WIDGET: {
      return { ...payload.calculator };
    }
    case CalcActions.ADD_ELEMENT: {
      const element = {
        ...payload.element,
        id: nanoid(), // => use middleware to dispatch to db, which would remove that whole thing with ids
        letter:
          payload.element.type !== 'Text'
            ? nextChar(calculator.lastLetter)
            : '',
      };
      return {
        ...calculator,
        lastLetter:
          payload.element.type !== 'Text'
            ? element.letter
            : calculator.lastLetter,
        elements: [...calculator.elements, { ...element }],
      };
    }
    case CalcActions.UPDATE_ELEMENT: {
      const updatedElements = calculator.elements.map(el => {
        if (el.id === payload.id || el._id === payload.id)
          return { ...payload.element };
        return el;
      });
      return { ...calculator, elements: [...updatedElements] };
    }
    case CalcActions.DELETE_ELEMENT: {
      return {
        ...calculator,
        elements: [
          ...calculator.elements.filter(
            el => el._id !== payload.id || el.id !== payload.id
          ),
        ],
      };
    }
    case CalcActions.ARRANGE_ELEMENTS: {
      return { ...calculator, elements: [...payload.elements] };
    }
    case CalcActions.UPDATE_FORMULA: {
      return { ...calculator, formula: payload.formula };
    }
    case CalcActions.UPDATE_RES_DESC: {
      return { ...calculator, resultDescription: payload.resultDescription };
    }
    case CalcActions.UPDATE_RES_VAL: {
      return { ...calculator, resultValueDesc: payload.resultValueDesc };
    }
    default:
      return calculator;
  }
};
