import { combineReducers } from 'redux';
import { widgetsReducer } from './AllWidgetsReducer';
import { calculatorReducer } from './CalculatorReducer';

export const reducers = combineReducers({
  calculator: calculatorReducer,
  widgets: widgetsReducer,
});

export type State = ReturnType<typeof reducers>;
