import { Dispatch } from 'react';
import {
  AllWidgets,
  WidgetReducers,
  WidgetActions,
} from '../../Types/StateTypes/AllWidgets';

export const setAllWidgets = (widgets: AllWidgets[]) => {
  return (dispatch: Dispatch<WidgetReducers>) => {
    dispatch({
      type: WidgetActions.ALL_WIDGETS,
      payload: { widgets },
    });
  };
};

export const removeWidget = (id: string) => {
  return (dispatch: Dispatch<WidgetReducers>) => {
    dispatch({
      type: WidgetActions.REMOVE_WIDGET,
      payload: { _id: id },
    });
  };
};
