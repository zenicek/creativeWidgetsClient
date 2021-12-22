import {
  AllWidgets,
  WidgetActions,
  WidgetReducers,
} from '../../Types/StateTypes/AllWidgets';
import { allWidgets } from '../InitialStates/AllWidgetsState';

export const widgetsReducer = (
  widgets: AllWidgets[] = allWidgets,
  action: WidgetReducers
) => {
  switch (action.type) {
    case WidgetActions.ALL_WIDGETS: {
      return [...action.payload.widgets];
    }
    case WidgetActions.REMOVE_WIDGET: {
      return widgets.filter(widget => widget._id !== action.payload._id);
    }
    default:
      return widgets;
  }
};
