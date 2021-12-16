import { combineReducers } from 'redux';
import { calculatorReducer } from './CalculatorReducer';

export const reducers = combineReducers({
  calculator: calculatorReducer,
});

export type State = ReturnType<typeof reducers>;
