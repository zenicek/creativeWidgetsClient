import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './Reducers';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

export type State = ReturnType<typeof reducers>;
